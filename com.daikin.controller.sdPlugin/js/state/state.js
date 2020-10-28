/**
 *  State of the AC
 */
const state = {
  elgato: {
    socket: null,
    helper: null,
    destinationEnum: Object.freeze({
      "HARDWARE_AND_SOFTWARE": 0,
      "HARDWARE_ONLY": 1,
      "SOFTWARE_ONLY": 2
    })
  },
  daikin: {
    socket: null,
    storage: {
      settings: {
        pow: 0,
        stemp: 0,
        shum: 0,
        mode: 0,
        f_rate: 0,
        f_dir: 0,
        alert: 0,
      },
      sensor: {
        htemp: 0,
        otemp: 0,
      }
    }
  }
}
