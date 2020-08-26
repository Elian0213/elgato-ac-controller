let modeHeating = {
    type: "daikin.temperature.mode.heating",

    keyDown: (data) => {
        console.log(`heating mode keyDown`)
        daikinWebsocket.send("setHeating")
    },
    keyUp: (data) => {
        console.log(`heating mode onKeyUp`)
    },
    willAppear: (data) => {
        console.log(`heating mode onWillAppear`)
    },
    titleParametersDidChange: (data) => {
        console.log(`heating mode titleChange`)
    },
    willDisappear: (data) => {
        console.log(`heating mode willDisappear`)
    }
};