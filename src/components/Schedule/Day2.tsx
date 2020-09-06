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
      startHour = {10}
      color = {colors.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会 2日目'
      descriptionElement = {LiveCodeGolf2Description}
      startHour = {12}
      color = {colors.golf}
    />
    <Program
      title = 'ライブCTF'
      descriptionElement = {LiveCTFDescription}
      startHour = {14}
      color = {colors.security}
    />
    <Program
      title = 'ライブハッキング'
      descriptionElement = {LiveHackingDescription}
      startHour = {16}
      color = {colors.security}
    />
  </>
);