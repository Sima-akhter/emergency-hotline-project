
// let count = 0;
// document.getElementById('heart').addEventListener('click', ()=>{
//   count++;
//   const display = document.getElementById('add');
//   display.textContent=count
// })

const hearts = document.getElementsByClassName(' heart-btn');

let counts = 0;
for (const heart of hearts) {
    heart.addEventListener('click', ()=>{
        counts++;
      const display = document.getElementById('add');
      display.textContent=counts;
    })
}




const cardbtns = document.getElementsByClassName('card-btn');

let count=100;
 for (const cardbtn of cardbtns) {
    cardbtn.addEventListener('click', ()=>{


  count-=20;
    const decreat = document.getElementById('decreat');
    decreat.textContent=count;

    let date = new Date();

  if(count>0){
    alert(`${count-=0}`);
  }
  if(count<0){
    alert(`stop ${count=0}`)
  }

       const locetion = cardbtn.parentNode.parentNode.children[1].children[0].innerText;
        const phoneNumber = cardbtn.parentNode.parentNode.children[2].children[0].innerText;
        console.log(phoneNumber);
        
        const cardContainer = document.getElementById('call-history-card')
        
        const newCard = document.createElement('div');
        newCard.innerHTML=`
         <div class="flex justify-between  bg-slate-100 p-3 rounded-md">
            <div>
              <h1 class="font-bold">${locetion}</h1>
              <p>${phoneNumber}</p>
            </div>
            <div>
                <h1>${date.toLocaleTimeString()}</h1>
            </div>
          </div>
        `;
        cardContainer.append(newCard);
    })
 }

document.getElementById('btn-clear').addEventListener('click', ()=>{
     const cardContainer = document.getElementById('call-history-card');
     cardContainer.innerHTML = '';
})


 
