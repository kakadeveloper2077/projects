// global variables
let input = window.document.getElementById("pegar_valores").value;
let log = window.document.getElementById("log").value;

// save functions
function save_data() {
    // local variables
    let input = window.document.getElementById("pegar_valores").value;
    localStorage.setItem("dados armazenados de 127.0.0.1: ", input + "\n")
    // internal function call
    registrar()
    send_message()
    function send_message() {
        window.alert("salvando no banco....")
        window.alert("salvo com sucesso!")
    } function registrar() {
        // local variables
        let information_saved = window.document.getElementById("pegar_valores").value;
        log_data = window.document.getElementById("log").value = "dado armazenado em 127.0.0.1 no armazenamento local: " + information_saved + "\n";
    }
}

// delete functions
function delete_data() {
    // local variables
    window.document.getElementById("pegar_valores").value;
    window.document.getElementById("log").value;
    // internal function call
    trash()
    function trash() {
        send_message()
        window.document.getElementById("pegar_valores").value = "";
        window.document.getElementById("log").value = "";
        function send_message() {
            return window.alert("dados removidos.")
        }
    }
}

function delete_ls() {
    window.alert("limpando banco de dados...")
    window.alert("banco de dados limpo")
    localStorage.removeItem("dados armazenados de 127.0.0.1: ")
}