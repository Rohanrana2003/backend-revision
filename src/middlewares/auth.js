const adminAuth = (req, res, next) => {
  const token = "AUTHOURIZED";
  const isAuthorized = token === "AUTHOURIZED";

  if (!isAuthorized) res.status(401).send("No Data Found");
  next();
};

const userAuth = (req, res, next) => {
  const token = "AUTHOURIZED";
  const isAuthorized = token === "AUTHOURIZED";

  if (!isAuthorized) res.status(401).send("No Data Found");
  next();
};

module.exports = {
  adminAuth,
  userAuth,
};
