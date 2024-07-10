const openModalBtn = document.getElementById("openModalBtn");
const modalBtn = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const toggleTypeBtn = document.getElementById("toggleTypeBtn");
const eyeIcon = document.querySelector("#toggleTypeBtn i");

const closeBtn = document.getElementById("closeBtn");
const saveBtn = document.getElementById("saveBtn");
const passwordElement = document.getElementById("password");


const openModal = () => {
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
};


const closeModal = () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeElements = [backdrop, closeModalBtn, closeBtn, saveBtn];    

closeElements.forEach((element) => {
    element.addEventListener("click", closeModal);
});

toggleTypeBtn.addEventListener("click", () => {
    if (passwordElement.type === "password") {
        passwordElement.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordElement.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
});
