import path from 'path';
import fsPromises from 'fs/promises';

async function getStaticData() {
  const filePath = path.join(process.cwd(), 'public/projects.json');
  const jsonData = await fsPromises.readFile(filePath);

  const DataObject = JSON.parse(jsonData);

  return DataObject;
}

export default getStaticData;
