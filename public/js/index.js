// ============= Menu Toggle ===============
const menu = document.querySelector(".menu")

const openMenu = () => {
  let toggle = document.querySelector(".toggle")

  toggle.addEventListener("click", () => {
    console.log("Funcionando abrir!")
    menu.classList.add("show-menu")
  })
}

const closeMenu = () => {
  let close = document.querySelector(".close")

  close.addEventListener("click", () => {
    console.log("Funcionando fechar!")
    menu.classList.remove("show-menu")
  })
}

openMenu()
closeMenu()

// ============= About me Text ===============
class Container {
  constructor(version, text) {
    this.version = version
    this.text = text
  }
}

const h4 = document.querySelector(".secondrow__container-title__h4")
const text = document.querySelector(".secondrow__container-desc__text")

let listAbout = []

listAbout.push(
  new Container(
    "Short version",
    "I'm a Front-end developer with a degree in computer science."
  ),
  new Container(
    "Medium version",
    "I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science."
  ),
  new Container(
    "Long version",
    "I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science.I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science. I'm a Front-end developer with a degree in computer science."
  )
)
let i = 0

const receiveText = () => {
  return new Promise((resolve) => {
    resolve(
      (h4.textContent = listAbout[i].version),
      (text.textContent = listAbout[i].text)
    )
    i++
    if(i == listAbout.length) i = 0;
  })
}

const swiperAboutMe = async () => {
  await receiveText()
}

// h4.addEventListener("click", swiperAboutMe)

// ============= Date CopyRight ===============
// var dateYear = document.querySelector(".spancopy"),
//   dateVar = new Date().getFullYear()

// dateYear.append(dateVar);

// ================== NAVBAR SPY INTERSECTION OBSERVER =============
// const sections = document.querySelectorAll(".section[id]")

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".header__nav-container a[href*=" + sectionId + "]")
//         .classList.add("active-link")
//     } else {
//       document
//         .querySelector("header__nav-container a[href*=" + sectionId + "]")
//         .classList.remove("active-link")
//     }
//   })
// })

const test = document.querySelector(".footer")
const main = document.querySelector("main")
const box = document.querySelectorAll("section")
const links = document.querySelectorAll(
  "header__nav-container__list-item__link"
)

let options = {
  threshold: 0.5,
}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // entry.interstionRatio;

    // entry.target.classList.toggle("");
    if (!entry.isIntersecting) return
    else {
      // console.log(entry.target)
      links.forEach((link) => {
        // link.classList.add("link-color");
        // if(entry.target.classList. === link.dataset.)
      })
    }
  })
}, options)

box.forEach((section) => {
  observer.observe(section)
})
