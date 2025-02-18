import mongoose from "mongoose";
import { MenuDocs } from "../types/MenuTypes";

const MenuSchema = new mongoose.Schema<MenuDocs>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const MenuModel = mongoose.model<MenuDocs>("Menu", MenuSchema);

export default MenuModel;
