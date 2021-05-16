import React, { ReactElement } from 'react';
import { roles, ProgramName } from '../member';

interface ProgramProps {
  title: ProgramName;
  descriptionElement: ReactElement;
  time: string;
  color: string;
}

const Program = (props: ProgramProps) => {
  const colorRole = (role: string) => {
    switch (role) {
      case '関東チーム':
        return <span className='live-blue'>関東チーム</span>;
      case '関西チーム':
        return <span className='live-red'>関西チーム</span>;
      default:
        return role;
    }
  };

  const staff = roles[props.title];
  const excludedRole = [ '作問', '企画', 'たほいや準備', '準備', '裏方サポート' ];
  const characters = Object.keys(staff)
    .filter(key => !excludedRole.includes(key))
    .reduce((obj, key) => {
      obj[key] = staff[key];
      return obj
    }, {});

  const title = props.title.replace(/ \d日目/, '');

  return (
    <div>
      <h4>
        <small>{props.time}</small>
        <br />
        {title.includes('ライブ')
          ? <>
              <span style={{ color: props.color }}>ライブ</span>
              {title.replace('ライブ', '')}
            </>
          : <span style={{ color: props.color }}>{title}</span>
        }
      </h4>
      <dl>
        {Object.keys(characters).map(role =>
          <div key={role}>
            <dt>{colorRole(role)}</dt>
            <dd>{characters[role].join(', ')}</dd>
          </div>
        )}
      </dl>
      {props.descriptionElement}
    </div>
  )
};

export default Program;

export const OpeningTalkDescription = (
  <>
    <p>
      TSG LIVE! 6 のオープニングを飾るトークショーです！
      <br />
      TSGとTSG LIVE! の紹介のほか、TSG で大流行中のゲーム hangman の bot 開発者へのインタビューをお送りします！
    </p>
  </>
);

export const LiveCodeGolfDescription = (
  <p>
    プログラムを短く書いたら勝ち！
    <br />
    スリリングな「コードゴルフ」の大会を実況します。
    <br />
    普通じゃない変なプログラミング言語 “esolang” も多数登場します！
  </p>
);

export const LiveCodeGolf2Description = (
  <p>
    プログラムを短く書いたら勝ち！
    <br />
    スリリングな「コードゴルフ」の大会を実況します。
    <br />
    普通じゃない変なプログラミング言語 “esolang” も多数登場します！
    <br />
    2日目は、TSG 外部からコードゴルファーをご招待！
    <br />
    現れた強敵に、果たして TSG の精鋭たちは勝利できるのか？
  </p>
);

export const LiveMarathonDescription = (
  <p>
    厳密な最適解を求めることが困難な問題で、
    できるだけ “良い” 解を計算するのが「マラソン」！
    <br />
    限られた資源で最適解へどれだけ近づけられるか、
    部員同士のデッドヒートをご覧ください！
  </p>
);

export const LiveGameProgrammingDescription = (
  <p>
    プログラミングが得意な部員が、放送時間中にゲームをゼロから完成させます！
  </p>
);

export const LiveGameProgramming2Description = (
  <p>
    プログラミングが得意な部員が、放送時間中にゲームをゼロから完成させます！
    <br />
    今回も、視聴者の皆さんがリアルタイムに完成途中のゲームをプレイすることができます！
    <br />
    完成したゲームは、<a href='https://hideo54.github.io/aza-obake-exorcism/' target='_blank' rel='noopener noreferrer'>こちら</a>でプレイできます！ (<a href='https://github.com/hideo54/aza-obake-exorcism' target='_blank' rel='noopener noreferrer'>ソース</a>)
  </p>
);

export const LiveAlgorithmDescription = (
  <p>
    「プログラミングでパズルを解くアツいスポーツ」、競技プログラミング。
    <br />
    この時間は、複雑な問題を賢く解くアルゴリズムをいかに早く
    組み立てられるか競う「アルゴリズム」のコンテストを行います。
    <br />
    熟練プログラマーたちの目にも留まらぬ激戦をお楽しみください！
    <br />
    また今回は、視聴者の皆さんもリアルタイムで問題を解き、
    その腕前を出演者と競うことができます！
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
    そんな一見怪しげな「ハッカー」の技術をお見せします！
    <br />
    今回は、今年TSGが開催した “TSG CTF” の問題を、作問者たちが詳しく解説します！
  </p>
);

export const LiveCTFDescription = (
  <>
    <p>
      パスワードを盗んだり、暗号を解読する？
      <br />
      そんな一見怪しげな「ハッカー」の技術を競う大会です！
      <br />
      今回は、TSG 外部から CTFer をご招待！ TSG チームと対決していただきます！
      <br />
      視聴者の皆さんもリアルタイムで問題を解き、その腕前を出演者と競うことができます！
      {/* <a
        href="https://live-ctf.tsg.ne.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちらのサイト
      </a>
      からぜひご参加ください！ */}
    </p>
  </>
);

export const colors = {
  opening: '#f1ea5a', // yellow
  golf: '#8fc31f', // green
  security: '#ce86b7', // purple
  competitiveProgramming: '#af8966', // brown
  gameProgramming: '#e95155', // red
};
