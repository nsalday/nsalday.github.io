import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const Student = mongoose.model("Student", {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number,
});

const saveStudent = async (req, res) => {
  await Student.create(req.body);
  res.json({ inserted: true });
};

const updateUser = async (req, res) => {
  const { fname } = req.body;
  const result = await Student.updateOne(
    { fname },
    { $set: { lname: "Parker" } }
  );
  if (result.modifiedCount > 0) {
    res.json({ updated: true });
  } else {
    res.json({ updated: false });
  }
};

const removeUser = async (req, res) => {
  await Student.deleteOne({ stdnum: req.body.stdnum });
  res.json({ deleted: true });
};

const removeAllUser = async (req, res) => {
  const result = await Student.deleteMany({});
  if (result.deletedCount > 0) {
    res.json({ deleted: true });
  } else {
    res.json({ deleted: false });
  }
};

const findUser = async (req, res) => {
  const users = await Student.find({ stdnum: req.query.stdnum });
  res.json(users);
};

const findMembers = async (req, res) => {
  const users = await Student.find({});
  res.json(users);
};

export {
  saveStudent,
  updateUser,
  removeUser,
  removeAllUser,
  findUser,
  findMembers,
};
