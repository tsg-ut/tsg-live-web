import React, { ReactElement } from 'react';
import { roles, ProgramName } from '../member';

interface ProgramProps {
  title: ProgramName;
  descriptionElement: ReactElement;
  startHour: number;
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
        <small>{props.startHour}:00〜</small>
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
      TSG LIVE! 5 のオープニングを飾るトークショーです！
      <br />
      TSGとTSG LIVE! の紹介のほか、各コーナーのデモンストレーションや、
      TSGで流行しているゲーム「たほいや」のミニコーナーをお送りします！
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

export const LiveCodeGolf2Description = (
  <p>
    プログラムを短く書いたら勝ち！
    <br />
    スリリングな「コードゴルフ」の大会を実況します。
    <br />
    普通じゃない変なプログラミング言語、“esolang” も多数登場します！
    <br />
    2日目は、TSGの外から2人の天才コードゴルファーを TSG LIVE 5! へご招待！
    <br />
    現れた強敵に、果たしてTSGの精鋭たちは勝利できるのか？
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
    プログラミングが得意な部員が、放送時間中に
    1つのゲームをゼロから完成させます！
    {/* <br />
    リアルタイムにデプロイされるゲームにも注目です！
    <br />
    <a
      href="https://tsg-live-geister.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      こちらのサイト
    </a>
    でリアルタイムに完成途中のゲームをプレイすることができます！ */}
    <br />
    [追記] 完成したゲームはこちらです!
    (<a
      href="https://www.dropbox.com/s/g250jw1wbo34ixb/live-game-day1.exe?dl=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      exe 実行ファイル
    </a>)
    (<a
      href="https://gist.github.com/azaika/0166f727a527c0923a27eebf37b465b1"
      target="_blank"
      rel="noopener noreferrer"
    >
      ソース
    </a>)
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
      href="http://hideo54.github.io/HexaMineSweeper/"
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
      (Web, Pwn, Crypto, Rev, Misc などを出題予定)
    </p>
    <p>
      視聴者の皆さんもCTFに参加できます！
      <a
        href="https://live-ctf.tsg.ne.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちらのサイト
      </a>
      からぜひご参加ください！
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