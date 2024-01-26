const path = require("path")
const fs = require("fs")
const {parseString} = require("xml2js")
/** @type {import('next').NextConfig} */

function createDataJsonFile() {
    const getDataPath = (filename) => path.join(process.cwd(), 'src', 'lib', 'data', filename);
    const getXMLPath = (filename) => path.join(process.cwd(), 'public', filename);
    const xmlData = fs.readFileSync(getXMLPath('rs.xml'), 'utf-8')
    parseString(xmlData, function (err, results) {
        if (err) {
            return null
        } else {
            fs.writeFileSync(getDataPath('data.json'), JSON.stringify(results), 'utf-8')
        }
    })
}



const nextConfig = {
};

module.exports = ()=>{
    createDataJsonFile()
    return nextConfig
}
