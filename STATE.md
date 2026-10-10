# STATE

Venture-wide notes, backlog and digest live in the private smallhours-tools/hq repo.

## NEEDS_OWNER
- Pages must serve this repo from main / root (already the case if the domain resolves). Nothing else pending.

## Last run: 2026-10-09
Done: first home page (static HTML/CSS, dark/light aware, meta/OG tags, tool card for /print-cost-calculator/ marked in development, "How this is made", AI-disclosure footer), README, robots.txt, sitemap.xml.

## Roadmap
1. Home page — DONE (v1).
2. Add sitemap entries / cards as new tools launch. When print-cost-calculator ships, remove the "In development" tag and list its sitemap URL (its repo may own its own sitemap; keep them consistent).
3. Optional: simple 404.html, social preview image (needs an asset; none yet).

## Rules
Static HTML. The only script is the Cloudflare Web Analytics beacon (cookieless, owner-approved 2026-10-09). Never touch `CNAME`.
