let togglePower = {
    type: "daikin.power.toggle",

    keyDown: (data) => {
        daikinWebsocket.send("togglePower")
    },
    keyUp: (data) => {
        console.log(`togglePower onKeyUp`)
    },
    willAppear: (data) => {
        console.log(`togglePower onWillAppear`)
        togglePowerContext = data.context;
        daikinWebsocket.send('updatePowerStatus')
    },
    titleParametersDidChange: (data) => {
        console.log(`togglePower titleChange`)
    },
    willDisappear: (data) => {
        console.log(`togglePower willDisappear`)
    }
};