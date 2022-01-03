import Task from "models/Task";
import { dbConnect } from "utils/mongoose";
dbConnect();

export default async function handler(req, res) {
 // console.log(req.method);
  switch (req.method) {
    case "GET":
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    //console.log(tasks);

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
}
