import mongoose from "mongoose";

// Connecting to the MongoDB database named "StudentDatabase" running locally
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

// Creating a Mongoose model named "Student" representing the structure of a student document in the database
const Student = mongoose.model("Student", {
  stdnum: String,
  fname: String,
  lname: String,
  age: Number,
});

// Controller function to save a student document to the database
const saveStudent = async (req, res) => {
  await Student.create(req.body);
  res.json({ inserted: true });
};

// Controller function to update a user document in the database
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

// Controller function to remove a user document from the database
const removeUser = async (req, res) => {
  await Student.deleteOne({ stdnum: req.body.stdnum });
  res.json({ deleted: true });
};

// Controller function to remove all user documents from the database
const removeAllUser = async (req, res) => {
  const result = await Student.deleteMany({});
  if (result.deletedCount > 0) {
    res.json({ deleted: true });
  } else {
    res.json({ deleted: false });
  }
};

// Controller function to find a user document in the database by student number
const findUser = async (req, res) => {
  const users = await Student.find({ stdnum: req.query.stdnum });
  res.json(users);
};

// Controller function to find all user documents in the database
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
