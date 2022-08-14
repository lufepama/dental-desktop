module.exports = function onRightClickAgenda(MenuItem, ctxMenu, win) {

    ctxMenu.append(new MenuItem({
        label: 'Hello'
    }))
    win.webContents.on('context-menu', (e, params) => {
        ctxMenu.popup(win, params.x, params.y)
    })
}