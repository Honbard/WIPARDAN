function navigateTo(pageId) {
  // Mendapatkan elemen halaman berdasarkan ID
  var page = document.getElementById(pageId);

  // Memeriksa apakah halaman ditemukan
  if (page) {
    // Menyembunyikan semua halaman
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
      page.style.display = 'none';
    });

    // Menampilkan halaman yang dipilih
    page.style.display = 'block';
  }
}