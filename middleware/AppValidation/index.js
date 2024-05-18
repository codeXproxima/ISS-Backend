const { errorMessage } = require("../../helpers/sendResponseMessage");

const { APIKEY, SECRETKEY } = process.env;

const apiValidateMiddleware = async (req, res, next) => {
  const reqApiKey = req.header("api_Key");
  console.log("apiValidateMiddleware", reqApiKey, APIKEY);
  if (!reqApiKey) {
    res
      .status(400)
      .json(errorMessage(null, "request not validate (need M Key)"));
  } else {
    if (reqApiKey === APIKEY) {
      next();
    } else {
      res
        .status(400)
        .json(
          errorMessage(null, "invalid creadentials for api (M) Key")
        );
    }
  }
};

const secretKeyMiddleware = async (req, res, next) => {
  const reqSecretKey = req.header("s_Key");
  console.log("secretKeyMiddleware", reqSecretKey, SECRETKEY);
  if (!reqSecretKey) {
    res.status(400).json({
      message: "request not validate (need S key)",
      status: false,
      data: null,
    });
  } else {
    if (reqSecretKey === SECRETKEY) {
      next();
    } else {
      res.status(400).json({
        message: "invalid creadentials for api (S) Key",
        status: false,
        data: null,
      });
    }
  }
};
module.exports = { apiValidateMiddleware, secretKeyMiddleware };
