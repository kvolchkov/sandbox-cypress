# sandbox-cypress

Sandbox-cypress is a demo repository. The main goal is to:
1. Understand Cypress basics
2. Run test in the CI 
3. Get test results as artifacts

## CI Configuration

**Build Steps:**
	1. Npm install: 
		cd .\e2e\
		npm ci
	2. Cypress verify
		cd .\e2e\
		npm run cy:verify
	3. Run CI script
		cd .\e2e\
    npm run ci:teamcity

**Artifact paths:**
    e2e\cypress\videos => e2e\cypress\videos
    e2e\cypress\screenshots => e2e\cypress\screenshots

## Sources

Cypress. Setting up CI: [https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)
Angular web project: [https://github.com/angularexample/angular-9-example-app](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)
