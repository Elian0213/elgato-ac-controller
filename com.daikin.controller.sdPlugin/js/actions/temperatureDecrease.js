class temperatureDecrease {
  // The type of action
  type

  // Context UID
  context

  constructor() {
    this.type = 'daikin.temperature.decrease';
  }

  keyDown(data) {
    state.daikin.storage.settings.stemp = (Number(state.daikin.storage.settings.stemp) - 1).toString();

    postNewDaikinSettings()
  }

  willAppear(data) {
    this.context = data.context;
  }
}
