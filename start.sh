#!/bin/bash
echo "========================================="
echo "  GenPlatform Monorepo - Starting Up"
echo "========================================="
echo ""

cd "$(dirname "$0")"

# Check for pnpm
if ! command -v pnpm &> /dev/null; then
    echo "Installing pnpm..."
    npm install -g pnpm
fi

echo "Installing dependencies..."
pnpm install

echo ""
echo "Building all apps..."
SKIP_ENV_VALIDATION=1 pnpm turbo build

echo ""
echo "Starting servers..."
echo "  Wiki   → http://localhost:3001"
echo "  Studio → http://localhost:3002"
echo "  Pulse  → http://localhost:3003"
echo ""

cd apps/wiki && SKIP_ENV_VALIDATION=1 npx next start -p 3001 &
cd apps/studio && SKIP_ENV_VALIDATION=1 npx next start -p 3002 &
cd apps/pulse && SKIP_ENV_VALIDATION=1 npx next start -p 3003 &

echo "All servers running! Open http://localhost:3001 in your browser."
echo "Press Ctrl+C to stop all servers."
wait
