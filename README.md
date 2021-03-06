# sandbox-cypress

## Short overview

Sandbox-cypress is a demo repository. The main goal is to:
1. Understand Cypress basics
2. Run test in the CI 
3. Get test results as artifacts

## CI Configuration

TeamCity is used as a CI.

## TeamCity Build Steps:

**Build Angular project:**
```bash
  npm i
  npm run ng serve
```  
**Npm install:**
```bash
  cd .\e2e\
  npm ci
```  
**Cypress verify**
```bash
  cd .\e2e\
  npm run cy:verify
```
**Run CI script**
```bash
  cd .\e2e\
  npm run ci:teamcity
```
## General Settings 

**Artifact paths:**
```text
  e2e\cypress\videos => e2e\cypress\videos
  e2e\cypress\screenshots => e2e\cypress\screenshots
```
## Sources

**Cypress. Setting up CI:** [https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)

**Angular web project:** [https://github.com/angularexample/angular-9-example-app](https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI)