// variaveis
const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

// variavel tamanho
let size = sizes.value;

// função gerar
generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmptyInput();
});

// seleção de tamanhos
sizes.addEventListener("change",(e)=>{
    size = e.target.value;
    isEmptyInput();
});

// baixar imagem do qr code
downloadBtn.addEventListener("click", ()=>{
    let img = downloadBtn.querySelector(".qr-body img");

    // condicional que verifica se a imagem do QR code será formada
    if (img !== null) {
        let imgAtrr = img.getAttribute("scr");
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else {
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

// verifica se o campo está vazio
function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Entre com o textou ou URL para gerar o QR code.")
}

// gerar o QR code
function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDarl:"#000",
    });
}