


const body = document.querySelector("body");
const umumi = document.createElement("div");
body.append(umumi);


let pullar = [500, 200, 100, 50, 20, 10, 5, 1,0.5, 0.2, 0.1, 0.05, 0.03, 0.01];

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  umumi.innerHTML = "";


  let mebleg = +document.getElementById("price").value;
  pullar.map((pul) => {
    let say = Math.trunc(mebleg / pul);
    mebleg = +(mebleg - say * pul).toFixed(2);

    if (say > 0) {
      const display_div = document.createElement("div");
      display_div.classList.add("display");
      umumi.append(display_div);
     
      for (let i = 0; i < say; i++) {
        
          const img = document.createElement("img");
          img.src = `./images/${pul}.jpg`;
          img.style.left = `${i * 60}px`;
          display_div.append(img);
       
      }
    }
  });
});









