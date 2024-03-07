import chromium from 'chrome-aws-lambda'

export async function getBrowserInstance () {
  return chromium.puppeteer.launch({
    args: [
      `--no-sandbox`,
      `--disable-setuid-sandbox`
    ],
    defaultViewport: {
      width: 1280,
      height: 720
    },
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true
  })
}
