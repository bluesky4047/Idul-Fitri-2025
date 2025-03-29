const typingElement = document.getElementById("typing_1");
        const text = typingElement.innerText.trim();
        typingElement.innerText = ""; // Kosongkan teks sebelum animasi dimulai
        
        let index = 0;
        const speed = 50;
        
        function typeEffect() {
            if (index < text.length) {
                typingElement.innerText += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            }
        }
        
        typeEffect(); // Animasi hanya berjalan sekali setelah refresh

        var audio = document.getElementById("myAudio");
        var button = document.getElementById("musicButton");
        var icon = document.getElementById("musicIcon");

        document.addEventListener("DOMContentLoaded", function() {
            var audio = document.getElementById("myAudio");
            audio.play().catch(error => {
                console.log("Autoplay diblokir, pengguna harus berinteraksi dulu.");
            });
        });

        button.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
            } else {
                audio.pause();
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-play");
            }
        });