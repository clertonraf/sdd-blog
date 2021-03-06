const remark = require("remark");

module.exports = {
  siteMetadata: {
    title: `Sprich Deutsch du`,
    author: `Clerton`,
    description: `A blog for learn german`,
    siteUrl: `https://sprich-deustch-du.netlify.app`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-171554258-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sprich Deutsch du`,
        short_name: `SDD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `description`, `body`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            description: node => node.frontmatter.description,
            slug: node => node.fields.slug,
            body: node => String(remark().processSync(node.rawMarkdownBody)),
            excerpt: node => {
              const text = remark().processSync(node.rawMarkdownBody);
              const excerptLength = 139; // Hard coded excerpt length
              return node.rawMarkdownBody && String(text).substring(0, excerptLength) + "...";
            },
            date: node => {
              const months= [
                "Januar",
                "Februar",
                "März",
                "April",
                "Mai",
                "June",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "December"
              ];
              const date = new Date(node.frontmatter.date);
              return date.getUTCDate(0) + " " + months[date.getUTCMonth(0)] + " " + date.getUTCFullYear(0);
            },
          },
        },
      },
    },
    'gatsby-plugin-dark-mode',
  ],
}
