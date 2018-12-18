const types = {
  UPDATE_PLAYER: 'UPDATE_PLAYER',
  UPDATE_ZONE: 'UPDATE_ZONE'
};

const updatePlayer = (playerName, playerData) => (dispatch) => {
  dispatch({
    type: types.UPDATE_PLAYER,
    payload: {
      playerName: playerName,
      playerData: playerData
    },
  });
};

const updateZone = (playerName, zoneName, zoneData) => (dispatch) => {
  dispatch({
    type: types.UPDATE_ZONE,
    payload: {
      playerName: playerName,
      zoneName: zoneName,
      zoneData: zoneData
    },
  });
};

export default {
  types,
  updatePlayer,
  updateZone
};