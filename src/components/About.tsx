import React from 'react';
import audienceImage from '../images/audience-image.jpg';

export default (props: { closeButton }) => (
  <>
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
    {props.closeButton}
  </>
);