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
      title = 'ライブゲームプログラミング 2'
      descriptionElement = {LiveGameProgrammingDescription}
      startHour = {12}
      color = {Color.gameProgramming}
    />
    <Program
      title = 'ライブCTF'
      descriptionElement = {LiveCTFDescription}
      startHour = {14}
      color = {Color.golf}
    />
  </>
);