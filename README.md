# PS + PC Club (Supabase, real data)

## Pages
- `/` Public Info Page (real data from Supabase): zones + stations availability + prices
- `/login` Simple staff login (temporary hardcoded credentials)
- `/dashboard` Staff dashboard (protected by cookie)

## Temporary login
- Login: 883393339
- Password: hacker

## Setup
1) `npm i`
2) Create `.env.local` from `.env.example`
3) `npm run dev`
4) Open http://localhost:3000

## Supabase tables expected
- `zones(id, name, description)`
- `stations(id, zone_id, code, type, status, base_hour_price)`
(Exactly like the SQL we created earlier.)
