import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Mongodb server is connected");
    app.listen(config.port, () => {
      console.log(`Meraki Nexus api Server is Running!
    🌐 Port: ${config.port}
    🔗 Local: http://localhost:${config.port}
    📝 API Docs: http://localhost:${config.port}/
    ⚡ Environment: ${config.node_env || "development"}
    🕒 Started at: ${new Date().toLocaleString()}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
