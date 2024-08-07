// Tabel 1
function sum() {
  // Ambil elemen tabel
  const table = document.getElementById("t1");

  // Buat variabel untuk menyimpan total
  let total = 0;

  // Loop melalui semua baris tabel kecuali baris terakhir (yang merupakan baris total)
  for (var i = 1; i < table.rows.length - 1; i++) {
    // Ambil nilai pertama dari masing-masing baris
    const nilai = parseInt(table.rows[i].cells[2].children[0].value);

    // Cek apakah nilai masih kosong
    if (isNaN(nilai) || nilai === "") {
      // Tampilkan alert jika nilai2 masih kosong
      alert("Silakan Masukkan Nilai");
    } else {
      // Hitung 50% dari nilai tersebut
      let hasil = nilai * 0.5;

      // Tambahkan hasil ke total
      total += hasil;

      // Masukkan hasil ke dalam kolom kedua di baris yang sesuai
      table.rows[i].cells[4].innerHTML = hasil;
    }
  }

  // Masukkan total ke dalam baris terakhir tabel
  table.rows[3].cells[2].innerHTML = total;
}

// Tabel 2
function sum2() {
  var table = document.getElementById("t2");

  for (var i = 2; i < table.rows.length - 3; i++) {
    // Mengambil row tabel
    const row = table.rows[i];

    // Mengamnil setiap kolom baris (cell) yg sudah di tentukan
    const score1Cell = row.cells[2];
    const score2Cell = row.cells[3];
    const score3Cell = row.cells[4];
    const averageCell = row.cells[5];
    const weightCell = row.cells[6];
    const weightedScoreCell = row.cells[7];

    // Mengambil nilai dari referensi di atas
    const score1 = score1Cell.firstChild.value;
    const score2 = score2Cell.firstChild.value;
    const score3 = score3Cell.firstChild.value;
    const weight = weightCell.firstChild.textContent;

    // console.log(weight);

    // menghitung rata2
    let average = (parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3;
    let weightedScore = (parseInt(weight) / 100) * average;

    // memasukkan hasil perhitungan ke cell
    averageCell.innerHTML = average;
    weightedScoreCell.innerHTML = weightedScore;
  }

  // menghitung total rata"
  let nilai = 0;
  for (var i = 2; i < table.rows.length - 3; i++) {
    nilai += parseInt(table.rows[i].cells[7].innerHTML);

    // console.log(nilai);
  }

  const tot2 = document.getElementById("tot2");
  tot2.innerHTML = nilai;

  const tot1 = parseInt(document.getElementById("tot1").innerHTML);

  let finalScore = tot1 * 0.4 + nilai * 0.6;

  const Nakhir = document.getElementById("Nakhir");
  Nakhir.innerHTML = finalScore;

  // nilai huruf
  let letterGrade = "";
  if (finalScore >= 86) {
    letterGrade = "A";
  } else if (finalScore >= 81) {
    letterGrade = "A-";
  } else if (finalScore >= 76) {
    letterGrade = "B+";
  } else if (finalScore >= 71) {
    letterGrade = "B";
  } else if (finalScore >= 66) {
    letterGrade = "B-";
  } else if (finalScore >= 61) {
    letterGrade = "C+";
  } else if (finalScore >= 56) {
    letterGrade = "C";
  } else {
    letterGrade = "D";
  }

  const grade = document.getElementById("grade");
  grade.innerHTML = letterGrade;
}

// tabel 3
function tabel3() {
  const table = document.getElementById("t3");

  let total = 0;

  for (var i = 2; i < table.rows.length - 1; i++) {
    const nilai = parseInt(table.rows[i].cells[2].children[0].value);

    total += nilai;
    // console.log(total);
  }
  let average = total / 4;

  const sendAve = document.getElementById("average");
  sendAve.innerHTML = average;

  for (let i = 2; i < table.rows.length - 1; i++) {
    const nilai = parseInt(table.rows[i].cells[2].children[0].value);

    let skor = "";
    if (nilai >= 80) {
      skor = 4;
    } else if (nilai >= 60) {
      skor = 3;
    } else if (nilai >= 40) {
      skor = 2;
    } else if (nilai >= 10) {
      skor = 1;
    } else {
      skor = 0;
    }

    const colSkor = table.rows[i].cells[3];
    colSkor.innerHTML = skor;

    const getskor = parseInt(table.rows[i].cells[3].textContent);
    let sumskor = 0;
    sumskor += getskor;

    // console.log(getskor);

    const avskor = document.getElementById("grade2");
    avskor.innerHTML = sumskor;
  }
}
