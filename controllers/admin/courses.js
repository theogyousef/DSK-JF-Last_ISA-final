import userModel from "../../models/user.js";
import courseModel from "../../models/course.js";

const courses_get = async (req, res) => {
  try {
    let instructors = await userModel.find({ role: "Instructor" });
    let course = await courseModel.find();
    res.render("admin/courses", { instructors, course });
  } catch (err) {
    res.status(500).json({ err: true });
  }
};

const courses_post = async (req, res) => {
  const { title, numberOfStudents, instructorId } = req.body;
  try {
    const newCourse = new courseModel({
      title,
      numberOfStudents,
      instructorId,
    });
    newCourse.save();

    res.json({ msg: "done" });
  } catch (err) {
    res.status(500).json({ err: true });
  }
};

export default { courses_get, courses_post };
