import React from 'react';
import Program, {
  OpeningTalkDescription,
  LiveCodeGolfDescription,
  LiveMarathonDescription,
  Color
} from './Program';
import Member from '../Member';

export default () => (
  <>
    <Program
      title = 'オープニングトーク'
      descriptionElement = {OpeningTalkDescription}
      startHour = {12}
      color = {Color.opening}
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