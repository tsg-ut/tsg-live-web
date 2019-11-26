import React from 'react';
import Program, {
  LiveGameProgramming2Description,
  LiveCTFDescription,
  Color
} from './Program';

export default () => (
  <>
    <Program
      title = 'ライブゲームプログラミング 2'
      descriptionElement = {LiveGameProgramming2Description}
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