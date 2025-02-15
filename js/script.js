focusLink = (focusedLink) => {
    const link = document.getElementsByClassName("navbar__link--focus");
    link[0].classList.remove("navbar__link--focus");
    focusedLink.classList.add("navbar__link--focus");
}