import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.svg'

const Header = props => {
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="content">
        <div className="inner">
          <img
            src={logo}
            alt="東大生が送るラブプログラミングショー TSG LIVE! 2"
          />
          <p>11月23日 (祝), 24日 (土), 25日 (日)</p>
          <p>
            東京大学駒場祭 12号館1階 1211教室にてオンステージ
            <br />
            YouTube Live / ニコニコ生放送 にてインターネット同時中継
          </p>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>
            ただいま<span style={{color: '#F33'}}>3日目</span>放送中！
          </p>
          <div className="watch-links">
            <a
              className="watch-link youtube"
              href="https://youtu.be/0UQMqNt1JnU"
              target="_blank"
              rel="noopener"
            >
              <div className="watch-link-inner youtube">
                YouTube Live で<br />
                視聴する (3日目)
              </div>
            </a>
            <a
              className="watch-link niconico"
              href="http://live2.nicovideo.jp/watch/lv316980732"
              target="_blank"
              rel="noopener"
            >
              <div className="watch-link-inner niconico">
                ニコニコ生放送で
                <br />
                視聴する (3日目)
              </div>
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              onClick={event => {
                event.preventDefault()
                props.onOpenArticle('about')
              }}
            >
              TSG LIVE! とは?
            </a>
          </li>
          <li>
            <a
              onClick={event => {
                event.preventDefault()
                props.onOpenArticle('schedule')
              }}
            >
              放送スケジュール
            </a>
          </li>
          <li>
            <a
              onClick={event => {
                event.preventDefault()
                props.onOpenArticle('credit')
              }}
            >
              クレジット
            </a>
          </li>
          <li>
            <a
              onClick={event => {
                event.preventDefault()
                props.onOpenArticle('contact')
              }}
            >
              質問/お便り投稿
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
