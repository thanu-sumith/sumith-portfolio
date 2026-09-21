# Avatar Studio

The project website lives at `dist/avatar-studio/` and is deployed by the existing
GitHub Pages workflow. It is linked below the three original portfolio projects.

- `index.html`: model description, training-method explanation, verified runtime
  settings, limitations, and references.
- `style.css`: responsive cream-and-cobalt design matching Mood Atlas.
- `studio.js`: keyboard-accessible process tabs and click-to-load studio embed.

Generation remains on the existing Hugging Face Space:
https://huggingface.co/spaces/Sumith0102/personal_project

The website does not host weights, reference photographs, API keys, or inference
code. No additional paid service is provisioned. The Space's original training
record is unavailable; the training section explicitly explains the method,
not unverified run-specific hyperparameters. The diagram is not live telemetry.

## Release verification

Production Next.js export and four existing tests passed. Browser checks passed
at widths from 320 to 1440 pixels, with keyboard tabs, reduced motion, no-JavaScript
access, and portfolio navigation. The three original project cards and existing
Mood Atlas links were preserved. Embedded-frame wiring was checked with a fixture;
no GPU inference request was made during these website checks.

The deployment is additive; previous hashed assets are retained for cached pages.
For a critical regression, revert the Avatar Studio release commit. The preceding
published revision is `ec48d98552bad7bee2cf97c56d94aa5b0bc03be5`.
