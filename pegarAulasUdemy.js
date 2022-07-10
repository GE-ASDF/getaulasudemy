let list = document.querySelectorAll(".panel--content--2q9WW .unstyled-list li");

list.forEach(i=>{
    let curriculum = i.querySelector(".truncate-with-tooltip--ellipsis--2-jEx");
    console.log(curriculum.textContent);
});

//for(let i = 0; i < list.length;i++){
//    let curriculum = list[i].querySelector(".truncate-with-tooltip--ellipsis--2-jEx")
//       console.log(curriculum.textContent)
//}
