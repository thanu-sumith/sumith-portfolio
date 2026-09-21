# Sumith Reddy — portfolio

A personal portfolio focused on my work in AI and software engineering. The homepage introduces me, explains four selected projects, and includes my experience, education, résumé, and contact links.

## Design

The page uses a light background, readable typography, and a single blue accent. Projects follow the introduction immediately. Grades, the cinematic scroll sequence, and decorative project art are no longer part of the homepage. Native HTML disclosure sections provide deeper project stories without JavaScript.

Project descriptions distinguish individual contributions, team work, measured results, limitations, and proposed next steps. Mood Atlas content reflects its current GoEmotions baseline rather than the earlier mental-health classifier. No new performance or training-history claims are invented.

## Run locally

The homepage source is the served HTML and CSS. No package installation or build is needed:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. The relative links also work under the GitHub Pages `/sumith-portfolio/` base path.

## Edit

| File | Purpose |
| --- | --- |
| `dist/index.html` | Introduction, project summaries and case studies, background, contact |
| `dist/portfolio.css` | Responsive homepage layout and styling |
| `dist/avatar-studio/` | Existing detailed avatar workflow and interactive studio launcher |
| `dist/Sumith_Reddy_Resume.pdf` | Existing downloadable résumé |
| `.github/workflows/pages.yml` | Deploys `dist` to GitHub Pages when `main` changes |

Legacy animation assets and compiled bundles remain in the repository for a separate cleanup; the redesigned homepage does not reference or download them. Avatar Studio remains available at its existing URL.

## Content sources

- Mood Atlas: https://github.com/thanu-sumith/mood-atlas — README and evaluation record.
- Flicklytics: https://github.com/thanu-sumith/flicklytics — public team snapshot and contribution attribution.
- OurSpace: https://github.com/thanu-sumith/Our-space-web-chatting-app — demo and private-app boundaries.
- Avatar Studio: existing `dist/avatar-studio/index.html` and its linked application/model sources.
- Experience and education: retained from the previous portfolio. The publication information is résumé-reported; no independent publication verification is implied.

External demo availability depends on the respective hosting service. Linking to a demo does not establish that its running version matches the current source. The homepage itself makes no remote API calls and does not collect visitor data.

## Publication

The existing Pages workflow serves `dist` directly. Review and merge the redesign pull request to publish through that workflow. Until then, the live homepage stays on the previous version.
