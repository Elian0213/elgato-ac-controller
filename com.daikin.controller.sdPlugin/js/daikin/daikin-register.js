state.daikin.socket = new WebSocket(config.DaikinWebsocketIP);

const updateDaikinForce = () => {
  state.daikin.socket.send(JSON.stringify({ name: 'getInfo' }));
  state.daikin.socket.send(JSON.stringify({ name: 'getSensorInfo' }));
}

state.daikin.socket.onopen = updateDaikinForce;

// Receive data
state.daikin.socket.onmessage = (data) => {
  const response = JSON.parse(data.data);

  switch (response.name) {
  case 'getInfo':
      // Update global AC info
      updateDaikinSettings(response.data);
    break;
  case 'getSensorInfo':
      updateDaikinSensor(response.data);
    break
  default:
    console.log(response);
    break;
  }
};

const postNewDaikinSettings = () => {
  state.elgato.helper.setState(actionList['daikin.power.toggle'].context, Number(state.daikin.storage.settings.pow));
  state.daikin.socket.send(JSON.stringify({
    name: 'setData',
    value: state.daikin.storage.settings,
  }));

  updateDisplayTemps(actionList['daikin.temperature.current'].context)
}
