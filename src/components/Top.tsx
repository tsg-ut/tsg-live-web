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
      const response = await fetch('https://us-central1-tsg-live-5.cloudfunctions.net/tsglive/comments', {
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
  const ids = [ '8ct9j_hEZTk', 'HPgan1Ut6b8' ];
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

const WatchLinks = () => {
  const now = new Date();
  if (now < new Date(2020, 8, 20, 18, 0)) {
    return <EmbedYouTubeLive day={1} />;
  } else if (now < new Date(2020, 8, 21, 18, 0)) {
    return <EmbedYouTubeLive day={2} />;
  }
  return (
    <div className='watch-links'>
      <a
        className="watch-link youtube"
        href="https://www.youtube.com/c/TSG-UT/videos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="watch-link-inner youtube">
          YouTubeで<br />録画視聴する
        </div>
      </a>
    </div>
  );
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
            <span>9月20日 ({sun}), 21日 ({shuku})</span><wbr />
            <span>10:00 ～ 17:30</span>
          </p>
          <p style={{ whiteSpace: 'nowrap' }}>
            <span>東京大学五月祭オンライン化に伴い</span>
            <br />
            <span>TSGメンバーが全国から</span><wbr />
            <span>フルリモートでお届け!</span>
            <br />
            <span>YouTube Liveにて配信</span>
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
