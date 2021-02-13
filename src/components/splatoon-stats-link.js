import React from 'react';
const { shell } = require('electron').remote;
const { openExternal } = shell;

const SplatoonStatsLink = ({ children, player }) => {
  return (
    <button
      className="button-as-link"
      onClick={() =>
        openExternal(
          `https://splatoon-stats.yuki.games/players/${player.player.principal_id}`
        )
      }
    >
      {children}
    </button>
  );
};

export default SplatoonStatsLink;
