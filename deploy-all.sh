#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "========================================="
echo "  Deploying GenPlatform to Vercel"
echo "========================================="

# Deploy Wiki
echo ""
echo ">>> [1/3] Deploying Wiki → ageofabundance-wiki"
cd apps/wiki
mkdir -p .vercel
cat > .vercel/project.json << 'EOF'
{"orgId":"team_PDFieAJX8zfdDS6PQzvwRTTz","projectId":"prj_gl37pfxCHeo5koAlPoPwoJA9WPRQ"}
EOF
SKIP_ENV_VALIDATION=1 npx vercel deploy --prod --yes
echo "✅ Wiki deployed!"

# Deploy Studio
echo ""
echo ">>> [2/3] Deploying Studio → ageofabundance-art"
cd ../studio
mkdir -p .vercel
cat > .vercel/project.json << 'EOF'
{"orgId":"team_PDFieAJX8zfdDS6PQzvwRTTz","projectId":"prj_KtdkcmF8aTEG3gJ1j0BFzDcHk1YA"}
EOF
SKIP_ENV_VALIDATION=1 npx vercel deploy --prod --yes
echo "✅ Studio deployed!"

# Deploy Pulse
echo ""
echo ">>> [3/3] Deploying Pulse → theageofabundance-org"
cd ../pulse
mkdir -p .vercel
cat > .vercel/project.json << 'EOF'
{"orgId":"team_PDFieAJX8zfdDS6PQzvwRTTz","projectId":"prj_N18mgOTOUy1MROcHSLOIvQSDI8Im"}
EOF
SKIP_ENV_VALIDATION=1 npx vercel deploy --prod --yes
echo "✅ Pulse deployed!"

echo ""
echo "========================================="
echo "  ALL 3 APPS DEPLOYED!"
echo "========================================="
echo "  Wiki:   https://ageofabundance-wiki.vercel.app"
echo "  Art:    https://ageofabundance-art.vercel.app"
echo "  Pulse:  https://theageofabundance-org.vercel.app"
echo "========================================="
