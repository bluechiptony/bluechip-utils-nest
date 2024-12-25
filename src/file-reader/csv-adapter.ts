import * as fs from "fs";
const csv = require("csv-parser");

export const readCsvFile = async (url: string): Promise<Object[]> => {
  try {
    const parsed: Object[] = [];

    fs.createReadStream(url)
      .pipe(csv())
      .on("data", (data: any) => {
        parsed.push(data);
      });

    return parsed;
  } catch (error) {
    throw new Error("Error parsing file");
  }
};
