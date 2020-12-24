import EstateService from "../services/estate.service";

const EstateController = {
  getList: async (req, res, next) => {
    try {
      const result = await EstateService.getList(0, 10);
      res.status(200).json({ success: true, list: result });
    } catch (e) {
      next(e);
    }
  },
  addEstate: async (req, res, next) => {},
  removeEstate: async (req, res, next) => {},
  modifyEstate: async (req, res, next) => {},
};

export default EstateController;
