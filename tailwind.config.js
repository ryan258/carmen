/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan everything that can carry a class name. Class names are written as full
  // literals in source, so the JIT scanner catches them all.
  content: ['./carmen-sandiego-argentina.html', './game.js', './run-generator.js'],
  theme: { extend: {} },
  plugins: [],
};
