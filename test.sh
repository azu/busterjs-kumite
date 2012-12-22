buster=$(pwd)/node_modules/.bin/buster
buster test -c getting-started/buster.js
buster test -c config-patterns/buster.js -e node
buster test -c config-patterns/buster.js -e browser
buster test -c strftime/buster.js -e node
buster test -c strftime/buster.js -e browser
buster test buster test -c debug/buster.js -g "Error is True tests" -e browser
NODE_PATH="$(pwd)/reporters/reporter:$NODE_PATH"
buster test -c reporters/buster.js -e browser -r myReporter
sleep 1 # FIX ME
buster test -c test-patterns/buster.js -e browser 