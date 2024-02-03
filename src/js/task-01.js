const categories = document.getElementsByClassName("item");
console.log (`Number of Categories: ${categories.length}`);
// console.log (`Category: ${categories[0].firstElementChild.innerHTML}`);
for(let i = 0; i < categories.length; i++) {
    console.log(`Category: ${categories[i].firstElementChild.innerHTML}`);
    console.log(`Element: ${categories[i].firstElementChild.nextElementSibling.children.length}`);
}

