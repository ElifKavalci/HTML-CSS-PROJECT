// Başa Dön butonu
const toTopBtn = document.getElementById("toTopBtn");

// Sayfa scroll edilince butonu gizle
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

// Butona tıklanınca yukarı çık
toTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Menüdeki bağlantılara tıklayınca sayfanın aniden atlamasını engelleyen,smooth scroll 
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();  

    const targetId = this.getAttribute('href').substring(1); // # işaretini kaldırır
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// günaydın-iyi öğlenler-iyi akşamlar mesajı
const greetingBox = document.getElementById("greeting");
const date = new Date();
const hour = date.getHours();
let greetingText = "";
if (hour >= 5 && hour < 12) {
  greetingText = "Günaydın! 😊";
} else if (hour >= 12 && hour < 18) {
  greetingText = "İyi öğlenler! ☀️";
} else if (hour >= 18 && hour < 22) {
  greetingText = "İyi akşamlar! 🌆";
} else {
  greetingText = "İyi geceler! 🌙";
}

greetingBox.textContent = greetingText;

// 5 saniye sonra yazıyı gizlemek için gerekli kodlr
setTimeout(() => {
  greetingBox.style.opacity = "0";
  greetingBox.style.transition = "opacity 1s ease";
  setTimeout(() => {
    greetingBox.style.display = "none";
  }, 1000);
}, 5000);




