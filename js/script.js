// ini file javascript

function replaceNama() {
    let name = prompt("Siapakah nama Anda?", "");
    if (name !== null && name.trim() !== "") {
        document.getElementById("userGreeting").innerText = name;
    } else {
        alert("Nama tidak boleh kosong.");
    }
}
