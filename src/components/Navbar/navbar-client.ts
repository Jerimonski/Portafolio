export function setupNavbar() {
  const wrap = document.getElementById("links-wrap")
  const indicator = document.getElementById("indicator")
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav-link"),
  )
  const mobileLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".mobile-link"),
  )
  const byHref = (href: string) =>
    links.find((a) => a.getAttribute("href") === href)

  const move = (el?: HTMLElement) => {
    if (!indicator || !el) return
    indicator.style.left = `${el.offsetLeft}px`
    indicator.style.width = `${el.offsetWidth}px`
  }

  let active =
    byHref(location.pathname + location.hash) ??
    byHref(location.pathname) ??
    links[0]

  const setActive = (link?: HTMLAnchorElement) => {
    if (!link || link === active) return
    active = link
    const href = active.getAttribute("href")
    links.forEach((a) => {
      const isActive = a === active
      a.classList.toggle("text-white", isActive)
      a.classList.toggle("text-white/60", !isActive)
      isActive
        ? a.setAttribute("aria-current", "true")
        : a.removeAttribute("aria-current")
    })
    mobileLinks.forEach((a) =>
      a.classList.toggle("text-white", a.getAttribute("href") === href),
    )
    move(active)
  }

  links.forEach((a) =>
    a.classList.add(a === active ? "text-white" : "text-white/60"),
  )
  requestAnimationFrame(() => move(active))
  links.forEach((a) => a.addEventListener("mouseenter", () => move(a)))
  wrap?.addEventListener("mouseleave", () => move(active))
  addEventListener("resize", () => move(active))

  // Scrollspy: conecta cada link "#id" con su <section id="id">
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.split("#")[1]
      const el = id ? document.getElementById(id) : null
      return el ? { link, el } : null
    })
    .filter(
      (s): s is { link: HTMLAnchorElement; el: HTMLElement } => s !== null,
    )

  const home = byHref("/")
  if (sections.length) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const hit = sections.find((s) => s.el === e.target)
          if (hit) setActive(hit.link)
        }),
      { rootMargin: "-20% 0px -90% 0px" },
    )
    sections.forEach(({ el }) => io.observe(el))

    const firstTop = sections[0].el.getBoundingClientRect().top + scrollY
    addEventListener(
      "scroll",
      () => {
        if (scrollY + innerHeight * 0.45 < firstTop && home) setActive(home)
      },
      { passive: true },
    )
  }

  // Menú móvil
  const menuBtn = document.getElementById("menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const iconMenu = document.getElementById("icon-menu")
  const iconClose = document.getElementById("icon-close")
  let open = false

  const setMenu = (state: boolean) => {
    open = state
    menuBtn?.setAttribute("aria-expanded", String(open))
    mobileMenu?.classList.toggle("grid-rows-[0fr]", !open)
    mobileMenu?.classList.toggle("grid-rows-[1fr]", open)
    mobileMenu?.classList.toggle("opacity-0", !open)
    mobileMenu?.classList.toggle("opacity-100", open)
    iconMenu?.classList.toggle("opacity-0", open)
    iconMenu?.classList.toggle("rotate-90", open)
    iconClose?.classList.toggle("opacity-0", !open)
    iconClose?.classList.toggle("-rotate-90", !open)
  }

  menuBtn?.addEventListener("click", () => setMenu(!open))
  document
    .querySelectorAll(".mobile-link")
    .forEach((a) => a.addEventListener("click", () => setMenu(false)))
}
