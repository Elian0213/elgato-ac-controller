let currentTemperature = {
    type: "daikin.temperature.current",

    keyDown: (data) => {
        console.log(`current temperature keyDown`)
        daikinWebsocket.send('updateTemperatureDisplay')
    },
    keyUp: (data) => {
        console.log(`current temperature onKeyUp`)
    },
    willAppear: (data) => {
        currentTemperatureContext = data.context;
        daikinWebsocket.send('updateTemperatureDisplay')
        console.log(`current temperature onWillAppear`)
    },
    titleParametersDidChange: (data) => {
        console.log(`current temperaturetitleChange`)
    },
    willDisappear: (data) => {
        console.log(`current temperature willDisappear`)
    }
};
