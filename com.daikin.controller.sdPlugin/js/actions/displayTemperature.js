class temperatureDisplay {
  // The type of action
  type

  // Context UID
  context

  constructor() {
    this.type = 'daikin.temperature.display';
  }

  keyDown(data) {
    updateDaikinForce();
  }

  willAppear(data) {
    this.context = data.context;
  }
}
