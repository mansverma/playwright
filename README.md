
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

## 🌐 Target Applications

### ParaBank Demo
- **URL**: https://parabank.parasoft.com/parabank/index.htm
- **Tests**: Contact form, login validation
- **Features**: Form submission, error handling

### Playwright.dev
- **URL**: https://playwright.dev/
- **Tests**: Basic navigation, link interactions
- **Features**: Documentation site testing

## 🚧 Development

### Adding New Tests

1. Create a new test file in the `e2e/` directory:
   ```javascript
   const { test, expect } = require('@playwright/test');

   test('your test name', async ({ page }) => {
     await page.goto('your-url');
     // Your test steps
     await expect(page).toHaveTitle(/Expected Title/);
   });
   ```

2. Run your specific test:
   ```bash
   npx playwright test your-test-file.spec.js
   ```

### Debugging Tests

```bash
# Debug mode with browser DevTools
npm run test:debug

# Run specific test in debug mode
npx playwright test --debug your-test.spec.js

# Generate and view trace
npx playwright test --trace on
```

### Best Practices

1. **Use data-testid attributes** for reliable element selection
2. **Wait for elements** using `waitFor` methods or `expect` assertions
3. **Generate unique test data** to avoid conflicts
4. **Use Page Object Model** for larger applications
5. **Keep tests independent** and idempotent

## 🔧 Troubleshooting

### Common Issues

**Browser executables not found**
```bash
npm run install:browsers
```

**Tests failing intermittently**
- Increase timeouts in `playwright.config.js`
- Add explicit waits for dynamic content
- Check for race conditions

**Permission issues on macOS**
```bash
# If browsers fail to install
sudo npm run install:browsers
```

### Environment Variables

```bash
# Run tests against different environment
BASE_URL=https://your-app.com npm test

# Enable CI mode
CI=true npm test
```

## 📈 CI/CD Integration

### GitHub Actions Example

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm install
    - run: npm run install:browsers
    - run: npm run test:ci
    - uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
```

### Jenkins Pipeline

```groovy
pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh 'npm run install:browsers'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:ci'
            }
        }
    }
    post {
        always {
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}
```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
- [Test Generator](https://playwright.dev/docs/codegen)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Run tests: `npm test`
5. Commit changes: `git commit -m "Add your feature"`
6. Push to branch: `git push origin feature/your-feature`
7. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [https://github.com/mansverma/playwright](https://github.com/mansverma/playwright)
- **Issues**: [https://github.com/mansverma/playwright/issues](https://github.com/mansverma/playwright/issues)
- **Playwright Official**: [https://playwright.dev](https://playwright.dev)

---

**Happy Testing! 🎭**
