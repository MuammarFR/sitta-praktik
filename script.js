// LOGIN
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "Muammarfr@ut.ac.id" && password === "amar123") {
    window.location.href = "dashboard.html";
  } else {
    alert("email/password yang anda masukkan salah");
  }
}

// MODAL
function showModal(type) {
  document.getElementById("modal").style.display = "block";

  document.getElementById("modalTitle").innerText =
    type === "lupa" ? "Lupa Password" : "Daftar";

  document.getElementById("modalText").innerText =
    type === "lupa"
      ? "Silakan hubungi admin"
      : "Form pendaftaran belum tersedia";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// GREETING
let g = document.getElementById("greeting");
if (g) {
  let h = new Date().getHours();
  g.innerText =
    h < 12 ? "Selamat Pagi" :
    h < 18 ? "Selamat Siang" :
    "Selamat Malam";
}

// TRACKING
function cariDO() {
  let doNumber = document.getElementById("do").value;

  if (doNumber === "DO123") {
    document.getElementById("hasil").innerHTML =
      "Nama: Budi <br>Status: Dalam Pengiriman";
  } else {
    document.getElementById("hasil").innerHTML = "Data tidak ditemukan";
  }
}

// LOAD DATA
if (typeof dataBahanAjar !== "undefined") {
  dataBahanAjar.forEach(item => {
    document.getElementById("tabel").innerHTML += `
      <tr>
        <td>${item.kode}</td>
        <td>${item.nama}</td>
        <td>${item.stok}</td>
      </tr>
    `;
  });
}

// TAMBAH DATA
function tambahData() {
  let nama = document.getElementById("nama").value;
  let stok = document.getElementById("stok").value;

  document.getElementById("tabel").innerHTML += `
    <tr>
      <td>-</td>
      <td>${nama}</td>
      <td>${stok}</td>
    </tr>
  `;
}
