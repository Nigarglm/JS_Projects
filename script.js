const openModalBtn = document.querySelectorAll('.openModalBtn');
const modal = document.querySelectorAll('.modal');
const backdrop = document.querySelectorAll('.backdrop');
const closeModalBtn = document.querySelectorAll('.closeModalBtn');
const passwordElement = document.querySelectorAll('.password');
const closeBtn = document.querySelectorAll('.closeBtn');
const saveBtn = document.querySelectorAll('.saveBtn');
const toggleTypeBtn = document.querySelectorAll('.toggleTypeBtn');


const openModal = () => {
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
}

openModalBtn.addEventListener("click",openModal);

backdrop.addEventListener("click",closeModal);
closeModalBtn.addEventListener("click",closeModal);
closeBtn.addEventListener("click",closeModal);
saveBtn.addEventListener("click",closeModal);


toggleTypeBtn.addEventListener("click", () => {
    passwordElement.type = passwordElement.type === "text" ? "password" : "text";
    eyeIcon.classList = passwordElement.type === "text"
    ? "fa-regular fa-eye"
    : "fa-regular fa-eye-slash";
})