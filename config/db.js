import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`DB conectado en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export { conectarDB };
