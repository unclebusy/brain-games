install:
	npm ci

brain-games:
	node src/games/brain-games.js

brain-even:
	node src/games/brain-even.js

brain-calc:
	node src/games/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint

lint-fix:
	npx eslint --fix
