// const chrome = require("chrome-aws-lambda");
// const puppeteer = require("puppeteer-core");

// const exePath = "/usr/bin/chromium-browser";

// async function getOptions(isDev) {
//   if (isDev) {
//     return {
//       product: "chrome",
//       args: [],
//       executablePath: exePath,
//       headless: true,
//     };
//   }

//   return {
//     product: "chrome",
//     args: chrome.args,
//     executablePath: await chrome.executablePath,
//     headless: chrome.headless,
//   };
// }

// async function getScreenshot(url, isDev) {
//   const options = await getOptions(isDev);
//   console.log("📷📷📷");
//   const browser = await puppeteer.launch(options);
//   const page = browser.newPage();
//   console.log(page);
//   await page.setViewport({ width: 1200, height: 630 });
//   await page.goto(url, { waitUntil: "networkidle0" });
//   return page.screenshot({ type: "png", deviceScaleFactor: 1.5 });
// }

// exports.handler = async (event, context) => {
//   const qs = new URLSearchParams();

//   return {
//     statusCode: 200,
//     body: photoBuffer.toString("base64"),
//     isBase64Encoded: true,
//   };
// };
