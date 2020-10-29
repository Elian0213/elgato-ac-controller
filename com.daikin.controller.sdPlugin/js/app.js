const listenEvents = [
  'keyDown',
  'willAppear',
  'systemDidWakeUp'
];

const actionList = {
  'daikin.temperature.display': new temperatureDisplay(),
  'daikin.temperature.mode.heating': new modeHeating(),
  'daikin.temperature.mode.cooling': new modeCooling(),
  'daikin.temperature.increase': new temperatureIncrease(),
  'daikin.temperature.decrease': new temperatureDecrease(),
  'daikin.power.toggle': new togglePower(),
};

// Start that boy
const initApp = async () => {
  /**
   *
   * @param {string} event
   */
  state.elgato.socket.onmessage = function(event) {
    const data = JSON.parse(event.data);

    if (data.event === 'deviceDidConnect') {
      console.log(data)
      return
    }

    // Not intrested if I'm not handling the event set in listenEvents
    if (!listenEvents.includes(data.event)) return;

    try {
      actionList[data.action][data.event](data)
      // action[data.event](data);
    } catch {
      console.error(data)
    }
  };

  // Update every 20 seconds
  setInterval(() => {
    updateDaikinForce();
  }, (20 * 1000));
}
