const helpers = {
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
    },
    setState: function(context, state) {
        websocket.send(JSON.stringify({
            "event": "setState",
            "context": context,
            "payload": {
                "state": state
            }
        }))
    }
}