const paginationMiddleware = (req, res, next) => {
  let { page, limit,order } = req.query;
  page = parseInt(page, 10) || 1;
  limit = parseInt(limit, 10) || 10;
  order = parseInt(order, 10) || -1;
  const skip = (page - 1) * limit;
  req.pagination = { page, limit, skip, order };
  next();
};

module.exports = { paginationMiddleware };
