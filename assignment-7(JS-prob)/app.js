var day = prompt('How long day will you spend in our Motel ?');
var firstTen = 200;
var firstTwenty = 150;
var afterTwenty = 100



if(day <= 10 ){
    var totalCost = day * firstTen;
    document.write('<h2>For ' + day +' days You have to pay :- ' + totalCost +' $ </h2>');
}
else if(day <= 20){
    var totalCost = (firstTen * 10) + ((day-10) * firstTwenty);
    document.write('<h2>For </h2>' + day +'<h2> days You have to pay : </h2>' + totalCost +' $');
}else{
    var totalCost = (firstTen * 10) + (firstTwenty * 10) + ((day-20) * afterTwenty);
    document.write('<h2>For </h2>' + day +'<h2> days You have to pay : </h2>' + totalCost +' $');
}
