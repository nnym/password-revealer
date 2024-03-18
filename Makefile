name = "password-revealer"

$(name).xpi:
	@7z a $(name).xpi manifest.json *.js
