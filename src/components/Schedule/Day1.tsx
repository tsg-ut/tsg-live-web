import React, { ReactElement } from 'react';
import Program from '../Program';
import { Member } from '../enums';

const OpeningTalkDescription = (
  <>
    <p>
      TSG LIVE! 3 のオープニングを飾るトークショーです！
      <br />
      オープニングトークでは、TSG部員への質問コーナーや
      <br />
      TSGで流行しているゲーム「たほいや」のミニコーナーを設ける予定です！
    </p>
    <p>
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
    </p>
  </>
);

const LiveGameProgrammingDescription = (
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
      rel="noopener"
    >
      こちらのサイト
    </a>
    でリアルタイムに完成途中のゲームをプレイすることができます！
  </p>
);

const LiveCodeGolfDescription = (
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

const LiveHackingDescription = (
  <p>
    パスワードを盗んだり、暗号を解読する？
    <br />
    そんな一見怪しげな「ハッカー」の技術をお見せします！
    <br/>
    今月上旬にTSGが開催した TSG CTF の問題解説もします！
  </p>
);

export default () => (
  <>
    <Program
      title = 'オープニングトーク'
      descriptionElement = {OpeningTalkDescription}
      members = {{'パーソナリティ': [ Member.hakatashi, Member.nann ]}}
      startTime = '10:00'
      color = 'yellow'
    />
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgrammingDescription}
      members = {{
        '解説': [Member.JP3BGY, Member.nann],
        'プレイヤー': [Member.CoiL],
      }}
      startTime = '12:00'
      color = 'red'
    />
    <Program
      title = 'ライブコードゴルフ大会'
      descriptionElement = {LiveCodeGolfDescription}
      members = {{
        '解説': [Member.Szkieletor, Member.kurgm],
        '駒場チーム': [],
        '本郷チーム': [],
      }}
      startTime = '14:00'
      color = 'green'
    />
    <Program
      title = 'ライブハッキング'
      descriptionElement = {LiveCodeGolfDescription}
      members = {{ 'プレイヤー': [] }}
      startTime = '16:00'
      color = 'purple'
    />
  </>
);