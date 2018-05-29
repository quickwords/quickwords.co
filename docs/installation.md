# Installation
## MacOS
Download the [latest release](https://github.com/quickwords/quickwords/releases/latest), unzip and drag `Quickwords.app` to your `Applications` folder.

### MacOS doesn't allow me to start the app
On MacOS Sierra and newer, if you try to open an app that is not signed by an identified developer you get a warning dialog. To override your security settings and open the app:

In the Finder, locate the app you want to open.
Control-click the app icon, then choose Open from the shortcut menu.

More information: [PH25088](https://support.apple.com/kb/PH25088)

P.S. If you want to help us get rid of this problem and/or would like Quickwords to auto-update you can go to our [Patreon page](https://www.patreon.com/quickwords) and see the details.

## Linux & Windows
Linux and Windows versions of the app are coming soon. In the meantime all PRs are very welcome.

## Manual build *
```bash
git clone https://github.com/quickwords/quickwords.git
cd quickwords
npm i
npm run dev # for a watcher, or npm run prod for one-time build
npm run start # in seperate window

npm run test # Run tests
npm run lint # Run linter
```
