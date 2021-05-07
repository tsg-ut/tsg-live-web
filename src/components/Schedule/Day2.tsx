import React from 'react';
import Program, {
  LiveGameProgramming2Description,
  LiveCodeGolf2Description,
  LiveCTFDescription,
  LiveHackingDescription,
  colors,
} from './Program';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング 2日目'
      descriptionElement = {LiveGameProgramming2Description}
      time = '10:30〜12:00'
      color = {colors.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会 2日目'
      descriptionElement = {LiveCodeGolf2Description}
      time = '12:30〜14:00'
      color = {colors.golf}
    />
    <Program
      title = 'ライブCTF'
      descriptionElement = {LiveCTFDescription}
      time = '14:30〜16:30'
      color = {colors.security}
    />
  </>
);
