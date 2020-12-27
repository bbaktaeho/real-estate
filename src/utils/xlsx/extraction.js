import xlsx from "xlsx";

export default (xlsxName) => {
  const excelFile = xlsx.readFile(`upload/${xlsxName}`, {
    cellDates: true,
  });
  /**
   * @description 첫 번째 시트 이름 추출 후 시트 불러오기
   */
  const sheetName = excelFile.SheetNames[0];
  const sheet = excelFile.Sheets[sheetName];

  return xlsx.utils.sheet_to_json(sheet, { defval: "" });
};
