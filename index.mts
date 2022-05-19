import fs from "fs/promises";

const tsconfig = await fs.readFile("./tsconfig.json", "utf8");
console.log(tsconfig);
