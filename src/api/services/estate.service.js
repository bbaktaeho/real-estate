import xlsx from "../../utils/xlsx";
import Estate from "../models/estate.model";

const EstateService = {
  extraction: async (xlsxName) => {
    const list = xlsx.extraction(xlsxName);
    const result = await Estate.insertList(list);
    return result;
  },
  getList: async (offset, limit) => {
    const list = await Estate.getList(+offset, +limit);
    return list;
  },
  getListArgs: async (offset, limit) => {},
  addEstate: async () => {},
  removeEstate: async () => {},
  modifyEstate: async () => {},
};

export default EstateService;
