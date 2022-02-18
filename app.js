const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; //As a 500px movement walk.

function shadow(e) {

  // here it can also be written in this way

  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // const x = e.offsetX;
  // const y = e.offsetY;

  // This is destructuring of the array 
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;


  // this is checking that hero and h1 are not the same element as it as generating 0 for offset inside that woah area.

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    // Adding pixel which are not 0 for inside element
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // After having the round numbers 
  // box-shadow : 1px 1px 0 color  = x y blur status color

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}



hero.addEventListener("mousemove", shadow);
