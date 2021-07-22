install: # установить зависимости
	npm ci

brain-games: # запуск приветствия
	node bin/brain-games.js

brain-even: # запуск игры even
	node bin/brain-even.js

publish: # публичность
	npm publish --dry-run

lint: # проверка линтером
	npx eslint .


