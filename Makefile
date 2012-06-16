buster-test = @./node_modules/.bin/buster-test
test:
	$(buster-test) -c getting-started/buster.js
	$(buster-test) -c config-patterns/buster.js -e node
	$(buster-test) -c config-patterns/buster.js -e browser