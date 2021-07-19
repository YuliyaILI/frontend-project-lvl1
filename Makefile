install: # установить зависимости
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: # публичность
	npm publish --dry-run


