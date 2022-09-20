const { app, BrowserWindow, BrowserView } = require('electron');
const { ipcMain } = require('electron')

const createWindow = () => {
	const win = new BrowserWindow({
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#34475a',
			symbolColor: '#FFFFFF',
		},
		width: 800,
		height: 600,
		webPreferences: {
			preload: __dirname + '/preload.js',
		},
	});
	win.loadFile('index.html');

	// const view = new BrowserView()
	// win.setBrowserView(view)
	// view.setBounds({ x: 0, y: 300, width: 800, height: 300 })
	// view.webContents.loadURL('https://www.youtube.com')
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});