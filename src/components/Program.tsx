import React, { ReactElement } from 'react';
import { Member } from './enums';

interface ProgramProps {
  title: string;
  descriptionElement: ReactElement;
  members: {[key: string]: Member[]};
  startHour: number;
  color: string;
}

const Program = (props: ProgramProps) => {
  const colorTitle = (title: string, color: string) => (
    props.title.includes('ライブ')
        ? <>
            <span className={`live-${props.color}`}>ライブ</span>
            {props.title.replace('ライブ', '')}
          </>
        : <span className={`live-${props.color}`}>{props.title}</span>
  );

  const colorMemberKey = (key: string) => {
    switch (key) {
      case '駒場チーム':
        return <span className='live-blue'>駒場チーム</span>;
      case '本郷チーム':
        return <span className='live-red'>本郷チーム</span>;
      default:
        return key;
    }
  }

  return (
    <div>
      <h4>
        <small>{props.startHour}:00〜</small>
        <br />
        {props.title.includes('ライブ')
          ? <>
              <span className={`live-${props.color}`}>ライブ</span>
              {props.title.replace('ライブ', '')}
            </>
          : <span className={`live-${props.color}`}>{props.title}</span>
        }
      </h4>
      <dl>
        <>
          {Object.keys(props.members).map(key => (
            <>
              <dt>{colorMemberKey(key)}</dt>
              <dd>{props.members[key].join(', ')}</dd>
            </>
          ))}
        </>
      </dl>
      {props.descriptionElement}
    </div>
  )
};

export default Program;