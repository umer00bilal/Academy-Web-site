const enrollBtns =
document.querySelectorAll(".enrollBtn");

const popupForm =
document.getElementById("popupForm");

const closeForm =
document.getElementById("closeForm");

const enrollForm =
document.getElementById("enrollForm");

/* OPEN POPUP */

enrollBtns.forEach((btn)=>{

btn.addEventListener("click", ()=>{

popupForm.style.display = "flex";

});

});

/* CLOSE POPUP */

closeForm.addEventListener("click", ()=>{

popupForm.style.display = "none";

});

/* FORM SUBMIT */

enrollForm.addEventListener("submit", (e)=>{

e.preventDefault();

alert("Enrollment Submitted Successfully!");

popupForm.style.display = "none";

enrollForm.reset();

});