var mybody = document.getElementsByTagName("body")[0]
                .getElementsByTagName("table")[0]
                .getElementsByTagName("tbody")[0]
                .getElementsByClassName("prob-origin text-xs-center");

var listA = [];

for(var i = 0;i<mybody.length;i++){
    listA.push(mybody[i].innerText);
}

copy(listA.join('\n'));