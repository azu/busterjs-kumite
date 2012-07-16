buster-test = ./node_modules/.bin/buster-test
test:

	$(buster-test) -c getting-started/buster.js
	$(buster-test) -c config-patterns/buster.js -e node
	$(buster-test) -c config-patterns/buster.js -e browser
	$(buster-test) -c strftime/buster.js -e node
	$(buster-test) -c strftime/buster.js -e browser
	NODE_PATH=reporters/reporter  $(buster-test) -c reporters/buster.js -e browser -r myReporter
