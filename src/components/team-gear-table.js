import React from 'react';
import { Image, Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import SplatoonStatsLink from './splatoon-stats-link';

const TeamHeader = ({ player = { player: {} } }) => (
  <thead>
    <tr>
      <th>
        <FormattedMessage
          id="resultDetails.teamGear.header.player"
          defaultMessage="Player"
        />
      </th>
      <th />
      <th colSpan="2">
        <FormattedMessage
          id="resultDetails.teamGear.header.head"
          defaultMessage="Head"
        />
      </th>
      <th colSpan="2">
        <FormattedMessage
          id="resultDetails.teamGear.header.clothes"
          defaultMessage="Clothes"
        />
      </th>
      <th colSpan="2">
        <FormattedMessage
          id="resultDetails.teamGear.header.shoes"
          defaultMessage="Shoes"
        />
      </th>
    </tr>
  </thead>
);

const GearCell = ({ gear }) => {
  const mainHeight = 30;
  return (
    <td style={{ textAlign: 'center', background: 'darkgrey' }}>
      <Image
        rounded
        src={`https://app.splatoon2.nintendo.net${gear.thumbnail}`}
        style={{ maxHeight: mainHeight }}
        alt={gear.name}
      />
    </td>
  );
};

const AbilityCell = ({ skills }) => {
  const mainHeight = 30;
  const subHeight = 20;
  const background = '#777';

  const shiny = skills.subs.reduce((a, b) => {
    return a && b && b.id === skills.subs[0].id;
  }, true);

  let bgcolor = 'darkgrey';
  if (shiny) {
    bgcolor = skills.subs[0].id === skills.main.id ? 'lightgreen' : 'skyblue';
  }

  return (
    <td style={{ textAlign: 'left', background: bgcolor }}>
      <Image
        roundedCircle
        src={`https://app.splatoon2.nintendo.net${skills.main.image}`}
        style={{ maxHeight: mainHeight, background }}
        alt={skills.main.name}
      />
      {skills.subs.map((skill) =>
        skill ? (
          <Image
            roundedCircle
            src={`https://app.splatoon2.nintendo.net${skill.image}`}
            style={{ maxHeight: subHeight, background }}
            alt={skill.name}
          />
        ) : null
      )}
    </td>
  );
};

const PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>
        <SplatoonStatsLink player={player}>
          {player.player.nickname}
        </SplatoonStatsLink>
      </td>
      <td style={{ textAlign: 'center', background: 'darkgrey' }}>
        <Image
          src={`https://app.splatoon2.nintendo.net${player.player.weapon.thumbnail}`}
          style={{ maxHeight: 30 }}
          alt={player.player.weapon.name}
        />
      </td>
      <GearCell gear={player.player.head} />
      <AbilityCell skills={player.player.head_skills} />
      <GearCell gear={player.player.clothes} />
      <AbilityCell skills={player.player.clothes_skills} />
      <GearCell gear={player.player.shoes} />
      <AbilityCell skills={player.player.shoes_skills} />
    </tr>
  );
};

const TeamStatTable = ({ result, team }) => {
  return (
    <Table className="mb-0" size="sm" striped bordered hover>
      <TeamHeader player={team[0]} />
      <tbody>
        {team.map((player) => (
          <PlayerRow key={player.player.principal_id} player={player} />
        ))}
      </tbody>
    </Table>
  );
};

export default TeamStatTable;
