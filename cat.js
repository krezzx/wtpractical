const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4=document.getElementById('btn4');


btn1.addEventListener('click', function handleClick() {
  if(btn1.textContent==='ADD to CART'){
    btn1.textContent = 'REMOVE from CART';
    btn4.textContent = Number(btn4.textContent) + 1
  }
  else if(btn1.textContent==='REMOVE from CART'){
    btn1.textContent = 'ADD to CART';
    btn4.textContent = Number(btn4.textContent) -1

  }
  
});

btn2.addEventListener('click', function handleClick() {
    if(btn2.textContent==='ADD to CART'){
      btn2.textContent = 'REMOVE from CART';
      btn4.textContent = Number(btn4.textContent) + 1
    }
    else if(btn2.textContent==='REMOVE from CART'){
      btn2.textContent = 'ADD to CART';
      btn4.textContent = Number(btn4.textContent) -1
    }
    
  });

  btn3.addEventListener('click', function handleClick() {
    if(btn3.textContent==='ADD to CART'){
      btn3.textContent = 'REMOVE from CART';
      btn4.textContent = Number(btn4.textContent) + 1
    }
    else if(btn3.textContent==='REMOVE from CART'){
      btn3.textContent = 'ADD to CART';
      btn4.textContent = Number(btn4.textContent) -1
    }
    
  });
  
