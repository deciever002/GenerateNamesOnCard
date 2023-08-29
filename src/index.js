let nameOfPerson = document.getElementById("name");
let downloadCard = document.getElementById("downloadCard");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let img = document.getElementById("imageCard");
let downloadImageButton = document.getElementById("downloadImage");
var url;
downloadCard.addEventListener("click",function () {
  ctx.drawImage(img, 0, 0,700,700);
  ctx.font = "bold 25px Poppins";
  ctx.fillText(`To, ${nameOfPerson.value}`, 360, 140);
  url = canvas.toDataURL("image/png");
  downloadImageButton.style.display = "block";
  console.log(url);
});

downloadImageButton.addEventListener("click", function () {
  var link = document.createElement("a");
  link.download = nameOfPerson.value + ".jpeg";
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
});
