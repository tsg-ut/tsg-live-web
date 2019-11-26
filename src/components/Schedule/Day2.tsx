import React from 'react';
import Program, {
  LiveGameProgrammingDescription,
  LiveAlgorithmDescription,
  LiveHackingDescription,
  Color
} from './Program';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング'
      descriptionElement = {LiveGameProgrammingDescription}
      startHour = {12}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブ競技プログラミング (アルゴリズム)'
      descriptionElement = {LiveAlgorithmDescription}
      startHour = {14}
      color = {Color.competitiveProgramming}
    />
    <Program
      title = 'ライブハッキング'
      descriptionElement = {LiveHackingDescription}
      startHour = {16}
      color = {Color.hacking}
    />
  </>
);