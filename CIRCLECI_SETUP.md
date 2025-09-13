# CircleCI Integration Setup

This document provides step-by-step instructions to integrate your Playwright repository with CircleCI.

## Prerequisites

1. Your code must be in a Git repository (GitHub, GitLab, or Bitbucket)
2. You need a CircleCI account (free tier available)

## Setup Steps

### 1. Connect Repository to CircleCI

1. Go to [CircleCI](https://circleci.com/) and sign in with your GitHub/GitLab/Bitbucket account
2. Click "Set Up Project" next to your repository
3. Choose "Fastest: Use existing config" (since we already have `.circleci/config.yml`)
4. Click "Set Up Project"

### 2. Environment Variables (Optional)

If you need to set environment variables:

1. Go to Project Settings → Environment Variables
2. Add any required variables:
   - `BASE_URL` - Override the default test URL if needed
   - Any API keys or credentials your tests require

### 3. Commit and Push Changes

Make sure to commit and push all the new files:

```bash
git add .
git commit -m "Add CircleCI configuration for Playwright tests"
git push origin main
```

### 4. Verify Setup

1. After pushing, CircleCI should automatically trigger a build
2. Go to your project dashboard on CircleCI to monitor the build
3. Check the "Artifacts" tab after the build completes to view test reports

## CircleCI Configuration Overview

Our setup includes:

### Workflows

1. **Main Branch Workflow**: Runs all tests when code is pushed to main/master
2. **Feature Branch Workflow**: Runs desktop and mobile tests in parallel for faster feedback
3. **Nightly Tests**: Scheduled to run daily at 2 AM UTC

### Jobs

- `test-all`: Runs complete test suite on all browsers/devices
- `test-desktop`: Runs only desktop browser tests (Chrome, Safari)
- `test-mobile`: Runs only mobile device tests (Mobile Chrome, Mobile Safari)

### Artifacts Storage

CircleCI automatically stores:
- HTML test reports
- Screenshots of failed tests
- Test result XML files
- Video recordings (on failures in CI)

### Available npm Scripts

- `npm run test:ci` - Run tests with JUnit reporter for CI
- `npm run test:desktop` - Run only desktop tests
- `npm run test:mobile` - Run only mobile tests
- `npm run test:chrome` - Run Chrome tests (desktop + mobile)
- `npm run test:safari` - Run Safari tests (desktop + mobile)

## Troubleshooting

### Common Issues

1. **Tests failing in CI but passing locally**
   - Check if tests are timing out (increased timeouts in config)
   - Ensure tests are not dependent on local environment

2. **Browser installation issues**
   - We're using the official Playwright Docker image which includes pre-installed browsers
   - No additional browser installation needed

3. **Artifacts not appearing**
   - Artifacts are only generated if tests run (even if they fail)
   - Check the `store_artifacts` steps in the CircleCI config

### Support

- CircleCI Documentation: https://circleci.com/docs/
- Playwright CI Documentation: https://playwright.dev/docs/ci
- CircleCI Community: https://discuss.circleci.com/

## Next Steps

1. **Status Badges**: Add CircleCI status badge to your README
2. **Slack/Email Notifications**: Configure notifications in CircleCI project settings
3. **Parallel Testing**: Adjust parallelism settings based on your CircleCI plan
4. **Test Splitting**: Consider splitting tests across multiple containers for larger suites
