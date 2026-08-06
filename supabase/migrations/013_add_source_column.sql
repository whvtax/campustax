-- ════════════════════════════════════════════════════════════════════════════
-- Shared Supabase project: add brand source column for CampusTax
-- Run in: Supabase Dashboard → SQL Editor → New Query → Paste → Run
-- Safe to run on the live database: adds columns with defaults, no rewrites
-- of existing data semantics. Every existing row is tagged 'whv'.
-- Run this BEFORE deploying the CampusTax site.
-- ════════════════════════════════════════════════════════════════════════════

ALTER TABLE crm_clients
  ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'whv';

ALTER TABLE crm_tasks
  ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'whv';

-- Fast filtering in the dashboard
CREATE INDEX IF NOT EXISTS idx_crm_tasks_source ON crm_tasks (source);
CREATE INDEX IF NOT EXISTS idx_crm_clients_source ON crm_clients (source);
