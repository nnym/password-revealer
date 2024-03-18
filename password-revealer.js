const root = document.documentElement;
const revealed = new Set;
const icons = new Map;

let toggled;

browser.runtime.onMessage.addListener(() => {
	if (toggled) {
		for (const pw of toggled) pw.type = "password";
		toggled = undefined;
	} else for (const pw of toggled = document.querySelectorAll("input[type=password]")) pw.type = "text";
});

root.addEventListener("mouseover", ({target: t}) => {
	if (t instanceof HTMLInputElement && t.type == "password") {
		revealed.add(t);
		t.type = "text";
	}
});

root.addEventListener("mouseout", ({target: t}) => {
	if (t instanceof HTMLInputElement && revealed.has(t)) {
		t.type = "password";
		revealed.delete(t);
	}
});
