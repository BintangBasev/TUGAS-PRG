function konversiSuhu() {
    let inputsuhu = parseFloat(document.getElementById("suhu").value);
    let pilihansuhu = document.getElementById("konversi").value;
    let hasil;
    let unit = "";

    if (isNaN(inputsuhu)) {
        document.getElementById("hasil").innerText = "Masukkan suhu yang valid!";
        return;
    }

    switch (pilihansuhu) {
        case "Ckf":
            hasil = (inputsuhu * 9/5) + 32;
            unit = "°F";
            break;
        case "CkR":
            hasil = inputsuhu * 4/5;
            unit = "°R";
            break;
        case "FkC":
            hasil = (inputsuhu - 32) * 5/9;
            unit = "°C";
            break;
        case "FkR":
            hasil = (inputsuhu - 32) * 4/9;
            unit = "°R";
            break;
        case "RkC":
            hasil = (inputsuhu * 5/4);
            unit = "°C";
            break;
        case "RkF":
            hasil = (inputsuhu * 9/4) + 32;
            unit = "°F";
            break;
    }
    document.getElementById("hasil").innerText ="Hasil konversi: " + hasil.toFixed(2);
}

    
