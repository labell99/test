module.exports = {
	siteMetadata: {
		title: `Immunogen Design & Selection`,
		author: ` `,
		description: `IDS Dashboard`,
		siteUrl: `https://gatsby-starter-paperbase-demo.netlify.com/`,
		social: {
			twitter: `ids`,
		},
	},
	plugins: [
	  `gatsby-plugin-react-helmet`,
	  `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
		 resolve: `gatsby-plugin-material-ui`,
	     resolve: `gatsby-plugin-manifest`,
		 options: {
		   name: `gatsby-starter-default`,
		   short_name: `starter`,
		   start_url: `/`,
		   background_color: `#663399`,
		   theme_color: `#663399`,
		   display: `minimal-ui`,
         },
	  },
	],
}
