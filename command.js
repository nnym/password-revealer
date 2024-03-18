browser.commands.onCommand.addListener(async command => {
	if (command == "toggle") {
		const tabs = await browser.tabs.query({active: true, currentWindow: true});
		browser.tabs.sendMessage(tabs[0].id, 0);
	}
});

