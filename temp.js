const memeForm = document.getElementById("newMemeForm");
const memeList = document.getElementById("memeList");

memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let memeLink = document.querySelector('#imageLink').value;
  let topText =document.querySelector('#topText').value;
  let bottomText =document.querySelector('#bottomText').value;

  if (memeLink){
    addMemeToDom(memeLink, topText, bottomText);
  }
  memeForm.reset();
});

function addMemeToDom(memeLink, topText, bottomText) {
  //create new elements
  let newDiv = document.createElement('div');
  let newImage = document.createElement('img');
  let newTopText = document.createElement('h1');
  let newBottomText = document.createElement('h1');
  let newDeleteBtn = document.createElement('button');

  //add attributes
  newImage.src = memeLink;
  newImage.alt = "Something went wrong :(";
  //here
  newImage.setAttribute('onerror', imgError(this));
  newTopText.innerText = topText;
  newTopText.classList.add('top');
  newBottomText.innerText = bottomText;
  newBottomText.classList.add('bottom');
  newDeleteBtn.innerHTML = "&#10006;"
  newDeleteBtn.classList.add('deleteBtn');
  

  // append everything
  newDiv.appendChild(newTopText);
  newDiv.appendChild(newDeleteBtn);
  newDiv.appendChild(newImage);
  newDiv.appendChild(newBottomText);
  document.querySelector('#memeList').appendChild(newDiv);
}

function imgError(image) {
  console.log(image);
}

memeList.addEventListener('click', function(e) {
  
  if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
  }
})
