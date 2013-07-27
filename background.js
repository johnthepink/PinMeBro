function pinIt(){
	chrome.tabs.getSelected(function(tab){
		if(tab.pinned == true)
			chrome.tabs.update(tab.id,{pinned: false});
		else
			chrome.tabs.update(tab.id,{pinned: true});
	});
}

chrome.commands.onCommand.addListener(function(command) {
	if(command == "pinmebro")
	  pinIt();
});