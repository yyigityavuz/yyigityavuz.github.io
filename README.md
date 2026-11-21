# Yiğit Yavuz — Game Developer Portfolio

Live site: https://yyigityavuz.github.io

## CV

The CV source is `cv/cv.html`. Edit it (also works from GitHub's web editor) and push to `main`:
the Pages workflow rebuilds `cv/Yigit_Yavuz_CV.pdf` automatically during deploy, and shows a
warning in the Actions log if the CV no longer fits on one page.

To build the PDF locally:

```bash
npm i -D playwright && npx playwright install chromium
node cv/build-pdf.js
```
