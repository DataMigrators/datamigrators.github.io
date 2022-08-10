
module.exports = {
  siteMetadata: {
    title: 'Data Migrators Documents',
    description: 'Data Migrators Document repository for customers ',
    keywords: 'gatsby,theme,carbon',
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        remarkPlugins: [require("remark-grid-tables")],
        iconPath: "./src/images/DM-Icon-RGB-PNG-128px-Black-Cropped.png",
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
