class modeHeating {
  // The type of action
  type

  // Context UID
  context

  constructor() {
    this.type = 'daikin.temperature.mode.heating';
  }

  keyDown(data) {
    state.daikin.storage.settings.mode = '4';
    postNewDaikinSettings()
  }

  willAppear(data) {
    this.context = data.context;
  }
}
