import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';

const CommentForm = () => {
  const [ comment, setComment ] = useState('');
  const [ status, setStatus ] = useState<'success' | 'failed' | 'pending'>();

  enum StatusText {
    success = '送信しました！',
    failed = '送信に失敗しました',
    pending = '送信中です…',
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    (async () => {
      event.preventDefault();
      setStatus('pending');
      const response = await fetch('https://us-central1-hakata-shi.cloudfunctions.net/tsglive/comments', {
        method: 'POST',
        mode: 'cors',
        body: new URLSearchParams({
          text: comment,
        }),
      });
      if (response.status === 200) {
        setStatus('success');
        setComment('');
      } else {
        setStatus('failed');
      }
      setTimeout(() => { setStatus(undefined) }, 500);
    })();
  };

  useEffect(() => {
    let isMobile = false;
    const targets = [ 'iPhone', 'iPod', 'iPad', 'Android', 'Mobile' ];
    for (const target of targets) {
      if (navigator.userAgent.includes(target)) {
        isMobile = true;
        break;
      }
    }
    if (!isMobile) {
      // @ts-ignore
      document.commentform.comment.focus();
    }
  }, [ status ]);

  return (
    <>
      <form name='commentform' onSubmit={handleSubmit} >
        <input type='text' id='comment' name='comment' placeholder={'匿名でコメントを送信できます！'}
          className={status} value={StatusText[status] || comment} onChange={handleChange}
          disabled={status !== undefined} />
        <input type='submit' disabled={comment.length === 0} />
      </form>
    </>
  );
};

const EmbedYouTubeLive = (props: { day: number }) => {
  const ids = [ 'p_TLzWhlZ-k', 'XOmaXJ-vEFA', '6B4iX61xZzI' ];
  return (
    <>
      <div id='youtube-embed-container'>
        <iframe
          title='YouTube Live' width='560' height='315' src={`https://www.youtube.com/embed/${ids[props.day - 1]}?autoplay=1`}
          frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen
        />
      </div>
      <CommentForm />
    </>
  );
};

let niconicoLiveURL = null;
const setNicoNicoLiveURL = (day: number) => {
  if (day === 1 || day === 2 || day === 3) {
    const ids = [ 322938526, 322938538, 322966984 ];
    const url = `https://live.nicovideo.jp/watch/lv${ids[day - 1]}`;
    niconicoLiveURL = url;
  } else {
    niconicoLiveURL = null;
  }
};

const WatchLinks = () => {
  const YouTube = (
    <a
      className="watch-link youtube"
      href="https://www.youtube.com/playlist?list=PL4UgdqkjedRD51FXqx5ffC57mKRRAqs5a"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="watch-link-inner youtube">
        YouTubeで<br />録画視聴する
      </div>
    </a>
  );
  const NicoVideo = (
    <a
      className="watch-link niconico"
      href="https://www.nicovideo.jp/series/74131"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="watch-link-inner niconico">
        ニコニコ動画で<br />
        録画視聴する
      </div>
    </a>
  );
  const now = new Date();
  if (now < new Date(2019, 10, 22, 18, 0)) {
    setNicoNicoLiveURL(1);
    return <EmbedYouTubeLive day={1} />;
  } else if (now < new Date(2019, 10, 23, 18, 0)) {
    setNicoNicoLiveURL(2);
    return <EmbedYouTubeLive day={2} />;
  } else if (now < new Date(2019, 10, 24, 16, 0)) {
    setNicoNicoLiveURL(3);
    return <EmbedYouTubeLive day={3} />;
  }
  setNicoNicoLiveURL(25252);
  return <div className='watch-links'>{YouTube}{NicoVideo}</div>;
}

interface TopProps {
  onOpenArticle: any;
  timeout: boolean;
}

const Top = (props: TopProps) => {
  const sat = <span className='sat'>土</span>;
  const sun = <span className='sun'>日</span>;
  const shuku = <span className='sun'>祝</span>;
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="content">
        <div className="inner">
          <img
            src={logo}
            alt="東大生が送るラブプログラミングショー TSG LIVE! 5"
          />
          <p>
            <span>9月20日 ({sun}), 23日 ({shuku})</span><wbr />
            <span>10:00 ～ 17:30</span></p>
          <p style={{ whiteSpace: 'nowrap' }}>
            <span>東京大学駒場祭 5号館3階</span><wbr/><span>531教室にてオンステージ</span>
            <br />
            <span>
              <a
                href='https://www.youtube.com/playlist?list=PL4UgdqkjedRD51FXqx5ffC57mKRRAqs5a'
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Live
              </a>
              /
              {niconicoLiveURL
                ? <a href={niconicoLiveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ニコニコ生放送
                  </a>
                : <>ニコニコ生放送</>
              }
              にて
            </span>
            <wbr/>
            <span>インターネット同時中継</span>
          </p>
          <WatchLinks />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              onClick={event => {
                event.preventDefault();
                props.onOpenArticle('about');
                scrollTo(0, 0);
              }}
            >
              TSG LIVE! とは?
            </a>
          </li>
          <li>
            <a
              onClick={event => {
                event.preventDefault();
                props.onOpenArticle('schedule');
                scrollTo(0, 0);
              }}
            >
              放送スケジュール
            </a>
          </li>
          <li>
            <a
              onClick={event => {
                event.preventDefault();
                props.onOpenArticle('credit');
                scrollTo(0, 0);
              }}
            >
              クレジット
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Top
