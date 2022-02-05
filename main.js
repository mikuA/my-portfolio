const aboutme = document.getElementById("aboutme");
const myphotos = document.getElementById("myphotos");
const photosimage = document.getElementById("photoimage");
const animalimage = document.getElementById("animal");
const sceneryimage = document.getElementById("scenery");
const aquariumimage = document.getElementById("aquarium");
let me = document.getElementById("me");
let photo = document.getElementById("photo");
const a = document.getElementById("i");
const b = document.getElementById("u");
const c = document.getElementById("e");

aboutme.onclick = function () {
  //スクロール処理(スムーズに動く)
  me.scrollIntoView({
    behavior: "smooth",
  });
};
myphotos.onclick = function () {
  //スクロール処理
  photo.scrollIntoView({
    behavior: "smooth",
  });
};

animal.onclick = function () {
  a.src = "/images/ポートフォリオ1.jpg";
  b.src = "/images/ポートフォリオ2.jpg";
  c.src = "/images/ポートフォリオ3.jpg";
};

scenery.onclick = function () {
  a.src = "/images/ポートフォリオ4.jpg";
  b.src = "/images/ポートフォリオ5.jpg";
  c.src = "/images/ポートフォリオ6.jpg";
};

aquarium.onclick = function () {
  a.src = "/images/ポートフォリオ7.jpg";
  b.src = "/images/ポートフォリオ8.jpg";
  c.src = "/images/ポートフォリオ9.jpg";
};
