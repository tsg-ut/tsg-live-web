import React from 'react';
import Program, {
  LiveGameProgrammingDescription,
  LiveCTFDescription,
  Color
} from './Program';
import Member from '../Member';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgrammingDescription}
      members = {{
        '解説': [ Member.moratorium, Member.satos ],
        'プレイヤー': [ Member.hakatashi ],
      }}
      startHour = {12}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブCTF'
      descriptionElement = {LiveCTFDescription}
      members = {{
        '解説': [ Member.hakatashi, Member.bitmath ],
        '駒場チーム': [ Member.naan, Member.JP3BGY, Member.taiyoslime ],
        '本郷チーム': [ Member.moratorium, Member.fiord, Member.satos ],
      }}
      startHour = {14}
      color = {Color.golf}
    />
  </>
);