let hasil = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        hasil.push("MI2A");
    } else if (i % 3 === 0) {
        hasil.push("MI");
    } else if (i % 5 === 0) {
        hasil.push("2A");
    } else {
        hasil.push(i);
    }
}

document.getElementById("hasil").innerText = hasil.join(", ");