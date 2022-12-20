/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.codeworld.io',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
