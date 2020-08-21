import React from 'react';
import Program, {
  OpeningTalkDescription,
  LiveCodeGolfDescription,
  LiveMarathonDescription,
  LiveGameProgrammingDescription,
  Color,
} from './Program';

export default () => (
  <>
    <Program
      title = 'オープニングトーク'
      descriptionElement = {OpeningTalkDescription}
      startHour = {10}
      color = {Color.opening}
    />
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgrammingDescription}
      startHour = {12}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブコードゴルフ大会'
      descriptionElement = {LiveCodeGolfDescription}
      startHour = {14}
      color = {Color.golf}
    />
    <Program
      title = 'ライブ競技プログラミング (マラソン)'
      descriptionElement = {LiveMarathonDescription}
      startHour = {16}
      color = {Color.competitiveProgramming}
    />
  </>
);