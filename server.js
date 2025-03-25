// This file is only needed for Vercel's API routes feature
// The static site is served directly from the out/ directory

module.exports = (req, res) => {
  // You can add API routes here in the future if needed
  res.status(404).send('Not found');
}; 