const theme = {
  backgroundColor: "#202021",
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content/markdown/`,
      },
    },
    {
      resolve: "gatsby-plugin-jss",
      options: { theme },
    },
    `gatsby-transformer-remark`,
  ],
}