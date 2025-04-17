document.addEventListener("DOMContentLoaded", function() {
  let userName = localStorage.getItem("userName");

  if (!userName) {
      userName = prompt("Masukkan nama Anda:");
      if (userName) {
          localStorage.setItem("userName", userName);
      }
  }

  if (userName) {
      document.getElementById("userName").textContent = userName;
  }
});


function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

var slideIndex = 1;
    showDivs(slideIndex)

    function plusDivs(n){
        showDivs((slideIndex += n));
    }

    function showDivs(n){
        var i;
        var x = document.getElementsByClassName("img-slideshow");
        if(n > x.length){
            slideIndex = 1;
        }

        else if(n < 1){
            slideIndex = x.length;
        }

        for(i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

    setInterval(() => {
        plusDivs(1);
    }, 2000) //1 second


    document.getElementById("formMessage").addEventListener("submit", function(e) {
      e.preventDefault(); // mencegah form reload
  
      const name = document.getElementById("name").value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const message = document.getElementById("message").value;
  
      let genderValue = gender ? gender.value : "Belum dipilih";
  
      const result = 
          `Nama: ${name}\n` +
          `Tanggal Lahir: ${birthdate}\n` +
          `Jenis Kelamin: ${genderValue}\n` +
          `Pesan: ${message}`;
  
      document.getElementById("output").value = result;
  });