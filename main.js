const { BrowserWindow, app } = require("electron")
require("electron-reloader")(module);
let mainWindow;

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1100,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
        
    })
    mainWindow.loadFile('index.html')
    mainWindow.openDevTools();
}
app.whenReady().then(createWindow);