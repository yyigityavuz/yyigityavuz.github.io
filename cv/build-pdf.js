// Regenerates cv/Yigit_Yavuz_CV.pdf from cv/cv.html.
// Runs automatically in the GitHub Pages workflow; locally: node cv/build-pdf.js
// (requires Playwright: npm i -D playwright && npx playwright install chromium)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
    const out = path.join(__dirname, 'Yigit_Yavuz_CV.pdf');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, 'cv.html'), { waitUntil: 'networkidle' });
    await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
    await browser.close();

    const pages = (fs.readFileSync(out, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log(`Wrote cv/Yigit_Yavuz_CV.pdf (${pages} page${pages === 1 ? '' : 's'})`);
    if (pages > 1) {
        const msg = `CV is ${pages} pages — shorten cv/cv.html to fit on one page.`;
        console.log(process.env.GITHUB_ACTIONS ? `::warning file=cv/cv.html::${msg}` : `WARNING: ${msg}`);
    }
})();
