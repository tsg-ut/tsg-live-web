import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'
import twitterCardImage from '../images/twitter_card_image.png'
import ogImage from '../images/og_image.png'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.siteMetadata.description },
            {
              name: 'keywords',
              content:
                '東京大学,プログラミング,生放送,ライブプログラミング,ゲームプログラミング,AIプログラミング,CTF',
            },
            { property: 'fb:app_id', content: '1864540247116178' },
            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://live.tsg.ne.jp/' },
            { property: 'og:image', content: new URL(ogImage, 'https://live.tsg.ne.jp/') },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:description', content: data.siteMetadata.description },
            { property: 'og:site_name', content: 'TSG LIVE! 4' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@tsg_ut' },
            { name: 'twitter:creator', content: '@tsg_ut' },
            { name: 'twitter:title', content: data.site.siteMetadata.title },
            { name: 'twitter:description', content: data.siteMetadata.description },
            { name: 'twitter:image', content: new URL(twitterCardImage, 'https://live.tsg.ne.jp/') },
          ]}
        >
          <html lang="ja" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

export default Layout
