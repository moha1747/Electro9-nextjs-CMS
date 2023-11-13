/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configuration options...
    // Add the following line to enable static HTML export
    async generateStaticParams() {
        // Define your static paths here
        return [
          { params: { id: '1' } },
          { params: { id: '2' } },
          // Add more paths as needed
        ];
      },

    output: 'export', // Set the output option to 'export'
  };
  
  module.exports = nextConfig;
  