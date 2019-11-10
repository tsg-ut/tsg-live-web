import React from 'react';
import Program, {
  LiveGameProgrammingDescription,
  LiveAlgorithmDescription,
  LiveHackingDescription,
  Color
} from './Program';
import Member from '../Member';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgrammingDescription}
      members = {{
        '解説': [ Member.taiyoslime, Member.naan ],
        'プレイヤー': [ Member.ura ],
      }}
      startHour = {12}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブ競技プログラミング (アルゴリズム)'
      descriptionElement = {LiveAlgorithmDescription}
      members = {{
        '解説': [ Member.naan, Member.CoiL ],
        '駒場チーム': [ Member.ura ],
        '本郷チーム': [ Member.Mister ],
      }}
      startHour = {14}
      color = {Color.competitiveProgramming}
    />
    <Program
      title = 'ライブハッキング'
      descriptionElement = {LiveHackingDescription}
      members = {{
        'パーソナリティ': [ Member.hakatashi, Member.JP3BGY ],
      }}
      startHour = {16}
      color = {Color.hacking}
    />
  </>
);