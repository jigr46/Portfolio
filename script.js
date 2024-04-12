// dynamic name generator
async function dynamicName() {
  while (true) {
    var title = ["Front-end", "Back-end", "Full-stack"];
    var random = Math.floor(Math.random() * title.length);
    document.querySelector("#dynamic_name").innerText = title[random];
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }
}
dynamicName();
//

// curent year
let date = new Date();
let year = date.getFullYear();
document.querySelector("#current-year").innerHTML = year;
//
