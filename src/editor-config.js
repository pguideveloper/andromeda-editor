const { ipcRenderer } = require('electron')
const fs = require('fs');

const input = document.getElementById("editor");
const editor = CodeMirror.fromTextArea(input, {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'dracula',
    mode: 'javascript'
})

editor.setSize("100%", "100vh");
editor.setCursor({line: 1, ch: 1})

ipcRenderer.on('fileName', function(event, data){
    const fileContent = fs.readFileSync(data).toString(); 
    editor.setValue(fileContent);
});

ipcRenderer.on('saveFileAs', function(event, filePath) {
    fs.writeFileSync(filePath, editor.getValue(), "utf-8");
});


