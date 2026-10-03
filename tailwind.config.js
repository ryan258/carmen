/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan everything that can carry a class name. Class names are written as full
  // literals in source, so the JIT scanner catches them all.
  content: ['./carmen-sandiego-bentonville.html', './game.js', './game-map.js', './game-records.js', './run-generator.js', './game-core.js', './data/packs/*.json'],
  theme: { extend: {} },
  plugins: [],
};
