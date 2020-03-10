var mybody = document.getElementsByTagName("body")[0]
                .getElementsByClassName("col-md-12 post-content")[0]
                .getElementsByTagName("strong");
var listA = [];

for(var i = 1;i<102;i++){
    listA.push(mybody[i].innerText);
}

copy(listA.join('\n'));