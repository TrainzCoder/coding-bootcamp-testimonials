const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const testimoniText = document.querySelector('#testimonial-text');
const nameText = document.querySelector('#name');
const profession = document.querySelector('#profession');
const imgPerson = document.querySelector('#img-person');

let data = [
  {
    name: "Tanya Sinclair",
    testimoni: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
                  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                  excited about the future. ”`,
    profession: "UX Engineer",
    imgLocation: "./assets/images/image-tanya.jpg"
  },
  {
    name: "John Tarkpor",
    testimoni: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
                  The depth the instructors go into is incredible. I now feel so confident about 
                  starting up as a professional developer. ”`,
    profession: "Junior Front-end Developer",
    imgLocation: "./assets/images/image-john.jpg"
  }
];

let index = 0;

function setDisplay(index) {

  testimoniText.textContent = data[index].testimoni;
  nameText.textContent = data[index].name;
  profession.textContent = data[index].profession;
  imgPerson.src = data[index].imgLocation;

}

function nextslide() {
    index++;
    if(index > data.length - 1){
        index = 0;
    }

    setDisplay(index);
    
}

function prevslide() {
    index--;
  
    if(index < 0){
        index = data.length - 1;
    }
    setDisplay(index);
}

nextBtn.addEventListener("click", nextslide);

prevBtn.addEventListener("click", prevslide);

