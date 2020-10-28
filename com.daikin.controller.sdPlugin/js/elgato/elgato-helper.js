/**
 * A class to handle all elgato events
 */
class elgatoHelper {
  /**
   *
   * @param {string} context 	An opaque value identifying the instance's action you want to modify.
   * @param {json} title A json object
   */
  setTitle(context, title) {
    state.elgato.socket.send(JSON.stringify({
      'event': 'setTitle',
      'context': context,
      'payload': {
        'title': title,
        'target': state.elgato.destinationEnum.HARDWARE_AND_SOFTWARE
      }
    }));
  }

  /**
   *
   * @param {string} context An opaque value identifying the instance's action you want to modify.
   * @param {json} settings A json object which is persistently saved for the action's instance.
   */
  setSettings(context, settings) {
    state.elgato.socket.send(JSON.stringify({
      'event': 'setSettings',
      'context': context,
      'payload': settings
    }));
  }

  /**
   *
   * @param {*} context An opaque value identifying the instance's action you want to modify.
   * @param {*} state 0-based integer
   */
  setState(context, payloadState) {
    try {
      state.elgato.socket.send(JSON.stringify({
        'event': 'setState',
        'context': context,
        'payload': {
            'state': payloadState
        }
      }));
    } catch (err) {
      console.log(err)
    }
  }
}
