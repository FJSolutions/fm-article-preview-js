import "./styles/main.css"

const author = document.querySelector("#author")
const socials = document.querySelector("#socials")
const showShare = document.querySelector("#show-share")
const hideShare = document.querySelector("#hide-share")
if (showShare && hideShare && socials && author) {
    const toggle = () => {
        socials.classList.toggle("show-socials")
        author.classList.toggle("show-socials")
    }

    showShare.addEventListener("click", toggle)
    hideShare.addEventListener("click", toggle)
}