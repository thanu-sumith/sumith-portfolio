# Sumith Reddy — Portfolio

A personal website for my work in AI, machine learning, and full-stack development. It brings together a short introduction, selected projects, my résumé, and a way to get in touch.

## The idea

A portfolio should make it easy to understand someone’s work. This site keeps the focus on the projects and the person behind them, with enough detail to start a conversation.

The starting point was my original [My-portfolio repository](https://github.com/thanu-sumith/My-portfolio). This version reuses its photograph, résumé, and project information, and gives that content a more consistent layout.

## How the site came together

The first step was to review the existing content and separate what was useful from what made the page harder to read. The original oversized headings and fixed-width project cards became a responsive layout that works on smaller screens.

The redesign takes a lighter direction: white surfaces, clear typography, blue controls, and distinct blue, coral, mint, and lavender project treatments. The layout combines generous spacing with layered cards, a portrait-led about section, and subtle motion. The aim is a carefully composed product-style page that still feels personal.

Projects can be filtered by area, and each card opens a more detailed note about the idea, technical approach, and limitations. The toolkit has keyboard-accessible tabs, and the contact section includes a copy-email action. Motion respects the visitor’s reduced-motion preference.

Plain HTML, CSS, and JavaScript were enough for this site. Keeping the stack small makes it easier to update and lets GitHub Pages serve it without a build step.

The contact form also needed a clear outcome. It now opens an email draft with the visitor’s message instead of appearing to submit to a service that has not been configured.

## What’s included

- An introduction and graduation portrait.
- An about section and a list of technologies.
- Four featured projects: AI Avatar Generator, Text-to-Video Generator, Mental Health AI Companion, and Hspace.
- A downloadable résumé and links to GitHub, LinkedIn, and Instagram.
- A contact form that opens a prefilled email draft.
- Responsive layouts, keyboard focus styles, labelled form fields, and reduced-motion support.

The project descriptions come from the original portfolio. Where a working demo or original source repository was unavailable, no demo link was added. The text-to-video link is labelled as a related fork.

## Run it locally

You only need Python 3:

```bash
python3 -m http.server 8000 --directory dist
```

Then open [localhost:8000](http://localhost:8000).

## Publish it

The included workflow deploys the `dist` folder to GitHub Pages.

1. Push this project to `thanu-sumith/sumith-portfolio` on the `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, or push another commit to `main`.

GitHub will show the live address when deployment succeeds. The intended address is `https://thanu-sumith.github.io/sumith-portfolio/`; it should not be treated as live before publication.

[GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Make it your own

| File | What it controls |
| --- | --- |
| `dist/index.html` | Page content, sections, and links |
| `dist/style.css` | Colours, typography, spacing, and responsive layouts |
| `dist/script.js` | Contact email draft and footer year |
| `dist/background.png` | Original portfolio photograph |
| `dist/resume.pdf` | Downloadable résumé |
| `.github/workflows/pages.yml` | GitHub Pages deployment |
| `repository.json` | Suggested repository description and topics |

The photograph and résumé are served locally. Fonts come from Google Fonts, with system fonts as a fallback.

## Checks and current limits

JavaScript syntax, section links, dialog/tabpanel references, project-filter metadata, and local asset paths were checked. Browser-based visual testing has not been performed. Email delivery depends on the visitor’s email app; there is no contact-form backend.

## Credits

Portfolio content, photograph, and résumé: Thanugundla Sumith Reddy, from the original repository. No new licence is assigned to these personal assets in this package.
