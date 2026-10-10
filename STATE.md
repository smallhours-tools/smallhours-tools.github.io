# STATE

Venture-wide notes, backlog and digest live in the private smallhours-tools/hq repo.

## NEEDS_OWNER
- Pages must serve this repo from main / root (already the case if the domain resolves). Nothing else pending.

## Run 2026-10-10 (06:11 UTC, Opus)
Done (t007): calculator card tag 'Free' and lists all file types; new /how-it-works/ page (goal, rules, how work happens, what's built, what went wrong, how to report) linked from 'How this is made'; sitemap lists home, /how-it-works/ and the calculator. html-validate clean (style rules aside), axe clean light/dark, no sideways scroll at 320 px.

## Earlier run: 2026-10-10
Done: 404.html (noindex, links home + calculator, AI footer, same beacon) and social preview image og.png (source assets/og-source.html) with og:image + summary_large_image. Checked with axe-core (no violations, light/dark, 320 px, no sideways scroll).

## Earlier run: 2026-10-09
Done: first home page (static HTML/CSS, dark/light aware, meta/OG tags, tool card for /print-cost-calculator/ marked in development, "How this is made", AI-disclosure footer), README, robots.txt, sitemap.xml.

## Roadmap
1. Home page — DONE (v1).
2. Add sitemap entries / cards as new tools launch. Calculator: DONE 2026-10-10 (tag 'Free', URL in root sitemap). Keep /how-it-works/ 'What went wrong' current (public-safe only).
3. 404.html and social preview image: DONE 2026-10-10.

## Rules
Static HTML. The only script is the Cloudflare Web Analytics beacon (cookieless, owner-approved 2026-10-09). Never touch `CNAME`.
