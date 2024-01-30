import { app } from "./app";
import { connectDb } from "./db/index";
import env from "./utils/validateEnv";

const PORT = env.PORT || 8000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
  });
});
