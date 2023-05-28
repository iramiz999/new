// JS Functions 



// let me = document.getElementsByTagName("button")


// let arrayme = Array.from(me);

// arrayme.forEach(item => {

//     item.style.backgroundColor= "red"

// });





const addproduct = document.querySelector("#addprod") 

const mycont = document.querySelector("#pro1");




addproduct.addEventListener("click",() => {

    const newprod = `<div class="product-card" id="pro">
    <div class="product-image">
      <img src="/imgs/addidas.webp">
      <div class="product-info">
        <div class="product-category">
          New Shoes


        </div>
        <strong class="product-title">
          No COLOR
        </strong>

      </div>
    </div>
  </div>
  
  `
// adding product
mycont.innerHTML += newprod;



    
})















const chng = document.getElementById("change");

const mybody = document.getElementsByTagName("body")[0]


//dark mode ON  - OFF
chng.addEventListener('click', () => {
    mybody.classList.toggle("darked")

})

const myimg = document.getElementById("myimage")
myimg.addEventListener("mouseover", () => {
})


