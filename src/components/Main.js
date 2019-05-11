import qs from 'querystring'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import Tabs from './Tabs'

const webhookUrl =
  'https://maker.ifttt.com/trigger/tsg_live_2_questionnaire/with/key/fbGiVEn7ecHGFJ8tfPEkI'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      message: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
            TSG LIVE! は、東京大学の歴史あるプログラミングサークルTSGが、五月祭や駒場祭といった東大の学園祭などで開催しているライブプログラミングのイベントです。
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
              ※スケジュール・スタッフは予告なく変更することがあります。
            </small>
          </p>
          <Tabs>
            <div
	            label="5月18日 (土)"
              priority={0}
              activefrom={0}
            >
              <h4>
                <small>10:00～</small>
                <br />
                <span className="live-yellow">オープニングトーク</span>
              </h4>
              <dl>
                <dt>パーソナリティ</dt>
                <dd>hakatashi, ナンやねん(ナンなので)</dd>
              </dl>
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
              <h4>
                <small>12:00～</small>
                <br />
                <span className="live-red">ライブ</span>ゲームプログラミング
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>JP3BGY, ナンやねん(ナンなので)</dd>
                <dt>プレイヤー</dt>
                <dd>CoiL</dd>
              </dl>
              <p>
                プログラミングが得意な部員が、
                <br />
                放送時間中に1つのゲームをゼロから完成させます！
                <br />
                リアルタイムにデプロイされるゲームにも注目です！
                <br />
                <a
                  href="https://akouryy.github.io/tsg-live2/"
                  target="_blank"
                  rel="noopener"
                >
                  こちらのサイト
                </a>
                でリアルタイムに完成途中のゲームをプレイすることができます！
              </p>
              <h4>
                <small>14:00～</small>
                <br />
                <span className="live-green">ライブ</span>コードゴルフ大会
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>Szkieletor, kurgm</dd>
                <dt>駒場チーム</dt>
                <dd>うら, 557.Ortlinde</dd>
                <dt>本郷チーム</dt>
                <dd>satos, Oura M.</dd>
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
                <span className="live-purple">ライブ</span>ハッキング
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>kcz146, hakatashi</dd>
                <dt>プレイヤー</dt>
                <dd>????</dd>
                <dt>問題作成協力</dt>
                <dd>????</dd>
                <dt>システム</dt>
                <dd>????</dd>
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
            </div>
            <div
              label="5月19日 (日)"
              priority={1}
              activefrom={(new Date(2019,5,18,18,0,0)).getTime()}
            >
              <h4>
                <small>10:00～</small>
                <br />
                <span className="live-brown">ライブ</span>競技プログラミング
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>JP3BGY, fiord</dd>
                <dt>駒場チーム</dt>
                <dd>ナンやねん(ナンなので), CoiL</dd>
                <dt>本郷チーム</dt>
                <dd>dai, lip_of_cygnus</dd>
                <dt>問題作成協力</dt>
                <dd>????</dd>
                <dt>システム制作</dt>
                <dd>????</dd>
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
              <h4>
                <small>12:00～</small>
                <br />
                <span className="live-green">ライブ</span>コードゴルフ大会
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>norakuromunori, pizzacat83</dd>
                <dt>駒場チーム</dt>
                <dd>taiyoslime, さくらミケ(O_mikemike)</dd>
                <dt>本郷チーム</dt>
                <dd>kurgm, liesegang</dd>
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
                <small>14:00～</small>
                <br />
                AIプログラミング大会
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>norakuromunori, hakatashi</dd>
                <dt>プレイヤー</dt>
                <dd>????, ????</dd>
                <dt>問題作成協力</dt>
                <dd>????</dd>
                <dt>システム制作</dt>
                <dd>????</dd>
              </dl>
              <p>
                プレイヤー同士がゲームで対戦⋯⋯と言っても、
                <br />
                対戦するのはプレイヤーがプログラムしたAIです！
                <br />
                はたして75分でどんなAIが完成するでしょうか？
                <br />
                // TODO: ライブではないので文言変更が必要
              </p>
              <h4>
                <small>16:00～</small>
                <br />
                <span className="live-purple">ライブ</span>CTF
              </h4>
              <dl>
                <dt>解説</dt>
                <dd>lmt_swallow, moratorium08</dd>
                <dt>駒場チーム</dt>
                <dd>taiyoslime, JP3BGY, fiord</dd>
                <dt>本郷チーム</dt>
                <dd>satos, kcz146, liesegang</dd>
                <dt>問題作成協力</dt>
                <dd>hakatashi, moratorium08, dai, lmt_swallow</dd>
                <dt>システム</dt>
                <dd>????</dd>
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
                <a
                  href="https://ctf-day2.tsg.ne.jp/"
                  target="_blank"
                  rel="noopener"
                >
                  こちらのサイト
                </a>
                からぜひご参加ください！
              </p>
            </div>
          </Tabs>
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
          <h3>
            <span className="live-red">TSG LIVE! サポーターズ</span>
          </h3>
          <ul>
            // TODO
          </ul>
          <h3>出演者</h3>
          <ul>
            // TODO
          </ul>
          <h3>配信スタッフ</h3>
          <ul>
            // TODO
          </ul>
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
          <p>
            今回の TSG LIVE! 3 では、視聴者の皆さんからの質問やお便りを募集中です！
            <br />
            <span className="live-yellow">東大生に聞いてみたいこと</span>、
            <span className="live-green">プログラミングに関する質問</span>、
            <span className="live-red">普段の生活などプライベートな話</span>
            など、どんな内容でもOKです！
            <br />
            どしどしご投稿ください！
          </p>
          <p>
            ※投稿された質問は5月18日～19日放送の「TSG LIVE!
            3」内でご紹介させていただきます。
            <br />
            ※質問の個別回答はいたしません。
          </p>
          <form method="post" action="#" onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="message">おたより / 質問</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            {this.state.message !== null && (
              <p className="message-sent">{this.state.message}</p>
            )}
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

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await axios
      .get(
        `${webhookUrl}?${qs.encode({
          value1: this.state.value,
          csrf: 'FIsP8HvU1YL7lI6JCG0SwbcmIwh1k0Gn',
        })}`
      )
      .catch(() => {}) // CORSエラーが出るけど容赦なく握りつぶす
    this.setState({
      value: '',
      message: '送信しました！',
    })
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
