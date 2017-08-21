DOC = jsdoc
#NODE_BIN = "$(shell dirname $(shell which node))"
NODE_UNIT = ./node_modules/nodeunit/bin/nodeunit
all:

doc:
	$(DOC) index.js lib --readme ./README.md -r

test:
	@$(NODE_UNIT) ./tests
