const refs = {
  box1: document.querySelector(".question-box1"),
  box1Answer: document.querySelector(".answer-box1"),
  box2: document.querySelector(".question-box2"),
  box2Answer: document.querySelector(".answer-box2"),
  box3: document.querySelector(".question-box3"),
  box3Answer: document.querySelector(".answer-box3"),
};


function toggleBox1() {
  refs.box1Answer.classList.toggle("hidden-question");
}
function toggleBox2() {
    refs.box2Answer.classList.toggle("hidden-question");
  }
  function toggleBox3() {
    refs.box3Answer.classList.toggle("hidden-question");
  }
refs.box1.addEventListener("click", toggleBox1);
refs.box2.addEventListener("click", toggleBox2);
refs.box3.addEventListener("click", toggleBox3);
