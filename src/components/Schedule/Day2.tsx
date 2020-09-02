import React from 'react';
import Program, {
  LiveGameProgramming2Description,
  LiveCodeGolf2Description,
  LiveCTFDescription,
  LiveHackingDescription,
  Color,
} from './Program';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング 2日目'
      descriptionElement = {LiveGameProgramming2Description}
      startHour = {10}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会 2日目'
      descriptionElement = {LiveCodeGolf2Description}
      startHour = {12}
      color = {Color.golf}
    />
    <Program
      title = 'ライブCTF'
      descriptionElement = {LiveCTFDescription}
      startHour = {14}
      color = {Color.ctf}
    />
    <Program
      title = 'ライブハッキング'
      descriptionElement = {LiveHackingDescription}
      startHour = {16}
      color = {Color.hacking}
    />
  </>
);