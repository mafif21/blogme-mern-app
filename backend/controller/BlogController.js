const Blogs = require("../model/Blogs");
const fs = require("fs");
const { Types } = require("mongoose");

exports.index = (req, res) => {
  Blogs.all()
    .then((result) => {
      result.length > 0
        ? res.status(200).json({
            message: "success",
            data: result,
            length: result.length,
            ok: true,
          })
        : res.status(200).json({ message: "data is empty" });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.store = async (req, res) => {
  const { title, author, content, category } = req.body;
  const image = req.file.filename;

  try {
    const blog = new Blogs({
      title: title,
      image: image,
      category: category,
      author: author,
      content: content,
    });
    const savedBlog = await blog.save();
    res
      .status(201)
      .json({ message: "add data success", data: savedBlog, ok: true });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

exports.show = async (req, res, next) => {
  try {
    const result = await Blogs.findById(req.params.id);
    if (!result) {
      return res
        .status(404)
        .json({ status: "fail", message: "Data not found", ok: true });
    }

    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const targetData = await Blogs.findById(req.params.id);
    if (!targetData) {
      return res
        .status(404)
        .json({ status: "fail", message: "data not found", ok: true });
    }

    const title = req.body.title || targetData.title;
    const category = req.body.category || targetData.category;
    const content = req.body.content || targetData.content;

    const updates = {
      title,
      category,
      content,
    };

    if (req.file) {
      updates.image = req.file.filename;
    }

    await targetData.updateOne({ $set: updates });

    res.status(200).json({
      status: "success",
      message: "data updated successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const targetData = await Blogs.findById(req.params.id);

    const path = "./uploads/" + targetData.image;

    fs.stat(path, function (err, stats) {
      console.log(stats);

      if (err) {
        return console.error(err);
      }

      fs.unlink(path, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      });
    });
    if (!targetData) {
      return res
        .status(404)
        .json({ status: "fail", message: "data not found" });
    }

    await targetData.deleteOne();
    res
      .status(204)
      .json({ status: "success", message: "data deleted", ok: true });
  } catch (error) {
    next(error);
  }
};

exports.validateIdParam = (req, res, next) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ status: "fail", message: "Invalid ID" });
  }
  next();
};
