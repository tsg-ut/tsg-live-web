import React, { useState } from 'react';
import logo from '../images/logo.svg';

const EmbedYouTubeLive = (props: { day: number }) => {
  const ids = [ 'p_TLzWhlZ-k', 'XOmaXJ-vEFA', '6B4iX61xZzI' ];
  return (
    <iframe
      width='560' height='315' src={`https://www.youtube.com/embed/${ids[props.day - 1]}?autoplay=1`}
      frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen
    />
  );
};

const NicoNicoLiveButton = (props: { day: number}) => {
  const ids = [ 322938526, 322938538, 322966984 ];
  const url = `https://live.nicovideo.jp/watch/lv${ids[props.day - 1]}`;
  return (
    <a
      className="watch-link-inner niconico"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>ニコニコ生放送で視聴する</div>
    </a>
  );
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
      href="https://www.nicovideo.jp/mylist/65619209" // TODO: Change here to the latest!
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
    return (
      <>
        <EmbedYouTubeLive day={1} />
        <NicoNicoLiveButton day={1} />
      </>
    );
  } else if (now < new Date(2019, 10, 23, 18, 0)) {
    return (
      <>
        <EmbedYouTubeLive day={2} />
        <NicoNicoLiveButton day={2} />
      </>
    );
  } else if (now < new Date(2019, 10, 24, 16, 0)) {
    return (
      <>
        <EmbedYouTubeLive day={3} />
        <NicoNicoLiveButton day={3} />
      </>
    );
  }
  return <div className='watch-link'>{YouTube}{NicoVideo}</div>;
}

const CommentForm = () => {
  const [ comment, setComment ] = useState('');
  const [ status, setStatus ] = useState<'success' | 'failed' | 'pending'>();

  enum StatusText {
    success = '送信しました！',
    failed = '送信に失敗しました',
    pending = '送信中です…',
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      setTimeout(() => { setStatus(null) }, 3000);
    })();
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <textarea name='comment' placeholder={'匿名でコメント、質問、お便りなどを送信できます！'}
          className={status} value={StatusText[status] || comment} onChange={handleChange} />
        <input type='submit' disabled={comment.length === 0} />
      </form>
    </>
  );
};

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
          <p><span>11月22日 (金), 23日 ({sat}), 24日({sun}) </span><wbr /><span>12:00 ～ 17:30</span></p>
          <p style={{ whiteSpace: 'nowrap' }}>
            <span>東京大学駒場祭 5号館3階</span><wbr/><span>531教室にてオンステージ</span>
            <br />
            <span>YouTube Live/ニコニコ生放送にて</span><wbr/><span>インターネット同時中継</span>
          </p>
          <WatchLinks />
          <CommentForm />
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
        </ul>
      </nav>
    </header>
  );
};

export default Top
