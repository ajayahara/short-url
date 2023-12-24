const paginationMiddleware = (req, res, next) => {
  let { page, limit,order,filter } = req.query;
  page = parseInt(page, 10) || 1;
  limit = parseInt(limit, 10) || 10;
  order = parseInt(order, 10) || -1;
  filter=(filter=='all')?{}:{status:filter};
  const skip = (page - 1) * limit;
  req.pagination = { page, limit, skip, order, filter };
  next();
};

module.exports = { paginationMiddleware };
