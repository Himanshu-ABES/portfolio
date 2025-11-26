// Form Handling Logic
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const originalText = btn.innerText;
  const successMsg = document.getElementById("formSuccess");

  // Loading State
  btn.innerText = "Sending...";
  btn.style.opacity = "0.7";
  btn.disabled = true;

  // Simulate sending (setTimeout)
  setTimeout(() => {
    btn.innerText = "Sent!";
    btn.style.backgroundColor = "#22c55e"; // Green
    btn.style.color = "white";

    successMsg.classList.remove("hidden");
    e.target.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.backgroundColor = "";
      btn.style.color = "";
      btn.style.opacity = "1";
      btn.disabled = false;
      successMsg.classList.add("hidden");
    }, 3000);
  }, 1500);
}

// Mobile Menu Toggle (used by mobile menu button)
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

// Navbar Scroll Effect
function setupNavbarScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("py-2");
      nav.classList.remove("py-6");
    } else {
      nav.classList.add("py-6");
      nav.classList.remove("py-2");
    }
  });
}

// Initialize behaviors once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupNavbarScroll();
});
