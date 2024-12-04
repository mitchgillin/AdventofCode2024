import { readFile } from "fs/promises";

const readFileHelper = async (filename) => {
  const input = await readFile(`./inputs/${filename}`, "utf-8");
  return input;
};

export { readFileHelper };
