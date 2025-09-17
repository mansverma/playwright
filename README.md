
# Playwright E2E Test Automation

A comprehensive end-to-end test automation framework built with [Playwright](https://playwright.dev/), featuring cross-browser testing for web applications.

## 🚀 Features

- **Cross-browser Testing**: Supports Chromium, Firefox, and WebKit browsers
- **Parallel Test Execution**: Run tests in parallel for faster execution
- **Multiple Test Modes**: Headless, headed, UI mode, and debug mode
- **Comprehensive Reporting**: HTML reports with screenshots and videos on failure
- **CI/CD Ready**: JUnit reporting for continuous integration pipelines
- **Real-world Test Scenarios**: Tests for ParaBank demo application and Playwright.dev

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **macOS**, **Linux**, or **Windows**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mansverma/playwright.git
   cd playwright
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npm run install:browsers
   ```

## 🧪 Test Structure

```
e2e/
├── example.spec.js          # Basic Playwright.dev website tests
└── userRegister.spec.js     # ParaBank application tests
```

### Test Scenarios

#### Example Tests (`example.spec.js`)
- ✅ Basic navigation and title verification
- ✅ Link interaction and page navigation

#### ParaBank Tests (`userRegister.spec.js`)
- ✅ Contact form submission with all fields
- ✅ Login validation without credentials

## 🎯 Running Tests

### Basic Test Execution

```bash
# Run all tests (headless mode)
npm test

# Run tests in headed mode (browser visible)
npm run test:headed

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

### Browser-Specific Tests

```bash
# Run tests only on Chromium
npm run test:chrome

# Run tests only on WebKit (Safari)
npm run test:safari

# Run tests on desktop browsers (Chromium + WebKit)
npm run test:desktop
```

### CI/CD Integration

```bash
# Run tests with JUnit reporter (for CI/CD)
npm run test:ci
```

### Reports

```bash
# View last test report
npm run report
```

## ⚙️ Configuration

The project is configured via `playwright.config.js` with the following settings:

### Test Configuration
- **Test Directory**: `./e2e`
- **Parallel Execution**: Enabled
- **Retries**: 2 retries on CI, 0 locally
- **Timeout**: 10s action timeout, 30s navigation timeout

### Browser Projects
- **Chromium**: Desktop Chrome simulation
- **Firefox**: Desktop Firefox simulation  
- **WebKit**: Desktop Safari simulation

### Reporting
- **Local**: HTML reporter with trace viewer
- **CI**: HTML + JUnit + GitHub Actions reporter

### Screenshots & Videos
- **Screenshots**: Captured on test failure
- **Videos**: Recorded on failure (CI only)
- **Traces**: Captured on first retry

## 📊 Test Reports

After running tests, view detailed reports:

```bash
# Open HTML report
npm run report
```

Reports include:
- ✅ Test execution summary
- 📊 Pass/fail statistics by browser
- 🖼️ Screenshots of failures
- 🎥 Video recordings (on CI)
- 🔍 Detailed trace logs


**Happy Testing! 🎭**
