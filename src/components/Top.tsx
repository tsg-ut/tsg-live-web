import React from 'react'

import logo from '../images/logo.svg'

const watchLinks = (isYet: boolean) => {
  const YouTube = (
    <div className="watch-links">
      <a
        className="watch-link youtube"
        href="https://www.youtube.com/playlist?list=PL4UgdqkjedRD51FXqx5ffC57mKRRAqs5a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="watch-link-inner youtube">
          {isYet ? <>YouTubeで<br />視聴予約する </> : <>YouTubeで<br />録画視聴する </>}
        </div>
      </a>
    </div>
  );
  const NicoLiveRecord = (
    <a
      className="watch-link niconico"
      href="https://www.nicovideo.jp/mylist/65619209" // TODO: Change here to the latest!
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="watch-link-inner niconico">
        ニコニコ生放送で<br />
        録画視聴する
      </div>
    </a>
  );
  return (isYet ? YouTube : <>{YouTube}{NicoLiveRecord}</>);
}

interface TopProps {
  onOpenArticle: any;
  timeout: boolean;
}

const Top = (props: TopProps) => {
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
            <span>東京大学駒場祭 5号館3階</span><wbr/><span>531教室にてオンステージ</span>
            <br />
            <span>YouTube Live/ニコニコ生放送にて</span><wbr/><span>インターネット同時中継</span>
          </p>
          {watchLinks(new Date() < new Date(2019, 10, 24, 18, 0, 0))}
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
  );
};

export default Top
