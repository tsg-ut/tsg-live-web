import React, { ReactElement } from 'react';
import Member, { roles } from '../Member';

interface ProgramProps {
  title: string;
  descriptionElement: ReactElement;
  startHour: number;
  color: string;
}

const Program = (props: ProgramProps) => {
  const colorRole = (role: string) => {
    switch (role) {
      case '駒場チーム':
        return <span className='live-blue'>駒場チーム</span>;
      case '本郷チーム':
        return <span className='live-red'>本郷チーム</span>;
      default:
        return role;
    }
  };

  const staff = roles[props.title];
  const excludedRole = [ 'たほいや準備', '準備', '裏方サポート' ];
  const characters = Object.keys(staff)
    .filter(key => !excludedRole.includes(key))
    .reduce((obj, key) => {
      obj[key] = staff[key];
      return obj
    }, {});

  return (
    <div>
      <h4>
        <small>{props.startHour}:00〜</small>
        <br />
        {props.title.includes('ライブ')
          ? <>
              <span className={`live-${props.color}`}>ライブ</span>
              {props.title.replace('ライブ', '')}
            </>
          : <span className={`live-${props.color}`}>{props.title}</span>
        }
      </h4>
      <dl>
        <>
          {Object.keys(characters).map(role => (
            <div key={role}>
              <dt>{colorRole(role)}</dt>
              <dd>{characters[role].join(', ')}</dd>
            </div>
          ))}
        </>
      </dl>
      {props.descriptionElement}
    </div>
  )
};

export default Program;

export const OpeningTalkDescription = (
  <>
    <p>
      TSG LIVE! 4 のオープニングを飾るトークショーです！
      <br />
      オープニングトークでは、TSG部員への質問コーナーや
      <br />
      TSGで流行しているゲーム「たほいや」のミニコーナーを設ける予定です！
    </p>
    {/* エラーが出るのを直そうね */}
    {/* <p>
      放送中に紹介する質問はまだまだ受け付けております！
      <br />
      質問はぜひ
      <a
        onClick={async () => {
          this.props.onCloseArticle()
          await new Promise(resolve => setTimeout(resolve, 400))
          this.props.onOpenArticle('contact')
        }}
      >
        こちら
      </a>
      からお寄せください！
    </p> */}
  </>
);

export const LiveCodeGolfDescription = (
  <p>
    プログラムを短く書いたら勝ち！
    <br />
    スリリングな「コードゴルフ」の大会を実況します。
    <br />
    普通じゃない変なプログラミング言語、
    <br />
    “esolang” も多数登場します！
  </p>
);

export const LiveMarathonDescription = (
  <p>
    競技プログラミングは、問題の条件を満たすプログラムを最速で書く競技。
    <br />
    いわば、「プログラミングでパズルを解くアツいスポーツ」です！
    <br />
    「プロコン」とも呼ばれ世界中で愛されるこの競技が TSG LIVE!
    にも登場。
    <br />
    熟練プログラマーたちの激戦をお楽しみください！
  </p>
);

export const LiveGameProgrammingDescription = (
  <p>
    プログラミングが得意な部員が、
    <br />
    放送時間中に1つのゲームをゼロから完成させます！
    <br />
    リアルタイムにデプロイされるゲームにも注目です！
    <br />
    <a
      href="https://kpccoil.github.io/tsglive3-game/"
      target="_blank"
      rel="noopener noreferrer"
    >
      こちらのサイト
    </a>
    でリアルタイムに完成途中のゲームをプレイすることができます！
  </p>
);

export const LiveAlgorithmDescription = (
  <p>
    競技プログラミングは、問題の条件を満たすプログラムを最速で書く競技。
    <br />
    いわば、「プログラミングでパズルを解くアツいスポーツ」です！
    <br />
    「プロコン」とも呼ばれ世界中で愛されるこの競技が TSG LIVE!
    にも登場。
    <br />
    熟練プログラマーたちの激戦をお楽しみください！
  </p>
);

export const LiveHackingDescription = (
  <p>
    パスワードを盗んだり、暗号を解読する？
    <br />
    そんな一見怪しげな「ハッカー」の技術をお見せします！
    <br/>
    今月上旬にTSGが開催した TSG CTF の問題解説もします！
  </p>
);

export const LiveCTFDescription = (
  <>
    <p>
      パスワードを盗んだり、暗号を解読する？
      <br />
      そんな一見怪しげな「ハッカー」の技術を競う大会です！
      <br />
      (pwn, rev, misc, web などを出題予定)
    </p>
    <p>
      視聴者の皆さんもCTFに参加できます！
      <a
        href="http://ctf-day2.tsg.ne.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちらのサイト
      </a>
      からぜひご参加ください！
    </p>
  </>
);

export enum Color {
  opening = 'yellow',
  golf = 'green',
  hacking = 'purple',
  ctf = 'purple',
  competitiveProgramming = 'brown',
  gameProgramming = 'red',
}