import { Welcome } from "@/interfaces"
import path from 'path';
import fs from "fs"

const getFixturePath = (filename: string) => path.join(process.cwd(), 'public', filename);





export const Services = (() => {
    
    return {
        getStudents(): Welcome{
            const data: Welcome = JSON.parse(fs.readFileSync(getFixturePath(`data.json`), 'utf-8'));
            return data
        },
    }
})()