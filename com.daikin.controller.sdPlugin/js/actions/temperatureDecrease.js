let temperatureDecrease = {
    type: "daikin.temperature.decrease",

    keyDown: (data) => {
        daikinWebsocket.send("decreaseTemperature")
    },
    keyUp: (data) => {
        console.log(`temperature decrease onKeyUp`)
    },
    willAppear: (data) => {
        console.log(`temperature decrease onWilLAppear`)
    },
    titleParametersDidChange: (data) => {
        console.log(`temperature decrease titleChange`)
    },
    willDisappear: (data) => {
        console.log(`temperature decrease willDisappear`)
    }
};