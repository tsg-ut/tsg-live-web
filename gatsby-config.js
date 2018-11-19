module.exports = {
  siteMetadata: {
    title: 'ライブプログラミングショー TSG LIVE! 2',
    author: 'TSG',
    description:
      '東京大学TSGがお送りする3日間限りのライブプログラミングのイベント TSG LIVE! 2。放送はYouTube/ニコニコ生放送で同時中継されます！',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
