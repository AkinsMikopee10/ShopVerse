/**
 * Wrap an async route handler and forward
 * any rejected promise to Express' error middleware.
 *
 * @param {Function} handler
 * @returns {Function}
 */
const asyncHandler = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

export default asyncHandler;
