import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MONGO_URI =
  "mongodb+srv://my_jurisdiction:P9N18hMrpvSWJiEy@graphql-cluster.lsiwf1p.mongodb.net/?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoLab instance.");
    const blogSchema = new Schema({
      title: String,
      content: String,
    });

    const Blog = model("Blog", blogSchema);

    const blog = new Blog({
      title: "testing",
      content: "This is just going through the testing phase",
    });
    blog.save((err) => {
      if (err) console.log("Something went wrong while creating the record...");
      else console.log("record added successfully...");
    });
  })
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

// module.exports = Blog
