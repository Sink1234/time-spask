import fs from "fs/promises";
import {join} from "path";

const rootPath = process.cwd()

export async function readDataJsonFile(name: string) {
    const data = await fs.readFile(join(rootPath, "src","shared", "data", name), {encoding: "utf8"})
    return JSON.parse(data)
}