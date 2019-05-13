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
            alt="東大生が送るラブプログラミングショー TSG LIVE! 3"
          />
        <p>5月18日 (土), 19日 (日) 10:00 ～ 17:30</p>
          <p>
            東京大学五月祭 工学部3号館4階 <wbr/>440（35号講義室）にてオンステージ
            <br />
            YouTube Live/ニコニコ生放送にて<wbr/>インターネット同時中継
          </p>
          <div className="watch-links">
            <a
              className="watch-link youtube"
              href="https://www.youtube.com/watch?v=XUDcmuFmWi4"
              target="_blank"
              rel="noopener"
            >
              <div className="watch-link-inner youtube">
                YouTube Live で<br />
                視聴予約する (1日目)
              </div>
            </a>
            <a
              className="watch-link niconico"
              href="https://live.nicovideo.jp/watch/lv320049023"
              target="_blank"
              rel="noopener"
            >
              <div className="watch-link-inner niconico">
                ニコニコ生放送で
                <br />
                視聴予約する (1日目)
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
