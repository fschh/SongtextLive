default:
    just serve &
    just frontend &
    just backend

install: 
    cd frontend && npm install
    cd server && npm install

serve:
    cd server && node server.js

frontend:
    cd frontend && npm run dev

frontend_network:
    cd frontend && npm run network

backend:
    cd backend && python3 notifier.py

network:
    just serve &
    sleep 2
    just frontend_network &
    just backend
