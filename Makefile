test:
	@node node_modules/lab/bin/lab
test-cov:
	@node node_modules/lab/bin/lab -t 75
test-cov-html:
	@node node_modules/lab/bin/lab -r html -o test/coverage.html

.PHONY: test test-cov test-cov-html