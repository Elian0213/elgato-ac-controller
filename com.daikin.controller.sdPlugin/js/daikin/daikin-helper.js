/**
 * Update the state of AC settings in bulk.
 * @param {json} data
 */
const updateDaikinSettings = (data) => {
  state.daikin.storage.settings = {
    pow: data.pow,
    stemp: data.stemp,
    shum: data.shum,
    mode: data.mode,
    f_rate: data.f_rate,
    f_dir: data.f_dir,
    alert: data.alert,
  };
}

/**
 * Update the state of AC sensor in bulk.
 * @param {json} data
 */
const updateDaikinSensor = (data) => {
  state.daikin.storage.sensor = {
    htemp: data.htemp,
    otemp: data.otemp,
  };

  if (actionList['daikin.temperature.display'].context != null) {
    updateDisplayTemps(actionList['daikin.temperature.display'].context)
  }
}

/**
 * Update temp display
 * @param {string} context Context UUID of the Display Temp
 */
const updateDisplayTemps = (context) => {
  const data = state.daikin.storage.sensor;

  let formatText = `🏠 ${Number(data.htemp)}° \n ${Number(state.daikin.storage.settings.stemp)}° \n ☁ ${Number(data.otemp)}°`;

  state.elgato.helper.setTitle(context, formatText);
  state.elgato.helper.setState(actionList['daikin.power.toggle'].context, Number(state.daikin.storage.settings.pow));
}
