// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/22#profile';

// // Make the HTTP request using Axios
// axios.get(url)
//     .then(async response => {
//     // Load the HTML into cheerio
//     // const $ = cheerio.load(response.data);

//     // Extract title and profile information
//     const browser = await axios.get(url);
//     const newPage = await browser.newPage();

//             await newPage.goto(profileLink[index]);
//             source = await newPage.content({ "waitUntil": "domcontentloaded" });
//             let $ = cheerio.load(source);
//             const name = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > a.name.no-underline-anchor').text();
//             const tag = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.user-mention-tag > p').text();
//             const rank = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.rank').text();
//             const orgName = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.orgName').text();

//             writer.writeRecords(
//                 [{
//                     name: name.replace(',', ' '),
//                     tag: tag.replace(',', ' '),
//                     rank: rank.replace(',', ' '),
//                     orgName: orgName.replace(',', ' '),
//                 }]
//             ).then(() => {
//                 console.log(`added  ${index} of ${count} in ${(new Date().getTime() - timeStart)} ms`);
//             });
//             newPage.close();






//     // const title = $('title').text().trim();
//     // const profile = $('meta[property="og:title"]').attr('content');

//     // console.log('Title:', title);
//     // console.log('Profile:', profile);
//     })
//     // .catch(error => {
//     // console.error('Error fetching HTML:', error);
//     // });




// // import axios from "axios";
// // var axios = require("axios");


// // function App() {

// //     const express = require('express')
// //     const app = express()
// //     const port = 3000

// //     app.get('/', (req, res) => {
// //     res.send('Hello World!')
// //     })

// //     app.listen(port, () => {
// //     console.log("Example app listening on port ${port}")
// //     })

// //     const getQuote = async () => {
// //         const data = await
// //         axios.get('https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/22#profile')
// //         .then(res => {
// //             console.log(res.data);
// //         }).catch(err => {
// //             console.log(err);
// //         })
// //         console.log(data, " user data ")
// //     }


// //     return (
// //     <div className="App">
// //         <button onClick = {getQuote}> Get Quote </button>
// //     </div> );
// // }

// // export default App;



// // const axios = require('axios');
// // const cheerio = require('cheerio');


// // var createTextVersion = require("textversionjs");
// // const puppeteer = require('puppeteer');
// // var fs = require('fs');
// // const path = require('path');
// // const csvWriter = require('csv-writer');

// // const timeStart = new Date().getTime();

// // const portals = [
// //     "https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/2#profile"
// // ]

// // let profileLink = [];
// // for (let i = 0; i < count; i++) {
// //     profileLink.push(`https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/${initial + i}#profile`)
// // }

// // // Make the HTTP request using Axios
// // axios.get(url)
// //     .then(response => {
// //     // Load the HTML into cheerio
// //     const $ = cheerio.load(response.data);

// //     // Extract title and profile information
// //     const title = $('title').text().trim();
// //     const profile = $('meta[property="og:title"]').attr('content');

// //     for (let index = 0; index < profileLink.length; index++) {
// //         try {

// //     const name = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > a.name.no-underline-anchor').text();
// //     const tag = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.user-mention-tag > p').text();
// //     const rank = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.rank').text();
// //     const orgName = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.orgName').text();

// //     writer.writeRecords(
// //                 [{
// //                     name: name.replace(',', ' '),
// //                     tag: tag.replace(',', ' '),
// //                     rank: rank.replace(',', ' '),
// //                     orgName: orgName.replace(',', ' '),
// //                 }]
// //             ).then(() => {
// //                 console.log(`added  ${index} of ${count} in ${(new Date().getTime() - timeStart)} ms`);
// //             });
// //             newPage.close();

// //     // console.log('Title:', title);
// //     // console.log('Profile:', profile);
// //     }
// //     catch (error) {
// //         console.log({ error });
// //     }

// //     }

// //     });
// //     // .catch(error => {
// //     // console.error('Error fetching HTML:', error);
// //     // });



// const axios = require('axios');
// const cheerio = require('cheerio');
// const csvWriter = require('csv-writer').createObjectCsvWriter;

// const url = 'https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/22#profile';
// const csvFilePath = 'output.csv';

// const fetchData = async (url) => {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);

//         const name = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > a.name.no-underline-anchor').text();
//         const tag = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.user-mention-tag > p').text();
//         const rank = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.rank').text();
//         const orgName = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.orgName').text();

//         const record = {
//             name: name.replace(',', ' '),
//             tag: tag.replace(',', ' '),
//             rank: rank.replace(',', ' '),
//             orgName: orgName.replace(',', ' '),
//         };

//         return record;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// };

// const main = async () => {
//     const records = [];
//     const count = 10; // Specify the desired count

//     for (let index = 0; index < count; index++) {
//         try {
//             const record = await fetchData(url);
//             records.push(record);
//             console.log(`Added ${index + 1} of ${count}`);
//         } catch (error) {
//             console.log(`Error processing index ${index + 1}: ${error.message}`);
//         }
//     }

//     const csvWriterInstance = csvWriter({
//         path: csvFilePath,
//         header: [
//             { id: 'name', title: 'Name' },
//             { id: 'tag', title: 'Tag' },
//             { id: 'rank', title: 'Rank' },
//             { id: 'orgName', title: 'OrgName' },
//         ],
//     });

//     await csvWriterInstance.writeRecords(records);
//     console.log(`Data written to ${csvFilePath}`);
// };

// main();


const axios = require('axios');
const cheerio = require('cheerio');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const csvFilePath = 'output1.csv';

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const name = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > a.name.no-underline-anchor').text();
        const tag = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.user-mention-tag > p').text();
        const rank = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.rank').text();
        const orgName = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.orgName').text();

        const record = {
            name: name.replace(',', ' '),
            tag: tag.replace(',', ' '),
            rank: rank.replace(',', ' '),
            orgName: orgName.replace(',', ' '),
        };

        return record;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const main = async () => {
    const records = [];
    const count = 20; // here send desired count
    const baseUrl = 'https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/';
    
    for (let index = 0; index < count; index++) {
        try {
            const url = `${baseUrl}${index + 1}#profile`;
            const record = await fetchData(url);
            records.push(record);
            console.log(`Added ${index + 1} of ${count}`);
        } catch (error) {
            console.log(`Error processing index ${index + 1}: ${error.message}`);
        }
    }

    const csvWriterInstance = csvWriter({
        path: csvFilePath,
        header: [
            { id: 'name', title: 'Name' },
            { id: 'tag', title: 'Tag' },
            { id: 'rank', title: 'Rank' },
            { id: 'orgName', title: 'OrgName' },
        ],
    });

    await csvWriterInstance.writeRecords(records);
    console.log(`Data written to ${csvFilePath}`);
};

main();