import fs from 'fs';
const fileName = 'student.txt';
async function createFile() {
  try {
    await fs.promises.writeFile(fileName, 'Name: Khushi\n email: khushi@example.com');
    console.log('File created successfully');
  } catch (err) {
    console.error('Error creating file:', err);
  }
}
  async function readFile() {
    try {
        await fs.readFile()
        
    }
    catch (err) {
        console.error('Error reading file:', err);
    }
}