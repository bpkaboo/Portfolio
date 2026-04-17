const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

document.querySelector(".play-button")?.addEventListener("click", () => {
  const featured = document.querySelector(".project-meta strong");
  if (!featured) return;

  featured.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-4px)", opacity: 0.65 },
      { transform: "translateY(0)", opacity: 1 },
    ],
    {
      duration: 480,
      easing: "ease-out",
    }
  );
});
