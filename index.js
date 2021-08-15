const puppeteer = require("puppeteer");

// ວິທີໃຊ້ ຕິດຕັ້ງ NodeJS (https://nodejs.org/en/)
// ເປີດ Terminal ເຂົ້າ Folder ນີ້ ແລ້ວພິມ npm start

(async () => {
  const browser = await puppeteer.launch({
    // ເປີດໄວ້ຖ້າຢາກເຫັນໜ້າແມວ
    headless: false,

    // ຕຶ່ມ // ໃສ່ທາງເທິງ ແລະ ລຶບ // ລຸ່ມນີ້ ຖ້າບໍ່ຢາກເຫັນໜ້າແມວ && ບໍ່ມີສຽງ
    // headless: true,
    // args: [
    //   "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    //   "--user-data-dir=/tmp/user_data/",
    //   "--window-size=1200,800",
    // ],
  });
  
  let count = 0;

  // ຢາກເປີດຈັກ Tab ຂຽນເອົາເລີຍ ລະວັງ ລະວັງແນ່ລະ 55 ດຽວຄອມຄ້າງ
  let tabs = new Array(5)

  console.log("started");

  for(const i of tabs) {
    const page = await browser.newPage();
    await page.goto("https://popcat.click");
    
    setInterval(async () => {
      try {
        await page.click(".cat-img");
        count++;
      } catch (e) {
        console.log("waiting...");
      }
    }, 10);
  }

  setInterval(() => console.log(count), 1000);

  // await browser.close();
})();
