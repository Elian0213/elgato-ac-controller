/**
 *
 * @param {number} inPort The port that should be used to create the WebSocket
 * @param {string} inPropertyInspectorUUID A unique identifier string to
 * register Property Inspector with Stream Deck software
 * @param {string} inRegisterEvent The event type that should be used to register
 *  the plugin once the WebSocket is opened. For Property Inspector this is
 */
const connectElgatoStreamDeckSocket = (inPort, inPropertyInspectorUUID, inRegisterEvent) => {
  state.elgato.socket = new WebSocket(`ws://127.0.0.1:${inPort}`);

  state.elgato.socket.onopen = function() {
    state.elgato.socket.send(JSON.stringify({
      "event": inRegisterEvent,
      "uuid": inPropertyInspectorUUID,
    }));
  };

  // Set the elgato helper in the state.
  state.elgato.helper = new elgatoHelper();

  // Start app
  initApp()
};
