DOC = jsdoc
#NODE_BIN = "$(shell dirname $(shell which node))"
NODE_UNIT = ./node_modules/nodeunit/bin/nodeunit
ESLINT = node_modules/eslint/bin/eslint.js
all:

doc:
	$(DOC) index.js lib --readme ./README.md -r -d docs

test:
	@$(NODE_UNIT) ./tests

check:
	$(ESLINT) index.js lib tests
