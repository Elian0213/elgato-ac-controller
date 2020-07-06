let counterAction = {
  type: "com.elgato.counter.action",

  onKeyDown: function(context, settings, coordinates, userDesiredState) {
    timer = setTimeout(function() {
      let updatedSettings = {};
      updatedSettings["keyPressCounter"] = -1;

      counterAction.SetSettings(context, updatedSettings);
      counterAction.SetTitle(context, 0);
    }, 1500);
  },

  onKeyUp: function(context, settings, coordinates, userDesiredState) {
    clearTimeout(timer);
    let keyPressCounter = 0;

    if (settings != null && settings.hasOwnProperty('keyPressCounter')) {
      keyPressCounter = settings["keyPressCounter"];
    }

    keyPressCounter += 5;

    this.SetSettings(context, {
      keyPressCounter: keyPressCounter
    });

    this.SetTitle(context, keyPressCounter);
  },

  onWillAppear: (data) => {
    const settings = data.payload;
    console.log(settings)

    // if (settings != null && settings.hasOwnProperty('keyPressCounter')) {
    //   keyPressCounter = settings["keyPressCounter"];
    // }
    //
    // this.SetTitle(context, keyPressCounter)
  },
  SetTitle: function(context, title) {
    websocket.send(JSON.stringify({
      "event": "setTitle",
      "context": context,
      "payload": {
        "title": title,
        "target": DestinationEnum.HARDWARE_AND_SOFTWARE
      }
    }));
  },
  SetSettings: function(context, settings) {
    websocket.send(JSON.stringify({
      "event": "setSettings",
      "context": context,
      "payload": settings
    }));
  }
};