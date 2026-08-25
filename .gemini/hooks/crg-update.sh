#!/usr/bin/env bash
# code-review-graph: incremental update after write/replace (Gemini CLI hook)
# Must output ONLY JSON on stdout. Low-noise: no systemMessage.
set -euo pipefail

cat > /dev/null || true

code-review-graph update --skip-flows --repo "/media/nikhil/f470dc98-92e4-4f7d-af60-1bfe0fc74e046/Portfolio" >/dev/null 2>&1 || true
echo '{"suppressOutput": true}'
exit 0
