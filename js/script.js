// ini file javascript

function replaceNama() {
    let name = prompt("Siapakah nama Anda?", "");
    if (name !== null && name.trim() !== "") {
        document.getElementById("userGreeting").innerText = name;
    } else {
        alert("Nama tidak boleh kosong.");
    }
}

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Berpindah slide otomatis setiap 3 detik
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 3000);





document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("messageForm");
    const resultContainer = document.getElementById("resultContainer");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Capture form values
        const name = document.getElementById("name").value;
        const birthDate = document.getElementById("birthDate").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message").value;

        // Get current time
        const currentTime = new Date().toLocaleString();

        // Display results
        resultContainer.innerHTML = `
            <h2>Submission Result</h2>
            <p><strong>Current Time :</strong> ${currentTime}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Birth Date:</strong> ${birthDate}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    });
});

// memunculkan tombol saat scroll kebawah
window.onscroll = function() {
    let button = document.getElementById("scrollOtomatis");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// scroll ke section homepage
document.getElementById("scrollOtomatis").onclick = function() {
    document.getElementById("home-page").scrollIntoView({ behavior: "smooth" });
};

