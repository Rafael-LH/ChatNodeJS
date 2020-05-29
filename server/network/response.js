exports.success = (req, res, message, result, status) => {
  const sendtMessage = message || 'success';
  const sendResult = result || {};
  const sendStatus = status || 200;

  res.status(sendStatus).send({
    message: sendtMessage,
    result: sendResult
  })
}
exports.error = (req, res, message, result, status) => {
  const sendtMessage = message || 'error';
  const sendResult = result || {};
  const sendStatus = status || 500;

  res.status(sendStatus).send({
    message: sendtMessage,
    result: sendResult
  })
}