const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const config = require('./config');

let window;

const createWindow = () => {
	window = new BrowserWindow({
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#34475a',
			symbolColor: '#FFFFFF',
			height: 32,
		},
		width: 800,
		height: 600,
		webPreferences: {
			sandbox: false,
			preload: __dirname + '/preload.js',
		},
	});
	window.maximize()
	return window
};

app.whenReady().then(() => {
	window = createWindow();
	showMainWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			window = createWindow();
			showMainWindow();
		}
	});

	// Testing purpose
	window.webContents.openDevTools()
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// -------- App Windows --------

function showMainWindow() {
	window.setBrowserView(null)
	BrowserView.destroy

    window.loadFile('index.html').then(() => {
		window.show();
	})
};

function showCustomBrowserWindow(url) {
    const view = new BrowserView()
	window.setBrowserView(view)
	view.setBounds({ x: 0, y: 32, width: window.getSize()[0], height: window.getSize()[1] - 32 })
	view.webContents.loadURL(url)
};

// -------- IPC --------

ipcMain.on('message:main', (event, session) => {
    showMainWindow();
})

ipcMain.on('message:youtube', (event) => {
	showCustomBrowserWindow(config.config.app['youtube'].url);
})

ipcMain.on('message:netflix', (event) => {
	showCustomBrowserWindow(config.config.app['netflix'].url);
})

ipcMain.on('message:disney', (event) => {
	showCustomBrowserWindow(config.config.app['disney'].url);
})

ipcMain.on('message:amazon_prime', (event) => {
	showCustomBrowserWindow(config.config.app['amazon_prime'].url);
})

// Possible scalable solution

// for (key in config.config.app) {
//     if (config.config.app[key].status) {
// 		ipcMain.on('message:' + key, (event) => {
// 			showCustomBrowserWindow(config.config.app[key].url);
// 		})
//     }
// }
