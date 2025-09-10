import fs from "fs/promises";
import { resolve } from "path";

const rootPath = process.cwd();

export async function readDataJsonFile(name: string) {
    const filePath = resolve(rootPath, "src", "shared", "lib", "data", name);
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    const cleanedData = data.replace(/^\uFEFF/, ''); // Удаляем BOM
    try {
        return JSON.parse(cleanedData);
    } catch (err) {
        throw new Error(`Невалидный JSON в файле ${name}: ${err.message}`);
    }
}