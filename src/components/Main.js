import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TSG LIVE! とは？</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            TSG LIVE!
            は、東京大学の歴史あるプログラミングサークルTSGが、五月祭や駒場祭といった東大の学園祭などで開催しているライブプログラミングのイベントです。
          </p>
          <p>
            90分という限られた時間の生放送で、TSGが誇る精鋭プログラマーたちが自らの持てる技術を尽くして最高のパフォーマンスをお届けします。
          </p>
          <p>
            ライブの内容は、ゲームプログラミングのようなフランクなものから、競技プログラミングやコードゴルフのようなマニアックなものまで多種多様。プログラミング未経験者から熟練プログラマーまで、幅広い人々に楽しんでいただける放送となっております！
          </p>
          {close}
        </article>

        <article
          id="schedule"
          className={`${this.props.article === 'schedule' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">放送スケジュール</h2>
          <p>
            <small>
              ※スケジュール・スタッフは予告なく変更することがあります。最新の情報はこちらの説明文を参照してください。
            </small>
          </p>
          <h3>11月23日 (祝)</h3>
          <h4>
            <small>12:00～</small>
            <br />
            <span className="live-yellow">オープニングトーク</span>
          </h4>
          <dl>
            <dt>パーソナリティ</dt>
            <dd>kuromunori, satos</dd>
          </dl>
          <p>
            TSG LIVE! 2 のオープニングを飾るトークショーです！
            <br />
            オープニングトークでは、TSG部員への質問コーナーや
            <br />
            TSGで流行しているゲーム「たほいや」のミニコーナーを設ける予定です！
          </p>
          <h4>
            <small>14:00～</small>
            <br />
            <span className="live-green">ライブ</span>コードゴルフ大会
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>bitmath, kuromunori</dd>
            <dt>プレイヤー</dt>
            <dd>ura, lip_of_cygnus, dai, Pokemon</dd>
          </dl>
          <p>
            プログラムを短く書いたら勝ち！
            <br />
            スリリングな「コードゴルフ」の大会を実況します。
            <br />
            普通じゃない変なプログラミング言語、
            <br />
            “esolang” も多数登場します！
          </p>
          <h4>
            <small>16:00～</small>
            <br />
            <span className="live-purple">ライブ</span>CTF
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>kcz, satos</dd>
            <dt>プレイヤー</dt>
            <dd>fiord, moratorium, hakatashi, taiyoslime</dd>
            <dt>問題作成協力</dt>
            <dd>kcz</dd>
            <dt>システム保守</dt>
            <dd>kcz</dd>
          </dl>
          <p>
            パスワードを盗んだり、暗号を解読する？
            <br />
            そんな一見怪しげな「ハッカー」の技術を競う大会です！
            <br />
            この日は、主にウェブサイトに関する問題が出題されます！
            <br />
            (web, stego, forensics などを出題予定)
          </p>
          <p>
            また、今回は視聴者の皆さんもCTFに参加できるようになりました！
            <br />
            1日目は
            <a
              href="https://ctf-day1.tsg.ne.jp/"
              target="_blank"
              rel="noopener"
            >
              こちらのサイト
            </a>
            からぜひご参加ください！
          </p>
          <h3>11月24日 (土)</h3>
          <h4>
            <small>10:00～</small>
            <br />
            <span className="live-red">ライブ</span>ゲームプログラミング
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>JP3BGY, CoiL</dd>
            <dt>プレイヤー</dt>
            <dd>akouryy</dd>
          </dl>
          <p>
            プログラミングが得意な部員が、
            <br />
            放送時間中に1つのゲームをゼロから完成させます！
            <br />
            リアルタイムにデプロイされるゲームにも注目です！
          </p>
          <h4>
            <small>12:00～</small>
            <br />
            <span className="live-blue">スペシャルトーク</span>
          </h4>
          <dl>
            <dt>パーソナリティ</dt>
            <dd>hakatashi, kivantium</dd>
            <dt>ゲスト</dt>
            <dd>yamaguchi</dd>
          </dl>
          <p>
            スペシャルなゲストをお招きしてお送りするスペシャルトーク！
            <br />
            今回は東大生でありながら、スイスのCERNで（！）
            <br />
            ソフトウェアエンジニアとして働くyamaguchiさんをゲストにお招きして、
            <br />
            気になるアレコレを伺っていきます！
          </p>
          <p>
            yamaguchiさんへの質問・お便りも受け付けておりますので、
            <br />
            どしどし
            <a onClick={this.handleClickContact}>こちら</a>
            からお寄せください！
          </p>
          <h4>
            <small>14:00～</small>
            <br />
            <span className="live-green">ライブ</span>コードゴルフ大会
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>hakatashi, JP3BPY</dd>
            <dt>プレイヤー</dt>
            <dd>kurgm, liesegang, akouryy, satos</dd>
          </dl>
          <p>
            プログラムを短く書いたら勝ち！
            <br />
            スリリングな「コードゴルフ」の大会を実況します。
            <br />
            2日目のコードゴルフはベテラン枠。
            <br />
            非常にハイレベルな戦いが見られること間違いなしです！
          </p>
          <h4>
            <small>16:00～</small>
            <br />
            <span className="live-brown">ライブ</span>競技プログラミング
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>CoiL, fiord</dd>
            <dt>プレイヤー</dt>
            <dd>dai, Mister</dd>
            <dt>問題作成協力</dt>
            <dd>fiord</dd>
            <dt>システム制作</dt>
            <dd>hakatashi</dd>
          </dl>
          <p>
            競技プログラミングは、問題の条件を満たすプログラムを最速で書く競技。
            <br />
            いわば、「プログラミングでパズルを解くアツいスポーツ」です！
            <br />
            「プロコン」とも呼ばれ世界中で愛されるこの競技が TSG LIVE!
            にも登場。
            <br />
            熟練プログラマー2人の激戦をお楽しみください！
          </p>
          <h3>11月25日 (日)</h3>
          <h4>
            <small>10:00～</small>
            <br />
            <span className="live-red">ライブ</span>ゲームプログラミング
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>kivantium, kuromunori</dd>
            <dt>プレイヤー</dt>
            <dd>hakatashi</dd>
          </dl>
          <p>
            プログラミングが得意な部員が、
            <br />
            放送時間中に1つのゲームをゼロから完成させます！
            <br />
            リアルタイムにデプロイされるゲームにも注目です！
          </p>
          <p>
            この日は、製作中のゲームが
            <a
              href="https://hakatashi.github.io/tsg-live-block/"
              target="_blank"
              rel="noopener"
            >
              こちらのサイト
            </a>
            にデプロイされ、
            <br />
            完成途中のゲームをリアルタイムで遊ぶことができます!!
          </p>
          <h4>
            <small>12:00～</small>
            <br />
            <span className="live-orange">ライブ</span>AIプログラミング
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>fiord, moratorium</dd>
            <dt>プレイヤー</dt>
            <dd>Mister, kuromunori</dd>
            <dt>問題作成協力</dt>
            <dd>moratorium</dd>
            <dt>システム制作</dt>
            <dd>hakatashi</dd>
          </dl>
          <p>
            プレイヤー同士がゲームで対戦⋯⋯と言っても、
            <br />
            対戦するのはプレイヤーがプログラムしたAIです！
            <br />
            はたして75分でどんなAIが完成するでしょうか？
          </p>
          <h4>
            <small>14:00～</small>
            <br />
            <span className="live-purple">ライブ</span>CTF
          </h4>
          <dl>
            <dt>解説</dt>
            <dd>lmt_swallow, satos</dd>
            <dt>プレイヤー</dt>
            <dd>kcz, JP3BGY, moratorium08, dai</dd>
            <dt>問題作成協力</dt>
            <dd>satos</dd>
            <dt>システム保守</dt>
            <dd>kcz</dd>
          </dl>
          <p>
            パスワードを盗んだり、暗号を解読する？
            <br />
            そんな一見怪しげな「ハッカー」の技術を競う大会です！
            <br />
            この日は、主にコンピュータープログラムに関する問題が出題されます！
            <br />
            (pwn, rev, crypto などを出題予定)
          </p>
          <p>
            また、今回は視聴者の皆さんもCTFに参加できるようになりました！
            <br />
            3日目は
            <a
              href="https://ctf-day3.tsg.ne.jp/"
              target="_blank"
              rel="noopener"
            >
              こちらのサイト
            </a>
            からぜひご参加ください！
          </p>
          {close}
        </article>

        <article
          id="credit"
          className={`${this.props.article === 'credit' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">クレジット</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>駒場祭カンパ参加者</h3>
          <p>@satos, @kivantium, @totem</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">質問を送信する</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="message">おたより / 質問</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="送信する" className="special" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/tsg_ut" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tsg-ut" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
