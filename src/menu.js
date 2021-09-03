module.exports = function(actions) {
    return [
        {
            label: "Arquivo",
            submenu: [
                { 
                    label: "Abrir", 
                    accelerator: 'CmdOrCtrl+O',
                    click: actions.openFile 
                },
                { 
                    label: "Salvar", 
                    accelerator: 'CmdOrCtrl+S',
                    click: actions.saveFile 
                },
                { 
                    label: "Salvar como", 
                    accelerator: 'CmdOrCtrl+Shift+S',
                    click: actions.saveFileAs 
                },

            ]
        }
    ];
}