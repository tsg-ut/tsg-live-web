import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.svg'

const FinishNotice = () => (
  <>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
      放送終了しました。<wbr/>ご視聴ありがとうございました!!
    </p>
    <div className="watch-links">
      <a
        className="watch-link youtube"
        href="https://www.youtube.com/playlist?list=PL4UgdqkjedRBh84r-PQy39k96_I6R94p2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="watch-link-inner youtube">
          YouTubeで<br />
          録画視聴する
        </div>
      </a>
      <a
        className="watch-link niconico"
        href="https://www.nicovideo.jp/mylist/65619209"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="watch-link-inner niconico">
          ニコニコ生放送で<br />
          録画視聴する
        </div>
      </a>
    </div>
  </>
);

const Header = props => {
  const sat = <span className='sat'>土</span>;
  const sun = <span className='sun'>日</span>;
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="content">
        <div className="inner">
          <img
            src={logo}
            alt="東大生が送るラブプログラミングショー TSG LIVE! 4"
          />
          <p>11月22日 (金), 23日 ({sat}), 24日({sun}) <wbr />12:00 ～ 17:30</p>
          <p>
            東京大学駒場祭 5号館3階 <wbr/>531教室にてオンステージ
            <br />
            YouTube Live/ニコニコ生放送にて<wbr/>インターネット同時中継
          </p>
          {new Date() - new Date(2019, 10, 24, 18, 0, 0) > 0 && <FinishNotice />}
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
