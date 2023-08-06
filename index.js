const puppeteer = require('puppeteer');

const URL_TO_OPEN = 'https://youtu.be/GHfpGqxF1a4';
const DELAY_BEFORE_CLICK_MS = 10000;
const DELAY_AFTER_CLICK_MS = 100000;

(async () => {
  try {
    let isRunning = true;

    while (isRunning) {
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' 
      });
      const page = await browser.newPage();

      // Mở liên kết
      await page.goto(URL_TO_OPEN);

      // Chờ 10 giây
      await page.waitForTimeout(DELAY_BEFORE_CLICK_MS);

      // Tìm phần tử bạn muốn ấn và ấn vào nó
      await page.waitForSelector('#ytd-player', { visible: true });
      await page.click('#ytd-player');

      // Chờ 100 giây
      await page.waitForTimeout(DELAY_AFTER_CLICK_MS);

      // Tắt trình duyệt
      await browser.close();
    }
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  }
})();
