const verify = (req, res) => {
  return res.status(200).json({
    status: true,
    code: 200,
    message: "Token is valid",
    data: { email: req.admin?.email },
  });
};

export default verify;
