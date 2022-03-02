import { Schema, model } from "mongoose";

const userSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: null,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  token: {
    type: String,
    default: null,
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

const User = model("User", userSchema);

export { User };
