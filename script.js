/* ========================================
   ELEMENTS
======================================== */

// ========================================
// Landing page
// ========================================

const openGiftButton =
  document.querySelector("#open-gift");

const landingPage =
  document.querySelector("#landing-page");


// ========================================
// Gift menu
// ========================================

const giftMenu =
  document.querySelector("#gift-menu");


// ========================================
// Letters
// ========================================

const lettersCard =
  document.querySelector("#letters-card");

const lettersSection =
  document.querySelector("#letters-section");


// ========================================
// Envelope
// ========================================

const envelope =
  document.querySelector("#envelope");

const openLetterButton =
  document.querySelector("#open-letter");

const letter =
  document.querySelector(".letter-preview");

const letterFullText =
  document.querySelector(".letter-full-text");


// ========================================
// Letter back button
// ========================================

const backToMenu =
  document.querySelector("#back-to-menu");


// Gallery

const galleryCard =
  document.querySelector("#gallery-card");

const gallerySection =
  document.querySelector("#gallery-section");

const backFromGallery =
  document.querySelector("#back-from-gallery");

const galleryItems =
  document.querySelectorAll(".gallery-item");

const galleryLightbox =
  document.querySelector("#gallery-lightbox");

const galleryLightboxImage =
  document.querySelector("#gallery-lightbox-image");

const galleryLightboxClose =
  document.querySelector("#gallery-lightbox-close");


// ========================================
// Soundtrack
// ========================================

const soundtrackCard =
  document.querySelector("#soundtrack-card");

const soundtrackSection =
  document.querySelector("#soundtrack-section");

const backFromSoundtrack =
  document.querySelector("#back-from-soundtrack");


// ========================================
// Song players
// ========================================

const songPlayers =
  document.querySelectorAll(".song-player");


// Future

const futureCard =
  document.querySelector("#future-card");

const futureSection =
  document.querySelector("#future-section");

const backFromFuture =
  document.querySelector("#back-from-future");

const dreamCards =
  document.querySelectorAll(".dream-card");


// Secret surprise

const secretCard =
  document.querySelector("#secret-card");

const secretSection =
  document.querySelector("#secret-section");

const backFromSecret =
  document.querySelector("#back-from-secret");

const secretReveal =
  document.querySelector("#secret-reveal");

const secretGift =
  document.querySelector("#secret-gift");

const secretMessage =
  document.querySelector("#secret-message");


// ========================================
// OPEN GIFT
// ========================================

openGiftButton.addEventListener("click", () => {

  landingPage.classList.add("hidden");

  giftMenu.classList.remove("hidden");

});


// ========================================
// OPEN LETTERS
// ========================================

lettersCard.addEventListener("click", () => {

  giftMenu.classList.add("hidden");

  lettersSection.classList.remove("hidden");

});


// ========================================
// OPEN ENVELOPE
// ========================================

openLetterButton.addEventListener("click", () => {

  // First click:
  // Open the envelope

  if (!envelope.classList.contains("open")) {

    envelope.classList.add("open");

    openLetterButton.textContent =
      "Read Your Letter ❤️";

    return;
  }


  // Second click:
  // Zoom the letter

  letter.classList.remove("returning");

  letter.classList.add("read-mode");

  letter.classList.add("zoomed");

  lettersSection.classList.add("letter-open");


  // Hide the button

  openLetterButton.style.display =
    "none";

});


// ========================================
// CLOSE LETTER WHEN CLICKING OUTSIDE
// ========================================

document.addEventListener("click", (event) => {

  if (
    !lettersSection.classList.contains("letter-open") ||
    letter.contains(event.target) ||
    event.target === openLetterButton
  ) {

    return;

  }


  letter.classList.remove("zoomed");

  letter.classList.remove("read-mode");

  lettersSection.classList.remove(
    "letter-open"
  );


  requestAnimationFrame(() => {

    letter.classList.add("returning");

  });


  openLetterButton.style.display =
    "inline-block";

  openLetterButton.textContent =
    "Read Your Letter ❤️";


  setTimeout(() => {

    letter.classList.remove("returning");

  }, 800);

});


// ========================================
// BACK FROM LETTERS
// ========================================

backToMenu.addEventListener("click", () => {

  // Stop any music just in case

  songPlayers.forEach((player) => {

    player.pause();

  });


  // Reset letter

  letter.classList.remove("zoomed");

  letter.classList.remove("read-mode");

  letter.classList.remove("returning");


  // Remove overlay

  lettersSection.classList.remove(
    "letter-open"
  );


  // Reset envelope

  envelope.classList.remove("open");


  // Reset button

  openLetterButton.style.display =
    "inline-block";

  openLetterButton.textContent =
    "Open Your Letter 💌";


  // Return to menu

  lettersSection.classList.add("hidden");

  giftMenu.classList.remove("hidden");

});


// ========================================
// OPEN SOUNDTRACK
// ========================================

soundtrackCard.addEventListener("click", () => {

  giftMenu.classList.add("hidden");

  soundtrackSection.classList.remove(
    "hidden"
  );

});


// ========================================
// BACK FROM SOUNDTRACK
// ========================================

backFromSoundtrack.addEventListener(
  "click",
  () => {

    // Stop music when leaving

    songPlayers.forEach((player) => {

      player.pause();

    });


    soundtrackSection.classList.add(
      "hidden"
    );

    giftMenu.classList.remove(
      "hidden"
    );

  }
);


// ========================================
// ONLY ONE SONG AT A TIME
// ========================================

songPlayers.forEach((player) => {

  player.addEventListener(
    "play",
    () => {

      songPlayers.forEach(
        (otherPlayer) => {

          if (
            otherPlayer !== player
          ) {

            otherPlayer.pause();

          }

        }
      );

    }
  );

});


// ========================================
// OPEN GALLERY
// ========================================

galleryCard.addEventListener("click", () => {

  giftMenu.classList.add("hidden");

  gallerySection.classList.remove("hidden");

});


// ========================================
// GALLERY LIGHTBOX
// ========================================

const closeGalleryLightbox = () => {

  galleryLightbox.classList.add("hidden");

  galleryLightboxImage.removeAttribute("src");

};


galleryItems.forEach((item) => {

  item.addEventListener("click", () => {

    const image = item.querySelector("img");

    galleryLightboxImage.src = image.src;

    galleryLightboxImage.alt = image.alt;

    galleryLightbox.classList.remove("hidden");

  });

});


galleryLightbox.addEventListener("click", (event) => {

  if (
    event.target === galleryLightbox ||
    event.target === galleryLightboxClose
  ) {

    closeGalleryLightbox();

  }

});


backFromGallery.addEventListener("click", () => {

  closeGalleryLightbox();

  gallerySection.classList.add("hidden");

  giftMenu.classList.remove("hidden");

});


// ========================================
// OPEN FUTURE
// ========================================

futureCard.addEventListener("click", () => {

  giftMenu.classList.add("hidden");

  futureSection.classList.remove("hidden");

});


backFromFuture.addEventListener("click", () => {

  futureSection.classList.remove("future-open");

  dreamCards.forEach((card) => {

    card.classList.remove("dream-open");

  });

  futureSection.classList.add("hidden");

  giftMenu.classList.remove("hidden");

});


dreamCards.forEach((card) => {

  card.addEventListener("click", () => {

    dreamCards.forEach((otherCard) => {

      otherCard.classList.remove("dream-open");

    });

    card.classList.add("dream-open");

    futureSection.classList.add("future-open");

  });

});


futureSection.addEventListener("click", (event) => {

  if (
    event.target === futureSection &&
    futureSection.classList.contains("future-open")
  ) {

    futureSection.classList.remove("future-open");

    dreamCards.forEach((card) => {

      card.classList.remove("dream-open");

    });

  }

});


// ========================================
// OPEN SECRET SURPRISE
// ========================================

secretCard.addEventListener("click", () => {

  giftMenu.classList.add("hidden");

  secretSection.classList.remove("hidden");

  secretReveal.classList.remove("hidden");

  secretMessage.classList.add("hidden");

});


secretGift.addEventListener("click", () => {

  secretReveal.classList.add("hidden");

  secretMessage.classList.remove("hidden");

});


backFromSecret.addEventListener("click", () => {

  secretSection.classList.add("hidden");

  secretReveal.classList.remove("hidden");

  secretMessage.classList.add("hidden");

  giftMenu.classList.remove("hidden");

});