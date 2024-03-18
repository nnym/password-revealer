name = "password-revealer"

$(name).xpi:
	@7z a $(name).zip manifest.json *.js
