import qs from 'querystring'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import audienceImage from '../images/audience-image.jpg'

import Tabs from './Tabs'

import Day1 from './Schedule/Day1'
import Day2 from './Schedule/Day2'
import Day3 from './Schedule/Day3'
import Credit from './Credit'

const webhookUrl =
  'https://maker.ifttt.com/trigger/tsg_live_3_questionnaire/with/key/fbGiVEn7ecHGFJ8tfPEkI'

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
            <img src={audienceImage} alt="" />
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
              ※スケジュール・スタッフは<wbr />予告なく変更することがあります。
            </small>
          </p>
          <Tabs>
            <div
	            label="11月22日 (金)"
              priority={0}
              activefrom={0}
            >
              <Day1 />
            </div>
            <div
              label="11月23日 (土)"
              priority={1}
              activefrom={(new Date(2019,10,22,18,0,0)).getTime()}
            >
              <Day2 />
            </div>
            <div
              label="11月24日 (日)"
              priority={1}
              activefrom={(new Date(2019,10,23,18,0,0)).getTime()}
            >
              <Day3 />
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
          <Credit />
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
            今回の TSG LIVE! 4 では、視聴者の皆さんからの質問やお便りを募集中です！
            <br />
            <span className="live-yellow">東大生に聞いてみたいこと</span>、
            <span className="live-green">プログラミングに関する質問</span>、
            <span className="live-red">普段の生活などプライベートな話</span>
            など、どんな内容でもOKです！
            <br />
            どしどしご投稿ください！
          </p>
          <p>
            ※投稿された質問は11月22日～24日放送の「TSG LIVE! 4」内でご紹介させていただきます。
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
