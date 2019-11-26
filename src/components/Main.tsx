import React from 'react'
import Tabs from './Tabs'
import About from './About'
import Day1 from './Schedule/Day1'
import Day2 from './Schedule/Day2'
import Day3 from './Schedule/Day3'
import Credit from './Credit'

interface MainProps {
  route;
  article: string;
  articleTimeout: boolean;
  onOpenArticle;
  onCloseArticle;
  timeout: boolean;
  setWrapperRef;
}

const Main = (props: MainProps) => {
  const closeButton = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  );
  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <About closeButton={closeButton} />
      </article>

      <article
        id="schedule"
        className={`${props.article === 'schedule' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
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
            data-label="11月22日 (金)"
            data-priority={0}
            data-activefrom={0}
          >
            <Day1 />
          </div>
          <div
            data-label="11月23日 (土)"
            data-priority={1}
            data-activefrom={(new Date(2019,10,22,18,0,0)).getTime()}
          >
            <Day2 />
          </div>
          <div
            data-label="11月24日 (日)"
            data-priority={2}
            data-activefrom={(new Date(2019,10,23,18,0,0)).getTime()}
          >
            <Day3 />
          </div>
        </Tabs>
        {closeButton}
      </article>
      <article
        id="credit"
        className={`${props.article === 'credit' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Credit />
        {closeButton}
      </article>
    </div>
  );
};

export default Main;
