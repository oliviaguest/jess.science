var $cont = $('#content'),
  itemsArr = $cont.children().get();


$cont.append(shuffle(itemsArr))

console.log(itemsArr);

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}