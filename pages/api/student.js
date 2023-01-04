export default function getAllStudent(req, res) {
  if (req.method != "GET") {
    res.status(500).json({message: "sorry get only "})
  }
  res.status(200).json({
    data: "data"
  })
};