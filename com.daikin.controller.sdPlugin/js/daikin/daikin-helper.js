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

  if (actionList['daikin.temperature.current'].context != null) {
    updateDisplayTemps(actionList['daikin.temperature.current'].context)
  }
}

/**
 * Update temp display
 * @param {string} context Context UUID of the Display Temp
 */
const updateDisplayTemps = (context) => {
  const data = state.daikin.storage.sensor;

  let formatText = ` ${data.htemp} °C \n ${data.otemp} °C \n ${state.daikin.storage.settings.stemp} °C`;

  state.elgato.helper.setTitle(context, formatText);
  state.elgato.helper.setState(actionList['daikin.power.toggle'].context, Number(state.daikin.storage.settings.pow));
}
