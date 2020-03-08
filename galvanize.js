var mybody = document.getElementsByTagName("body")[0].getElementsByClassName("word dynamictext"); 

var listA = [];

for(var i = 0;i<mybody.length;i++){
    listA.push(mybody[i].innerText);
}

copy(listA.join('\n'));