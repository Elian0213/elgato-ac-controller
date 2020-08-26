let temperatureIncrease = {
    type: "daikin.temperature.increase",

    keyDown: (data) => {
        daikinWebsocket.send("increaseTemperature")
    },
    keyUp: (data) => {
        console.log(`temperature increase onKeyUp`)
    },
    willAppear: (data) => {
        console.log(`temperature increase onWillAppear`)
    },
    titleParametersDidChange: (data) => {
        console.log(`temperature increase titleChange`)
    },
    willDisappear: (data) => {
        console.log(`temperature increase willDisappear`)
    }
};