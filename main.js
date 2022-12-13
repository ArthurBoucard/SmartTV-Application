const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');

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

function showYoutubeWindow() {
    const view = new BrowserView()
	window.setBrowserView(view)
	view.setBounds({ x: 0, y: 32, width: window.getSize()[0], height: window.getSize()[1] - 32 })
	view.webContents.loadURL('https://www.youtube.com')
};

function showNetflixWindow() {
    const view = new BrowserView()
	window.setBrowserView(view)
	view.setBounds({ x: 0, y: 32, width: window.getSize()[0], height: window.getSize()[1] - 32 })
	view.webContents.loadURL('https://www.netflix.com')
};

function showDisneyWindow() {
    const view = new BrowserView()
	window.setBrowserView(view)
	view.setBounds({ x: 0, y: 32, width: window.getSize()[0], height: window.getSize()[1] - 32 })
	view.webContents.loadURL('https://www.disneyplus.com')
};

function showAmazonPrimeWindow() {
    const view = new BrowserView()
	window.setBrowserView(view)
	view.setBounds({ x: 0, y: 32, width: window.getSize()[0], height: window.getSize()[1] - 32 })
	view.webContents.loadURL('https://www.primevideo.com')
};

// -------- IPC --------

ipcMain.on('message:main', (event, session) => {
    showMainWindow();
})

ipcMain.on('message:youtube', (event) => {
    showYoutubeWindow();
})

ipcMain.on('message:netflix', (event) => {
    showNetflixWindow();
})

ipcMain.on('message:disney', (event) => {
    showDisneyWindow();
})

ipcMain.on('message:amazon_prime', (event) => {
    showAmazonPrimeWindow();
})