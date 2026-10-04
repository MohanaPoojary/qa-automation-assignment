import fs from 'fs';
import path from 'path';

export function writeBookDetails(bookDetails) {
  const outputDirectory = path.join(process.cwd(), 'output');
  const outputFile = path.join(outputDirectory, 'book-details.txt');

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  const content = [
    `Title: ${bookDetails.title}`,
    `Author: ${bookDetails.author}`,
    `Publisher: ${bookDetails.publisher}`
  ].join('\n');

  fs.writeFileSync(outputFile, content, 'utf-8');
}
