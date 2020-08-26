# Elgato AC controller (For Daikin Airco's)
![Streamdeck](https://i.imgur.com/o2u1aiR.png)
This is a custom elgato plugin that I decided to make because of how much more convenient pressing a button is than grabbing my AC remote and going from there

It needs this to work [daikin-controller](https://github.com/Elian0213/daikin-controller)

# Configuration
Take a look at ``helper/Daikin.js`` to adjust the POST and GET requests being made to fit your Daikin AC.
Because of limitations I didn't make a fully optional configuration file.

# Setup
Run the ``release.bat`` and then run the Egato file created ``Release/com.elgato.[name].DeckPlugin`` 