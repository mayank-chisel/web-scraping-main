// // var fetchUrl = require("fetch").fetchUrl;
// const cheerio = require('cheerio');
// // const axios = require('axios');

// // var requestOptions = {
// //     method: 'GET',
// //     headers: [],
// //     redirect: 'follow'
// // };

// // const fetchData = async () => {
// //     try {
// //         let res = await axios.get("https://portal.productboard.com/peopleexperiencesuite/15-erpx/tabs/41-upcoming-release-q4-2023");
// //         const $ = cheerio.load(res.data);
// //         // const data = $('script').each((i, e) => {
// //         //     // if (i === 3) {
// //         //     //     console.log({ data: $(e).text() })
// //         //     // }
// //         // })
// //         // console.log({data});

// //         const data = $("body > #react > div.c0s_ztqJn85PjF_VwXcL > div._Gn54cEBc7wvVTSP9jzk > div > div.E9NqBsxvV9fQRy6tozB2 > div > div:nth-child(1) > div:nth-child(2) > a > div.P6m9ICmMUfQeN1NVXVRz > div.JAagUFDCTebO5xw_bbCp")
// //         // .each((index, e) => {
// //         //    console.log({index});
// //         // })
// //         console.log({ data });
// //     }
// //     catch (error) {
// //         console.log({ error });
// //     }
// // }

// // fetchData();
// // // fetchUrl(, function (error, meta, body) {
// // //     const $ = cheerio.load(body.toString());

// // //     $("#react > div.c0s_ztqJn85PjF_VwXcL > div._Gn54cEBc7wvVTSP9jzk > div > div.E9NqBsxvV9fQRy6tozB2 > div > div:nth-child(1) > div:nth-child(2) > a > div.P6m9ICmMUfQeN1NVXVRz > div.JAagUFDCTebO5xw_bbCp")
// // //         .each((index, e) => {
// // //             console.log({ e: $(e).text().trim(), i });
// // //         })
// // //     // console.log({ data: data });
// // // });

// const puppeteer = require('puppeteer');



// async function run() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://portal.productboard.com/peopleexperiencesuite");

//     // let source = await page.content();
//     // OR the faster method that doesn't wait for images to load:
//     let source = await page.content({ "waitUntil": "domcontentloaded" });
//     const $ = cheerio.load(source);


//     const links = [];

//     $('div.TMmyFKCvkRQ6HpdsjXPC > a.znsSmIe0CSgIYsz7MUvH').each((i, e) => {
//         links.push(`https://portal.productboard.com/${$(e).attr().href}`)
//     });

//     let data = [];

//     links.forEach(async (link) => {
//         await getHeaderFromLink(link, browser);
//     });


//     console.log({ links, data });
//     // browser.close();
// }



// const getHeaderFromLink = async (link, browser) => {
//     const page = await browser.newPage();
//     await page.goto('https://portal.productboard.com//peopleexperiencesuite/1-fp-a/tabs/3-released');
//     let source = await page.content({ "waitUntil": "domcontentloaded" });
//     const $ = cheerio.load(source);
//     let data = [];
//     console.log({ data: $("#react div.JAagUFDCTebO5xw_bbCp") });
//     $("#react div.JAagUFDCTebO5xw_bbCp")
//         .each((index, e) => {
//             console.log({ item: $(e).text().trim() });
//             data.push($(e).text().trim());
//         });
//     console.log({ data });

// }

// run();