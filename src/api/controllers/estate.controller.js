import EstateService from "../services/estate.service";

const EstateController = {
  upload: async (req, res, next) => {
    try {
      await EstateService.extraction(req.fileName);
      res.status(200).json({ success: true });
    } catch (e) {
      next(e);
    }
  },
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
