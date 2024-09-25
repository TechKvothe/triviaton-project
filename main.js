// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('node:path');

// this should be placed at top of main.js to handle setup events quickly

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/win/icon.ico'),
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true
    }
  });

  const pointsWindow = new BrowserWindow({
    parent: mainWindow,
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/win/icon.ico'),
    show: false,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true
    }
  });

  mainWindow.maximize();
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');
  
  pointsWindow.setClosable(false);
  pointsWindow.setMenuBarVisibility(false);
  pointsWindow.loadFile('points.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  pointsWindow.once('ready-to-show', () => {
    pointsWindow.show()
  });
  
  mainWindow.once('closed', () => {
    app.quit();
  });


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.