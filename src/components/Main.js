import qs from 'querystring'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Tabs from './Tabs'

import About from './About'
import Day1 from './Schedule/Day1'
import Day2 from './Schedule/Day2'
import Day3 from './Schedule/Day3'
import Credit from './Credit'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      message: null,
    }

    this.handleChange = this.handleChange.bind(this)
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
          <About closeButton={close} />
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
      </div>
    )
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
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
