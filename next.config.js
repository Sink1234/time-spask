const path = require("path");
const fs = require("fs");
const {parseString} = require("xml2js");
const withPWA = require('@ducanh2912/next-pwa').default({
    dest: "public",
});

/** @type {import('next').NextConfig} */

function createDataJsonFile(readName, writeName) {
    const getDataPath = (filename) => path.join(process.cwd(), 'src', 'data', filename);
    const getXMLPath = (filename) => path.join(process.cwd(), 'public', filename);
    const xmlData = fs.readFileSync(getXMLPath(readName), 'utf-8');
    parseString(xmlData, function (err, results) {
        if (err) {
            return null;
        } else {
            fs.writeFileSync(getDataPath(writeName), JSON.stringify(results), 'utf-8');
        }
    });
}

const nextConfig = {};

let start = true;
module.exports = () => {
    if (start) {
        createDataJsonFile("rs.xml", '../lib/data/data.json');
        createDataJsonFile("rs202356.xml", 'even_data.json');
        createDataJsonFile("rs202355.xml", 'odd_data.json');
        start = false;
    }
    return withPWA(nextConfig);
}
