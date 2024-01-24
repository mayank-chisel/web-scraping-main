const cheerio = require('cheerio');
var createTextVersion = require("textversionjs");
const puppeteer = require('puppeteer');
var fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer');

const timeStart = new Date().getTime();

const count = 100; // NUMBER OF PROFILES
const initial = 1;

let profileLink = [];
for (let i = 0; i < count; i++) {
    profileLink.push(`https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/${initial + i}#profile`)
}


const writer = csvWriter.createObjectCsvWriter({
    path: path.resolve(`${__dirname}/userCSV`, `${initial}-${initial + count}-list.csv`),
    header: [
        { id: 'name', title: 'Name' },
        { id: 'tag', title: 'Tag' },
        { id: 'rank', title: 'Rank' },
        { id: 'orgName', title: 'Organization Name' },
    ],
});


async function run() {
    const browser = await puppeteer.launch();
    const links = [];

    const timeStart = new Date().getTime();
    for (let index = 0; index < profileLink.length; index++) {
        try {
            const newPage = await browser.newPage();
            await newPage.goto(profileLink[index]);
            source = await newPage.content({ "waitUntil": "domcontentloaded" });
            let $ = cheerio.load(source);
            const name = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > a.name.no-underline-anchor').text();
            const tag = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.user-mention-tag > p').text();
            const rank = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.rank').text();
            const orgName = $('#lia-body > div.lia-page > center > div.MinimumWidthContainer > div > div > div > div.lia-quilt.lia-quilt-view-profile-page.lia-quilt-layout-two-column-main-side.lia-top-quilt.lia-anonymous-viewing-other > div.lia-quilt-row.lia-quilt-row-header > div > div > div.profile-header-wrapper > div.profile-header > div > div.user-details > div.orgName').text();

            writer.writeRecords(
                [{
                    name: name.replace(',', ' '),
                    tag: tag.replace(',', ' '),
                    rank: rank.replace(',', ' '),
                    orgName: orgName.replace(',', ' '),
                }]
            ).then(() => {
                console.log(`added  ${index} of ${count} in ${(new Date().getTime() - timeStart)} ms`);
            });
            newPage.close();
        } catch (error) {
            console.log({ error });
        }

    }
}

run();