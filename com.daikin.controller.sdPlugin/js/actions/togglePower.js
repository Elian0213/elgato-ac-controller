class togglePower {
  // The type of action
  type

  // Context UID
  context

  constructor() {
    this.type = 'daikin.power.toggle';
  }

  keyDown(data) {
    let power = state.daikin.storage.settings.pow;

    state.daikin.storage.settings.pow = power === '1' ? '0' : '1';

    state.elgato.helper.setState(actionList['daikin.power.toggle'].context, Number(state.daikin.storage.settings.pow));

    postNewDaikinSettings()
  }

  willAppear(data) {
    this.context = data.context;
  }
}
