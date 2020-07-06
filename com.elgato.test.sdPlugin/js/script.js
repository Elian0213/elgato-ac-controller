let websocket = null;
let pluginUUID = null;

let DestinationEnum = Object.freeze({
  "HARDWARE_AND_SOFTWARE": 0,
  "HARDWARE_ONLY": 1,
  "SOFTWARE_ONLY": 2
})

let timer;

function connectElgatoStreamDeckSocket(inPort, inPluginUUID, inRegisterEvent, inInfo) {
  pluginUUID = inPluginUUID

  // Open the web socket
  websocket = new WebSocket("ws://127.0.0.1:" + inPort);

  function registerPlugin(inPluginUUID) {
    websocket.send(JSON.stringify({
      "event": inRegisterEvent,
      "uuid": inPluginUUID
    }));
  };

  websocket.onopen = function() {
    // WebSocket is connected, send message
    registerPlugin(pluginUUID);
  };

  websocket.onmessage = function(evt) {
    // Received message from Stream Deck
    const data = JSON.parse(evt.data);
    console.log(data)

    switch (data.event) {
      case 'keyDown':
        counterAction.onKeyDown(data);
        break
      case 'keyUp':
        counterAction.onKeyUp(data);
        break
      case 'willAppear':
        counterAction.onWillAppear(data);
        break
    }
  };

  websocket.onclose = function() {
    // Websocket is closed
  };
};