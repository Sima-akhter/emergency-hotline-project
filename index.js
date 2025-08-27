
// let count = 0;
// document.getElementById('heart').addEventListener('click', ()=>{
//   count++;
//   const display = document.getElementById('add');
//   display.textContent=count
// })

const hearts = document.getElementsByClassName(' heart-btn');

let count = 0;
for (const heart of hearts) {
    heart.addEventListener('click', ()=>{
        count++;
      const display = document.getElementById('add');
      display.textContent=count;
    })
}


