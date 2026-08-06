# Changes needed in the WHV project (workingholidaytax)

Two small changes in the existing project so the shared CRM can tell the two
brands apart. Do them in this order, before deploying the CampusTax site.

## 1. Run the migration on the shared Supabase project

Run `supabase/migrations/013_add_source_column.sql` (included in this repo)
in Supabase Dashboard → SQL Editor. It adds a `source` column to
`crm_clients` and `crm_tasks` with default `'whv'`, so every existing row is
tagged as the WHV brand automatically. Copy the file into the WHV repo's
`supabase/migrations/` folder as well, so the migration history stays complete.

## 2. Tag new WHV rows explicitly (src/lib/db.ts)

In `createTask` in `src/lib/db.ts`, add one line to the `row` object:

```ts
source: 'whv',
```

(The column default already covers this, but being explicit keeps the code
honest if the default ever changes.)

Add `source` to the `Task` type and to `toTask`:

```ts
// in type Task:
source?: string

// in toTask(r):
source: (r.source as string) ?? 'whv',
```

## 3. Brand filter in the dashboard (src/app/crm/dashboard/DashboardClient.tsx)

Add a filter state near the other useState calls:

```ts
const [brandFilter, setBrandFilter] = useState<'all' | 'whv' | 'students'>('all')
```

In the two task list memos (around lines 1209 and 1221, `pendingTasks` and
the done list), add a source condition to the base filter:

```ts
const base = tasks.filter(t => !t.done
  && (brandFilter === 'all' || (t.source ?? 'whv') === brandFilter))
```

Add the filter UI next to the search box, three chips:

```tsx
{(['all', 'whv', 'students'] as const).map(b => (
  <button
    key={b}
    onClick={() => setBrandFilter(b)}
    className={`rounded-full px-3 py-1 text-xs font-bold border ${
      brandFilter === b ? 'bg-forest-500 text-white' : 'text-gray-500'
    }`}
  >
    {b === 'all' ? 'All brands' : b === 'whv' ? 'WHV' : 'CampusTax'}
  </button>
))}
```

That is the whole change. The CampusTax site writes `source: 'students'` on
every task it creates, so once the migration has run, the dashboard can
split the pipeline by brand.

## Not copied on purpose

The CampusTax site does not call the WHV API routes, does not reuse the WHV
GA4 or Search Console, and does not link to the WHV site anywhere.
