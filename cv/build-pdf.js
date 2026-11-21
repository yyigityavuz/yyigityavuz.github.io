// Regenerates cv/Yigit_Yavuz_CV.pdf from cv/cv.html.
// Usage: node cv/build-pdf.js   (requires Playwright: npm i -D playwright)
const path = require('path');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, 'cv.html'), { waitUntil: 'networkidle' });
    await page.pdf({
        path: path.join(__dirname, 'Yigit_Yavuz_CV.pdf'),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
    });
    await browser.close();
    console.log('Wrote cv/Yigit_Yavuz_CV.pdf');
})();
