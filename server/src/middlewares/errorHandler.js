// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
  if (res.statusCode === 200) res.status(500);

  return res.json({
    ok: false,
    message: error.message,
    stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
  });
};
