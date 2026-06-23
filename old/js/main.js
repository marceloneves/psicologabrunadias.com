const WHATSAPP_URL =
  "https://wa.me/5547997503945?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

function initHeader() {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    mobileNav?.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle?.classList.remove("is-open");
      mobileNav?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-item__question");
    button?.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", WHATSAPP_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
}

const COOKIE_CONSENT_KEY = "bruna-dias-cookie-consent";

function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");

  if (!banner) return;

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) {
    banner.hidden = false;
  }

  const save = (value) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    banner.hidden = true;
  };

  acceptBtn?.addEventListener("click", () => save("accepted"));
  rejectBtn?.addEventListener("click", () => save("rejected"));
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFaq();
  initWhatsAppLinks();
  initCookieBanner();
});
