# PS+PC Reception Interface (React/Next.js)

This project recreates the **layout & UI blocks** from the reference screenshot (Rooms board):
- Top header (logo, admin, balance, Add Booking)
- Inner board header (Rooms pill, Add Room button)
- 3-column card grid + right detail panel
- Bottom navigation
- Basic interactions:
  - click a room card -> details appear on the right panel
  - Add Booking / Add Room open simple modal

## Run
1) npm i
2) npm run dev
3) open http://localhost:3000/panel

Notes:
- No '@' alias is used. Only ./ and ../ relative imports.
- Data is mock for now; later we connect Supabase.
