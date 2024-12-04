import { readFileHelper } from "../utils.js";

const parseFile = async () => {
  const input = await readFileHelper("day1.txt");
  const lines = input
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split(/\s+/).map(Number));
  return lines;
};

const solution1 = async () => {
  const lines = await parseFile();
  const left = lines.map((line) => line[0]).sort((a, b) => a - b);
  const right = lines.map((line) => line[1]).sort((a, b) => a - b);
  const diff = left
    .map((l, i) => Math.abs(l - right[i]))
    .reduce((a, b) => a + b);
  console.log(diff);
};

const solution2 = async () => {
  const lines = await parseFile();
  const left = lines.map((line) => line[0]);
  const right = lines.map((line) => line[1]);
  const diff = left
    .map((l) => l * right.filter((r) => r === l).length)
    .reduce((a, b) => a + b);
  console.log(diff);
};

solution1();
solution2();
