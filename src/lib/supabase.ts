// Server side only Supabase client. Service role key must never reach the browser.
// Same Supabase project as the WHV brand, its own env vars in this deployment.
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url) throw new Error('Missing env var: NEXT_PUBLIC_SUPABASE_URL')
  if (!key) throw new Error('Missing env var: SUPABASE_SERVICE_ROLE_KEY')

  _supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      // Explicitly disable caching on every request (lesson learned in the
      // WHV codebase: route level force-dynamic does not always propagate).
      fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }),
    },
  })
  return _supabase
}

// Same shared storage bucket as the WHV brand. Identity documents live here,
// so the bucket must stay PRIVATE. Files are keyed per client folder.
export const STORAGE_BUCKETS = {
  uploads: 'uploads',
} as const

let _bucketPrivacyVerified = false

/** Fail-closed guard: refuse to upload identity docs if the bucket is public. */
export async function assertUploadsBucketPrivate(): Promise<void> {
  if (_bucketPrivacyVerified) return
  const sb = getSupabase()
  const { data, error } = await sb.storage.getBucket(STORAGE_BUCKETS.uploads)
  if (error || !data) {
    throw new Error(`Cannot verify uploads bucket privacy: ${error?.message ?? 'bucket not found'}`)
  }
  if (data.public) {
    throw new Error('SECURITY: "uploads" bucket is PUBLIC. It must be private. Aborting upload.')
  }
  _bucketPrivacyVerified = true
}
