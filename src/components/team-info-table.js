import React from 'react';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import SplatoonStatsLink from './splatoon-stats-link';

const TeamHeader = ({ player = { player: {} } }) => (
  <thead>
    <tr>
      <th>
        <FormattedMessage
          id="resultDetails.teamInfo.header.player"
          defaultMessage="Player"
        />
      </th>
      <th colSpan="1">
        <FormattedMessage
          id="resultDetails.teamInfo.header.level"
          defaultMessage="Level"
        />
      </th>
      <th colSpan="1">
        <FormattedMessage
          id="resultDetails.teamInfo.header.sort"
          defaultMessage="Sort"
        />
      </th>
      <th colSpan="1">
        <FormattedMessage
          id="resultDetails.teamInfo.header.weaponId"
          defaultMessage="Weapon ID"
        />
      </th>
      <th colSpan="1">
        <FormattedMessage
          id="resultDetails.teamInfo.header.playerId"
          defaultMessage="Player ID"
        />
      </th>
    </tr>
  </thead>
);

const PlayerRow = ({ player }) => {
  return (
    <tr>
      <td>
        <SplatoonStatsLink player={player}>
          {player.player.nickname}
        </SplatoonStatsLink>
      </td>
      <td>{`${player.player.player_rank}${
        player.player.star_rank > 0 ? `★${player.player.star_rank}` : ''
      }`}</td>
      <td>{player.sort_score}</td>
      <td>{player.player.weapon.id}</td>
      <td>{player.player.principal_id}</td>
    </tr>
  );
};

const TeamInfoTable = ({ result, team }) => {
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

export default TeamInfoTable;
