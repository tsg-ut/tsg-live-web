import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'
import ogImage from '../images/og_image.png'

const Layout = ({ children, location }) => {
  const content = <div>{children}</div>
  const description =
    '東京大学TSGがお送りする2日間限りのライブプログラミングのイベント TSG LIVE! 3。放送はYouTube/ニコニコ生放送で同時中継されます！'

  return (
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
              { name: 'description', content: description },
              {
                name: 'keywords',
                content:
                  '東京大学,プログラミング,生放送,ライブプログラミング,ゲームプログラミング,AIプログラミング,CTF',
              },
              { property: 'fb:app_id', content: '1864540247116178' },
              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'http://tsg.ne.jp/live/' },
              { property: 'og:image', content: ogImage },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' },
              { property: 'og:description', content: description },
              { property: 'og:site_name', content: 'TSG LIVE! 3' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@tsg_ut' },
              { name: 'twitter:creator', content: '@tsg_ut' },
              { name: 'twitter:title', content: data.site.siteMetadata.title },
              { name: 'twitter:description', content: description },
              { name: 'twitter:image', content: ogImage },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
