/**
 * Обрабатывает ошибку отклонённого обещания, возникающую в передаваемой функции промежуточном ПО
 *
 * @param {function} middleware
 * @return {function}
 */
const handleMiddlewarePromiseRejection = (middleware) => (
  function (...args) {
    const middlewareReturn = middleware(...args);
    const next = args[args.length - 1];

    return Promise.resolve(middlewareReturn).catch(next);
  }
);

module.exports = {handleMiddlewarePromiseRejection};
