import { Server } from "http";
import app from "./app";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    const server: Server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

main().catch((error) => {
  console.error("Error in main function:", error);
});
