import xlsx from "xlsx";
import fs from "fs";

export default (xlsxName) => {
  const excelFile = xlsx.readFile(`upload/${xlsxName}`, {
    cellDates: true,
  });
  fs.unlinkSync(`upload/${xlsxName}`);
  /**
   * @description 첫 번째 시트 이름 추출 후 시트 불러오기
   */
  const sheetName = excelFile.SheetNames[0];
  const sheet = excelFile.Sheets[sheetName];

  return xlsx.utils.sheet_to_json(sheet, { defval: "" });
};
