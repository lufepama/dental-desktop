const { app, BrowserWindow, Menu, MenuItem, ipcMain, dialog, ipcRenderer } = require('electron')
const onRightClickAgenda = require('./actions/agenda/RightClickAgenda.js')

const path = require('path')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()

const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    // { role: 'editMenu' }
    {
        label: 'Editar',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                        { role: 'startSpeaking' },
                        { role: 'stopSpeaking' }
                    ]
                }
            ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ])
        ]
    },
    // { role: 'viewMenu' }
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
            ] : [
                { role: 'close' }
            ])
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://electronjs.org')
                }
            }
        ]
    }
]

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            // The preload file where we will perform our app communication
            preload: isDev
                ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
                : path.join(app.getAppPath(), './build/preload.js'), // Loading it from the build folder for production
            worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
            contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
        },
    })

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000/'
            : `file://${path.join(__dirname, '../build/index.html')}`
    )

    if (isDev) {
        mainWindow.webContents.on('did-frame-finish-load', () => {
            mainWindow.webContents.openDevTools({ mode: 'detach' });
        });
    }


    ipcMain.on('openPatientWindow', (events, args) => {
        console.log('open patientasd')
        const urlData = args.url
        const titleData = args.title

        const win = new BrowserWindow({
            parent: mainWindow,
            height: 650,
            width: 900,
            resizable: false,
            title: titleData,
            modal: true,
            show: true,
            webPreferences: {
                preload: isDev
                    ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
                    : path.join(app.getAppPath(), './build/preload.js'), // Loading it from the build folder for production
                worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
                contextIsolation: true,
            }
        })

        win.loadURL(`http://localhost:3000${urlData}`);
        if (isDev) {
            win.webContents.on('did-frame-finish-load', () => {
                win.webContents.openDevTools();
            });
        }
    })

    try {
        ipcMain.handle('openDialog', async (e, text) => {
            console.log('opendialog ocnected',)
            let options = {
                buttons: ["Yes", "No"],
                message: text
            }
            const response = await dialog.showMessageBox(mainWindow, options)
            const hasAcepted = response.response === 0 ? true : false
            return hasAcepted
        })
    } catch (error) {

    }

    console.log('en agenda desde back')
    //Agenda



    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}

app.on('ready', createWindow)


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

