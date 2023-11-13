/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configuration options...
    // Add the following line to enable static HTML export
    exportPathMap: () => ({ '/': { page: '/' } }),
    exportTrailingSlash: true, // optional, depending on your needs
    output: 'export', // Set the output option to 'export'
  };
  
  module.exports = nextConfig;
  