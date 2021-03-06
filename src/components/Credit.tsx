import React from 'react';
import { Member, roles } from './member';

interface MemberListProps {
  program: string;
  role: string;
}

const MemberList = (props: MemberListProps) => {
  const { program, role } = props;
  return (
    <ul>
      {roles[program][role].map((member: Member) =>
        <li key={`${program}-${role}-${member}`}>{member}</li>
      )}
    </ul>
  )
};

export default () => (
  <>
    <h2 className="major live-red">TSG LIVE! 6 サポーターズ</h2>
    {Object.keys(roles).map(program => (
      Object.keys(roles[program]).map(role => (
        <div key={role}>
          <h3>{program} {role}</h3>
          <MemberList program={program} role={role} />
        </div>
      ))
    ))}
  </>
);
