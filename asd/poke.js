const startingType = [
  "불",
  "물",
  // "풀",
  // "전기",
  // "얼음",
  // "비행",
]

const startingTypeData = {

}


function TypePokeData() {

  const TypePoke = {

    fire: ["브케인", "파이리", "불꽃숭이"],
    water: ["팽도리", "꼬부기"],
    // leaf: ["치코리타", "모부기", "나무지기"],
    // elect: ["꼬링크", "썬더라이"],
    // ice: ["글레이시아", "바닐프티"],
    // air: ["구구", "찌르꼬"],

  }
}


// 내장함수인지 확인하려면 맨앞글자 대소문자인지
// 대문자면 내장

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


let root = document.getElementById("root");
let Ul = document.createElement("ul");

console.dir(root);
root.append(Ul);
Ul.innerText = "스타팅"

let Text = Ul.innerText;


function qwe() { Ul.addEventListener("click", function (asd) {

  this.textContent = startingType[getRandomInt(0, startingType.length)];
  let tc = this.textContent;
  console.log(tc);
  return tc = asd;


})
}

qwe();
console.log(tc);




tc.addEventListener("click", function () {

  console.log("text");
  // console.log(qwe(asd));
})

