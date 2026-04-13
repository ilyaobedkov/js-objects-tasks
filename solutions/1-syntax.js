import fs from 'fs';
import path from 'path';
export default function getJsonFileData() {
  const filePath = path.join(process.cwd(), 'tasks', 'example.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}
