module.exports = {
  siteMetadata: {
    title: 'ライブプログラミングショー TSG LIVE! 5',
    author: 'TSG',
    description:
      '東京大学TSGがお送りする2日間限りのライブプログラミングのイベント TSG LIVE! 5。放送はYouTube/ニコニコ生放送で同時中継されます！',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TSG LIVE! 5',
        short_name: 'TSG LIVE!',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-49350923-1',
      },
    },
  ],
}
