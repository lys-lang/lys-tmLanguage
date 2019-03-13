
build-fast:
	cd build && npm start
	cp Lys.tmLanguage vscode-extension/syntaxes/Lys.tmLanguage
	(rm ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/Lys.tmLanguage || true)
	cp Lys.tmLanguage ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User
	# cd tests && npm test

build:
	cd build && npm install
	cd build && npm start
	
	cd tests && npm install
	cd tests && npm start
	# cd tests && npm test