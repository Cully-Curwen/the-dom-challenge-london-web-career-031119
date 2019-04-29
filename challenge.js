const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
const commentList = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const commentSubmit = document.getElementById('submit');
const btnPluss = document.getElementById('+');
const btnMinus = document.getElementById('-');
const btnHeart = document.getElementById('<3');
const likes = document.querySelector('.likes');

let count = 0;
let counting = window.setInterval( () => counter.innerHTML = count++, 1000);
function addComment(text) {
  comment = document.createElement('p');
  comment.innerHTML = text;
  commentList.appendChild(comment);
}
function addLike(num) {
  li = document.createElement('li');
  li.id = `${num}`;
  li.innerHTML = `${num} has been liked 1 times`;
  likes.appendChild(li);
}

const liked = {};

pause.addEventListener('click', () => {
  if (pause.innerHTML == " pause ") {
    clearInterval(counting);
    pause.innerHTML = " resume ";
    btnPluss.disabled = true;
    btnMinus.disabled = true;
    btnHeart.disabled = true;
    commentSubmit.disabled = true;
  } else {
    counting = window.setInterval( () => counter.innerHTML = count++, 1000);
    pause.innerHTML = " pause ";
    btnPluss.disabled = false;
    btnMinus.disabled = false;
    btnHeart.disabled = false;
    commentSubmit.disabled = false;
  };
})

commentForm.addEventListener('submit', () => {
  event.preventDefault();
  addComment(commentForm.text.value);
  event.target.reset();
})

btnMinus.addEventListener('click', () => {
  counter.innerHTML = count--;
})

btnPluss.addEventListener('click', () => {
  counter.innerHTML = count++;
})

btnHeart.addEventListener('click', () => {
  if (liked[count]) {
    liked[count]++;
    let li = document.getElementById(`${count}`);
    li.innerHTML = `${count} has been liked ${liked[count]} times`; 
  } else {
    liked[count] = 1;
    addLike(count)
  }
})