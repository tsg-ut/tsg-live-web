import React from 'react';
import Program, {
  OpeningTalkDescription,
  LiveCodeGolfDescription,
  LiveMarathonDescription,
  LiveGameProgrammingDescription,
  colors,
} from './Program';

export default () => (
  <>
    <Program
      title = 'オープニングトーク'
      descriptionElement = {OpeningTalkDescription}
      time = '10:00〜11:00'
      color = {colors.opening}
    />
    <Program
      title = 'ライブゲームプログラミング 1日目'
      descriptionElement = {LiveGameProgrammingDescription}
      time = '11:30〜13:00'
      color = {colors.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会 1日目'
      descriptionElement = {LiveCodeGolfDescription}
      time = '13:30〜15:00'
      color = {colors.golf}
    />
    <Program
      title = 'ライブ競技プログラミング (マラソン)'
      descriptionElement = {LiveMarathonDescription}
      time = '15:30〜17:15'
      color = {colors.competitiveProgramming}
    />
  </>
);
