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
      startHour = {10}
      color = {colors.opening}
    />
    <Program
      title = 'ライブゲームプログラミング 1日目'
      descriptionElement = {LiveGameProgrammingDescription}
      startHour = {12}
      color = {colors.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会 1日目'
      descriptionElement = {LiveCodeGolfDescription}
      startHour = {14}
      color = {colors.golf}
    />
    <Program
      title = 'ライブ競技プログラミング (マラソン)'
      descriptionElement = {LiveMarathonDescription}
      startHour = {16}
      color = {colors.competitiveProgramming}
    />
  </>
);