import React from 'react';
import Program, {
  LiveGameProgramming2Description,
  LiveCodeGolfDescription,
  LiveCTFDescription,
  LiveHackingDescription,
  Color,
} from './Program';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgramming2Description}
      startHour = {10}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会'
      descriptionElement = {LiveCodeGolfDescription}
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