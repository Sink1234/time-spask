const path = require("path")
const fs = require("fs")
const {parseString} = require("xml2js")

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
    })
}

const nextConfig = {};
let start = true;
module.exports = () => {
    if (start) {
        createDataJsonFile("rs.xml", 'data.json');
        createDataJsonFile("rs202356.xml", 'even_data.json');
        createDataJsonFile("rs202355.xml", 'odd_data.json');
        start = false;
    }
    return nextConfig;
}
