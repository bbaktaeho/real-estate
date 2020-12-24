import Estate from "../models/estate.model";

const EstateService = {
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
