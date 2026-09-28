function hitungStatistik(arr) {
    let min = arr[0];
    let max = arr[0];
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        total += arr[i];
    }

    let rataRata = total / arr.length;

    return {
        minimum: min,
        maksimum: max,
        rataRata: rataRata
    };
}

const data = [10, 20, 30, 40, 50];
const hasil = hitungStatistik(data);

const target = document.getElementById("hasil");
target.innerHTML = "Nilai Minimum: " + hasil.minimum + "<br>" +
                   "Nilai Maksimum: " + hasil.maksimum + "<br>" +
                   "Nilai Rata-rata: " + hasil.rataRata;