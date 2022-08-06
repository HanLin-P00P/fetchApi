const adviceText = document.getElementsByClassName("adviceText")[0];
const adviceId = document.getElementsByClassName("adviceId")[0];
const loading = document.getElementsByClassName("loading")[0];
const button = document.getElementsByTagName("button")[0];

let getData;
const fetchFun = () => {
  button.style.top = "calc(100% - 50px)";
  loading.classList.toggle("visible");
  adviceId.innerHTML = "";
  adviceText.innerHTML = "";
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      getData = data.slip;
      console.log(getData);
      adviceId.innerHTML = `Advice ID #${getData.id}`;
      adviceText.innerHTML = `<q>${getData.advice}</q>`;
      loading.classList.toggle("visible");
    })
    .catch((error) => {
      loading.classList.toggle("visible");
      adviceId.innerHTML = "<h1 class='error'>!!!</h1>";
      adviceText.innerHTML = `<h4 class='error error-text'>Network Error!</h4>
                                <h6 class='error error-text'>${error}</h6>`;
    });
};

button.onclick = fetchFun;
