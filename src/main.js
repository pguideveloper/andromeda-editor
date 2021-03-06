const { app, BrowserWindow, process, dialog, Menu, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');

let openFilePath = null; 

app.on('ready', function() {
    let window = new BrowserWindow({
        width: 800, 
        height: 600,
        // frame: false,
        titleBarStyle: "hiddenInset",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            enableRemoteModule: true

        }
    });
    window.loadURL(path.join('file://', __dirname, '../', 'static/index.html'));
    window.webContents.openDevTools()


    const actions = {
        openFile: function() {
            const files = dialog.showOpenDialogSync(window, {
                properties: ['openFile'] 
            });

            if (!files) return; 

            const file = files[0];
            window.webContents.send('fileName', file);
        },
        saveFileAs: function() {
            dialog.showSaveDialog(window, {title: 'Salvar arquivo'}).then(({ filePath }) => {
                if (!filePath) return;
                window.webContents.send('saveFileAs', filePath);
            });
        },
        saveFile: function() {
           window.webContents.send('saveFile', {});
        }
    };
    
    const custom_menu = require('./menu.js')(actions);
    const menu = Menu.buildFromTemplate(custom_menu);
    Menu.setApplicationMenu(menu);
});


app.on('close', function() {
    window = null;
});