import { execSync } from "child_process";

export function checkEngines() {
  try {
    execSync("npm run check:engines", { stdio: "inherit" });
  } catch {
    process.exit(1);
  }
}
