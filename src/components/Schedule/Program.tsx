import React, { ReactElement } from 'react';
import { roles, ProgramName } from '../Member';

interface ProgramProps {
  title: ProgramName;
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

  const title = props.title.replace(/ \d日目/, '');

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
      TSG LIVE! 5 のオープニングを飾るトークショーです！
      <br />
      TSG部員への質問コーナーや、TSGで流行しているゲーム「たほいや」のミニコーナーを設ける予定です！
    </p>
  </>
);

export const LiveCodeGolfDescription = (
  <p>
    プログラムを短く書いたら勝ち！
    <br />
    スリリングな「コードゴルフ」の大会を実況します。
    <br />
    普通じゃない変なプログラミング言語、“esolang” も多数登場します！
  </p>
);

export const LiveMarathonDescription = (
  <p>
    「プログラミングでパズルを解くアツいスポーツ」、競技プログラミング。
    <br />
    この時間は、限られた資源の中でどれだけ
    最適な解に近づけたかのスコアを競う
    「マラソンマッチ」形式のコンテストを生放送で実況します。
    <br />
    熟練プログラマーたちの白熱の戦いをお楽しみください！
  </p>
);

export const LiveGameProgrammingDescription = (
  <p>
    プログラミングが得意な部員が、放送時間中に
    1つのゲームをゼロから完成させます！
    <br />
    リアルタイムにデプロイされるゲームにも注目です！
    <br />
    <a
      href="https://tsg-live-geister.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      こちらのサイト
    </a>
    でリアルタイムに完成途中のゲームをプレイすることができます！
  </p>
);

export const LiveGameProgramming2Description = (
  <p>
    プログラミングが得意な部員が、放送時間中に
    1つのゲームをゼロから完成させます！
    <br />
    リアルタイムにデプロイされるゲームにも注目です！
    <br />
    <a
      href="https://hakatashi.github.io/tsg-live-bird/"
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
    10月に開催された国内最大級のセキュリティコンテスト
    “SECCON” の予選大会では、TSG が一部の作問を担当しました。
    <br />
    今回はそれらの問題を、作問者たちが詳しく解説します！
  </p>
);

export const LiveCTFDescription = (
  <>
    <p>
      パスワードを盗んだり、暗号を解読する？
      <br />
      そんな一見怪しげな「ハッカー」の技術を競う大会です！
      <br />
      (Web, Pwn, Crypto, Stego などを出題予定)
    </p>
    <p>
      視聴者の皆さんもCTFに参加できます！
      <a
        href="http://live-ctf.tsg.ne.jp/"
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