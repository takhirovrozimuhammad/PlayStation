# ps-reception (PS + PC Reception Panel)

This is a **starter UI** for a reception panel that manages **PlayStation + PC** in one system,
connected to **Supabase** (PostgreSQL).

## What works now
- UI shell (Sidebar/Topbar)
- Zones page reads `zones` from Supabase
- Stations page reads `stations` from Supabase
- Station detail page reads one station by id (UUID) and shows basic timer UI

## Setup
1) Install deps:
   npm i

2) Create `.env.local`:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...

3) Run:
   npm run dev

## Notes
- Auth + RLS + realtime will be added next.
