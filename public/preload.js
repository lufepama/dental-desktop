const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Invoke Methods
    testInvoke: (args) => ipcRenderer.invoke('test-invoke', args),
    // Send Methods
    testSend: () => ipcRenderer.send('test'),
    openPatientWindow: (data) => ipcRenderer.send('openPatientWindow', data),
    // Receive Methods
    testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) })
});