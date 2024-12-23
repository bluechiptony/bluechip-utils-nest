import { readFileSync } from "fs";
import neatCsv from "neat-csv";

export const readCsvFile = async (url: string): Promise<Object[]> => {
  try {
    let fileData = await readFileSync(url).toString();
    if (fileData.charCodeAt(0) === 0xfeff) {
      fileData = fileData.substr(1);
    }
    let parsed = await neatCsv(fileData);
    return parsed;
  } catch (error) {
    throw new Error("Error parsing file");
  }
};
