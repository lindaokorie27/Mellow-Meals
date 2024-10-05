const handleError = (err, req, res) => {
  res.status(err.statusCode || 500).send({ message: err.message });
};
export default handleError;
