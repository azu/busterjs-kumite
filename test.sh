run_test="./node_modules/.bin/buster-test"
$run_test -c getting-started/buster.js
$run_test -c config-patterns/buster.js -e node
$run_test -c config-patterns/buster.js -e browser
$run_test -c strftime/buster.js -e node
$run_test -c strftime/buster.js -e browser
NODE_PATH="./reporters/reporter" $run_test -c reporters/buster.js -e browser -r myReporter
sleep 1 # FIX ME
$run_test -c test-patterns/buster.js -e browser
$run_test -c debug/buster.js -g "Error is True tests" -e browser
