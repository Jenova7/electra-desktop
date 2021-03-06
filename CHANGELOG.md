# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2018-09-22

### Added
- Upgrade the Blockchain for the Fork.
- Upgrade Electron to version 3

## [1.1.2] - 2018-06-16

### Added
- Linux Snap package build.

### Fixed
- "Next reward" date (again).

## [1.1.1] - 2018-06-15

### Fixed
- "Next reward" date.

## [1.1.0] - 2018-06-15

### Added
- Linux RPM package build.
- A title bar with minimize, maximize and close buttons for Windows.
- NPM: @electra/electra-styleguide.
- Windows ia32 architecture package build.
- "ALL" button in payment sending card.
- Progress bar in the header while downloading the blockchain.
- Add soft and hard reset buttons in settings.
- Full addresses list in settings.

### Changed
- Migration to electron v2.
- Migration to redux-observable v1 (beta).
- Migration to rxjs v6.
- Migration to webpack v4.
- Migration to typescript v2.9.
- Daemon starting process starting sooner (moved into main process).
- Automatically remove daemon user data when generating a new mnemonic or recovering one.
- In the information popover: "Status", "Your weight" and "Next reward" now outputs "Syncing blockchain..." when the
  wallet in not synchromized.

### Fixed
- Auto-update on MacOS & Windows: Multiple downloads loop.
- Auto-update on MacOS: No auto-restart with auto-installation.
- Auto-update on MacOS: Stucked quitting behavior.
- Login mnemonic recovery.
- Hidden normal quitting error (acting as an install-update-and-quit instead of a simple daemon closing).
- Missing prefixes in (crypto)currencies top shown values.
- Payments page caret down icon.
- Router (react-router) redirection issue.
- Full available account balance sending.
- Balances & ammounts decimals issues (some may be left).
- Settings save & load.
- Pending "Closing daemon...".
- Background daemon RPC calls while quitting.
- Auto-focus on the mnemonic extension input.
- Pointer cursor on loading screen logo.

### Security
- Fixed all Snyk, NSP & npm audit vulnerabilities.

### Removed
- "Estimated Cumulated Interests" in Savings Account (will be re-enabled after the fork).
- npm: @types/bitcoinjs-lib.
- npm: classnames.
- npm: open-browser-webpack-plugin.
