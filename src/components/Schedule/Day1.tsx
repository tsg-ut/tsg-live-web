import React from 'react';
import Program, {
  OpeningTalkDescription,
  LiveCodeGolfDescription,
  LiveMarathonDescription,
  Color
} from './Program';
import Member from '../Member';

export default () => (
  <>
    <Program
      title = 'オープニングトーク'
      descriptionElement = {OpeningTalkDescription}
      members = {{'パーソナリティ': [
        Member.hakatashi, Member.kuromunori, Member.hideo54
      ]}}
      startHour = {12}
      color = {Color.opening}
    />
    <Program
      title = 'ライブコードゴルフ大会'
      descriptionElement = {LiveCodeGolfDescription}
      members = {{
        '解説': [ Member.taiyoslime, Member.bitmath ],
        '駒場チーム': [ Member.iLiss, Member.ura ],
        '本郷チーム': [ Member.moratorium, Member.kuromunori ],
      }}
      startHour = {14}
      color = {Color.golf}
    />
    <Program
      title = 'ライブ競技プログラミング (マラソン)'
      descriptionElement = {LiveMarathonDescription}
      members = {{
        '解説': [ Member.naan, Member.kuromunori ],
        '駒場チーム': [ Member.JP3BGY ],
        '本郷チーム': [ Member.fiord ],
      }}
      startHour = {16}
      color = {Color.competitiveProgramming}
    />
  </>
);