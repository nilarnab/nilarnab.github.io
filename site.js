const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visible) return;

            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
            });
        },
        { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
}
