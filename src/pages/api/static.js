import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const publicPath = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(`${publicPath}/projects.json`, 'utf8');

  res.status(200).json(fileContents);
}
