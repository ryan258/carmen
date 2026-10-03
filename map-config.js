// Public, browser-facing configuration. Never put secret API keys here.
// Standard OSM tiles are for ordinary interactive viewing, with normal browser
// caching and Referer headers. No prefetching or offline tile downloads.
const CarmenMapConfig = Object.freeze({
  tileUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
