const onTabClick = (event) => {
    if(event.target.tagName === "BUTTON") {
        event.preventDefault();
        const button = event.target;

        if(button.classList.contains("active")) {
            // button is already active; nothing to do;
        } else {
            event.currentTarget.querySelector("button.active").classList.remove("active");
            document.querySelector("main section.case div.images .tab-item.active").classList.remove("active");
            button.classList.add("active");
            document.querySelector(button.dataset.target).classList.add("active");
        }
    }
};

document
    .querySelector("main section.case div.case-studies")
    .addEventListener("click", onTabClick);
