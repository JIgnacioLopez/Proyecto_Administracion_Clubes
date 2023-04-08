import fs from 'fs';

export const readData = (path) => {
    if (!path) path = './db/default.json'
    
    if (!fs.existsSync(path)) return null;
    const data = fs.readFileSync(path, 'utf-8');
    
    if (!data) return [];
    
    return JSON.parse(data);
}

export const saveData = (path,data) => {
    fs.writeFileSync(path,JSON.stringify(data));
}