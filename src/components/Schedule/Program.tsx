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

  const title = props.title.replace(' 2', '');

  return (
    <div>
      <h4>
        <small>{props.startHour}:00〜</small>
        <br />
        {title.includes('ライブ')
          ? <>
              <span className={`live-${props.color}`}>ライブ</span>
              {title.replace('ライブ', '')}
            </>
          : <span className={`live-${props.color}`}>{title}</span>
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
      TSG LIVE! 4 のオープニングを飾る<wbr />トークショーです！
      <br />
      TSG部員への質問コーナーや、
      <wbr />
      TSGで流行しているゲーム<wbr />「たほいや」の<wbr />ミニコーナーを<wbr />設ける予定です！
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
    スリリングな「コードゴルフ」の大会を<wbr />実況します。
    <br />
    普通じゃない変なプログラミング言語、<wbr />“esolang” も<wbr />多数登場します！
  </p>
);

export const LiveMarathonDescription = (
  <p>
    競技プログラミングは、<wbr />問題の条件を満たすプログラムを書き、<wbr />
    点数を<wbr />競う<wbr />競技。<wbr />
    いわば「プログラミングで<wbr />パズルを解く<wbr />
    アツい<wbr />スポーツ」<wbr />です！
    <br />
    この時間は、<wbr />限られた資源の中で<wbr />
    どれだけ<wbr />最適な解に<wbr />近づけたかの<wbr />スコアを競う<wbr />
    「マラソンマッチ」形式の<wbr />コンテストを<wbr />生放送で<wbr />実況します。
    <br />
    熟練プログラマーたちの<wbr />白熱の戦いを<wbr />お楽しみください！
  </p>
);

export const LiveGameProgrammingDescription = (
  <p>
    プログラミングが得意な部員が、<wbr />放送時間中に<wbr />
    1つのゲームを<wbr />ゼロから<wbr />完成させます！
    <br />
    リアルタイムにデプロイされる<wbr />ゲームにも<wbr />注目です！
    {/* TODO */}
    {/* <br />
    <a
      href="https://kpccoil.github.io/tsglive3-game/"
      target="_blank"
      rel="noopener noreferrer"
    >
      こちらのサイト
    </a>
    でリアルタイムに完成途中のゲームをプレイすることができます！ */}
  </p>
);

export const LiveAlgorithmDescription = (
  <p>
    競技プログラミングは、<wbr />問題の条件を満たす<wbr />プログラムを書き、
    <wbr />点数を競う競技。
    <br />
    この時間は、<wbr />複雑な問題を<wbr />賢く解くアルゴリズムを<wbr />
    いかに早く<wbr />組み立てられるかを<wbr />競います！
    <br />
    熟練プログラマーたちの<wbr />目にも留まらぬ<wbr />激戦を<wbr />お楽しみください！
    <br />
    また今回は、<wbr />視聴者の皆さんも<wbr />リアルタイムで<wbr />問題を解き、<wbr />
    その腕前を<wbr />出演者と競うことができます！
    <br />
    TSG LIVE! 初となるこの企画。
    <wbr />
    <a href="https://www.hackerrank.com/tsg-live-4-programming-contest"
      target="_blank"
      rel="noopener noreferrer"
    >
      こちらのサイト
    </a>
    から<wbr />ぜひご参加ください！
  </p>
);

export const LiveHackingDescription = (
  <p>
    パスワードを盗んだり、暗号を解読する？
    <br />
    そんな一見怪しげな「ハッカー」の技術を<wbr />お見せします！
    <br />
    10月に開催された国内最大級の<wbr />セキュリティコンテスト <wbr />
    “SECCON” の<wbr />予選大会では、<wbr />TSG が<wbr />一部の作問を<wbr />担当しました。
    <br />
    今回はそれらの問題を、<wbr />作問者たちが詳しく解説します！
  </p>
);

export const LiveCTFDescription = (
  <>
    <p>
      パスワードを盗んだり、暗号を解読する？
      <br />
      そんな一見怪しげな「ハッカー」の技術を<wbr />競う<wbr />大会です！
      <br />
      (Web, Pwn, Crypto, Stego などを出題予定)
    </p>
    <p>
      視聴者の皆さんもCTFに参加できます！<wbr />
      <a
        href="https://live-ctf.tsg.ne.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちらのサイト
      </a>
      から<wbr />ぜひご参加ください！
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