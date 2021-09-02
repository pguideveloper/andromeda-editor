const input = document.getElementById("editor");
const editor = CodeMirror.fromTextArea(input, {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'dracula',
    mode: 'javascript'
})

editor.setSize("100%", "100vh");
editor.setCursor({line: 1, ch: 1})