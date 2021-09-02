const { app, BrowserWindow, process } = require('electron');
const path = require('path');

app.on('ready', function() {
    let window = new BrowserWindow({
        width: 800, 
        height: 600,
        titleBarStyle: "hiddenInset",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            devTools: true,
        }
    });
    window.removeMenu();
    window.loadURL(path.join('file://', __dirname, 'static/index.html'));
});

app.on('close', function() {
    window = null;
});