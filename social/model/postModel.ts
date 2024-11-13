import { Document, model, Schema, Types } from "mongoose";

interface iPost {
  message: string;
  image: string;
  user: {};
  imageID: string;
  like: Array<string>;
}

interface iPostData extends iPost, Document {}

const postModel = new Schema<iPostData>(
  {
    message: {
      type: String,
    },
    image: {
      type: String,
    },

    imageID: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    like: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPostData>("posts", postModel);
