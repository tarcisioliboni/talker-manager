const watchedAtMiddleware = (req, res, next) => {
  const dataBrRegex = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/;
  const { talk } = req.body;
  const { watchedAt } = talk;
  if (!watchedAt) {
    return res
    .status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!dataBrRegex.test(watchedAt)) {
    return res
    .status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  return next();
};

module.exports = watchedAtMiddleware;
