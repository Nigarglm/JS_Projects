const accordionItems = document.querySelectorAll(".accordionItemTitle");
const accordionTexts = document.querySelectorAll(".accordionItemText");
const accordionIcons = document.querySelectorAll(".accordionIcon");

const toggleAccordionItem = (number) => {
    const isOpen = !accordionTexts[number].classList.contains("hidden");
    resetStyles();
    if(!isOpen) {
    accordionTexts[number].classList.remove("hidden");       
    accordionIcons[number].classList.add("rotate-180");   
    accordionItems[number].classList.add("bg-gray-100");
    }
};

accordionItems.forEach((item, index, array) => {
    item.addEventListener("click", () => {
        toggleAccordionItem(index);
    });
});

const resetStyles = () => {
    for (let i = 0; i < accordionIcons.length; i++) {
    accordionTexts[i].classList.add("hidden");
    accordionIcons[i].classList.remove("rotate-180");
    accordionItems[i].classList.remove("bg-gray-100");
    }
};