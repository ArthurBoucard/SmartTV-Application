const { app, BrowserWindow, BrowserView } = require('electron');

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