MixarsDUO = new Controller();


MixarsDUO.init = function(id) {	// called when the MIDI device is opened & set up
	MixarsDUO.id = id;	// Store the ID of this device for later use
	MixarsDUO.shift = false;
}

 
/*MixarsDUO.shiftButton = function () {
	midi.sendShortMsg(0x20, 0x0c, 0x7F);
	
    if(MixarsDUO.shift) {
		MixarsDUO.shift = false;	
	} else {
		MixarsDUO.shift = true;
	}
	
}
 
MixarsDUO.Hotcue1 = function (channel, control, value, status, group) {
	currentdeck = 1;
    if (value === 127) {
        if (MixarsDUO.shift) {
            // do something when this button and the shift button are both pressed
			//engine.setValue("[Channel"+currentdeck+"]","hotcue_1_deactivate", 1);
			engine.setValue("[Channel"+currentdeck+"]","hotcue_2_activate", 1);
        } else {
            // do something else when this button is pressed but the shift button is not pressed
			engine.setValue("[Channel"+currentdeck+"]","hotcue_1_activate", 1);
        }
    }
}*/

MixarsDUO.SelectTrack = function(channel, control, value, status, group) {
	if (value == 0x41) {
		engine.setValue("[Playlist]","SelectNextTrack",1);
	}
	if (value == 0x3F) {
		engine.setValue("[Playlist]","SelectPrevTrack",1);
	}
}

