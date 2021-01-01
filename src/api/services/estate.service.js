import xlsx from "../../utils/xlsx";
import Estate from "../../models/estate.model";

const EstateService = {
  extraction: async (xlsxName) => {
    const list = xlsx.extraction(xlsxName);
    return await Estate.insertList(list);
  },
  getList: async (offset, limit) => {
    return await Estate.getList(+offset, +limit);
  },
  getListArgs: async (offset, limit) => {},
  addEstate: async () => {},
  removeEstate: async () => {},
  modifyEstate: async () => {},
};

export default EstateService;
