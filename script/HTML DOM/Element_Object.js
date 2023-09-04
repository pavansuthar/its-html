// The Element Object - Properties
const alink = document.getElementById("main");
alink.accessKey = "w";

const getEleAttru = alink.attributes; // returns [NamedNodeMap]
for (let i = 0; i < getEleAttru.length; i++) {
  console.log({
    name: getEleAttru[i].name,
    value: getEleAttru[i].value,
  });
}

const navEle = document.getElementById("nav");
console.log(navEle.children); // returns [HTMLCollection]
for (let i = 0; i < navEle.children.length; i++) {
  navEle.children[i].style.fontSize = "22px";
}
