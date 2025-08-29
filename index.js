

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
 for (const cardbtn of cardbtns) {
    cardbtn.addEventListener('click', ()=>{
     
    const decreats = Number( document.getElementById('decreat').innerText) ;
      
         const locetion = cardbtn.parentNode.parentNode.children[1].children[0].innerText;
        const phoneNumber = cardbtn.parentNode.parentNode.children[2].children[0].innerText;
    if(decreats < 20 || decreats === 0){
        alert('❌ Not enough coins. you need at least 20 coins');
        return;
    }
    else{
        alert(`📞 Calling... 
       ${locetion} ${phoneNumber}`);

    }
   const newDecreat = decreats-20;

   document.getElementById('decreat').innerText=newDecreat;

    let date = new Date();
        
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

const copybtns = document.getElementsByClassName('copy-btn')
let count = 1;
 for (const copybtn of copybtns) {
    copybtn.addEventListener('click', ()=>{
     const copyDisplay = document.getElementById('copy-add');
       copyDisplay.innerText= count++;
        const number = copybtn.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(number)

        .then(()=>{
            alert(` Number copied succesfully! ${number}`);
        })
        .catch(err=>{
            console.error('Copy failed:', err);
        });
      
    })
 }
