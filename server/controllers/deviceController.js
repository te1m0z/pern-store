const uuid = require("uuid");
const { Device } = require("../models/models.js");
const ApiError = require("../error/ApiError");
const path = require("path");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);

    } catch (error) {
        next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {}

  async getOne(req, res) {}
}

module.exports = new DeviceController();
