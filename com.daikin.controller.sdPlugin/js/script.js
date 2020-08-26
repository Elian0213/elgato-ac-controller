let daikinWebsocket = null;
let websocket = null;
let pluginUUID = null;

let currentTemperatureContext = '';
let togglePowerContext = '';

let DestinationEnum = Object.freeze({
  "HARDWARE_AND_SOFTWARE": 0,
  "HARDWARE_ONLY": 1,
  "SOFTWARE_ONLY": 2
})

function connectElgatoStreamDeckSocket(inPort, inPluginUUID, inRegisterEvent, inInfo) {
  websocket = new WebSocket(`ws://127.0.0.1:${inPort}`);
  daikinWebsocket = new WebSocket(`ws://127.0.0.1:6969`)

  pluginUUID = inPluginUUID

  function registerPlugin(inPluginUUID) {
    websocket.send(JSON.stringify({
      "event": inRegisterEvent,
      "uuid": inPluginUUID,
    }));
  }

  websocket.onopen = function() {
    registerPlugin(pluginUUID);
  };

  websocket.onmessage = function(evt) {
    const data = JSON.parse(evt.data);

    switch (data.action) {
      case temperatureIncrease.type:
        temperatureIncrease[data.event](data)
        break
      case temperatureDecrease.type:
        temperatureDecrease[data.event](data)
        break
      case togglePower.type:
        togglePower[data.event](data)
        break
      case currentTemperature.type:
        currentTemperature[data.event](data)
        break
      case modeHeating.type:
        modeHeating[data.event](data)
        break
      case modeCooling.type:
        modeCooling[data.event](data)
        break
      default:
        console.error('Invalid action')
        console.error(data)
    }
  };

  daikinWebsocket.onmessage = (event) => {
    // event.data is a JSON object containing a type and a context value.
    let data = JSON.parse(event.data)

    switch (data.type) {
      case 'sendTemperature':
        if (currentTemperatureContext !== '') {
          helpers.SetTitle(currentTemperatureContext, data.temperature)
        }
        break
      case 'sendPowerStatus':
        console.log(togglePowerContext, data.powerStatus)
        helpers.setState(togglePowerContext, data.powerStatus)
        break
      default:
        console.log(data)
        break
    }
  }

  websocket.onclose = function() {
    // Websocket is closed
  };
};