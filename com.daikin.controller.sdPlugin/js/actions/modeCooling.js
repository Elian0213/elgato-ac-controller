let modeCooling = {
    type: "daikin.temperature.mode.cooling",

    keyDown: (data) => {
        console.log(`cooling mode keyDown`)
        daikinWebsocket.send("setCooling")
    },
    keyUp: (data) => {
        console.log(`cooling mode onKeyUp`)
    },
    willAppear: (data) => {
        console.log(`cooling mode onWillAppear`)
    },
    titleParametersDidChange: (data) => {
        console.log(`cooling mode titleChange`)
    },
    willDisappear: (data) => {
        console.log(`cooling mode willDisappear`)
    }
};