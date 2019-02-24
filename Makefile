
build-fast:
	cd build && npm start
	(rm ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/Lys.tmLanguage || true)
	cp Lys.tmLanguage ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User
	# cd tests && npm test

build:
	cd build && npm install
	cd build && npm list
	
	cd tests && npm install
	cd tests && npm list
	# cd tests && npm test