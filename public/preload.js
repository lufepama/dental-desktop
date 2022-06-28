const { ipcRenderer, contextBridge, dialog } = require('electron');


contextBridge.exposeInMainWorld('api', {
    // Invoke Methods
    testInvoke: (args) => ipcRenderer.invoke('test-invoke', args),
    // Send Methods
    testSend: () => ipcRenderer.send('test'),
    openPatientWindow: (data) => ipcRenderer.send('openPatientWindow', data),
    openDialogPatientCreation: async (text) => {
        const res = await ipcRenderer.invoke('openDialog', text)
        return res
    },
    loadUpdateInfor: (callback) => ipcRenderer.once('data-to-update', (e, data) => { callback(data) }),
    closeWindow: () => ipcRenderer.send('close-window'),
    removeAllListener: () => ipcRenderer.removeAllListeners('openDialog'),
    testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }),

});