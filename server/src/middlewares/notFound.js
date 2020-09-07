module.exports = (_, res, next) => {
  const error = new Error('Route Not Found');

  res.status(404);

  next(error);
};
