class modeCooling {
  // The type of action
  type

  // Context UID
  context

  constructor() {
    this.type = 'daikin.temperature.mode.cooling';
  }

  keyDown(data) {
    state.daikin.storage.settings.mode = '3';
    postNewDaikinSettings()
  }

  willAppear(data) {
    this.context = data.context;
  }
}
