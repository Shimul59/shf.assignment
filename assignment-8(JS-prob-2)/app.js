var name1 = prompt('Enter your first friend Name ?');
    name2 = prompt('Enter your second friend Name ?');
    name3 = prompt('Enter your theird friend Name ?');

    name1Len = name1.length;
    name2Len = name2.length;
    name3Len = name3.length;

    longName = Math.max(name1Len, name2Len, name3Len);

if (longName == name1Len){
    document.write('<h4> Your best friend name is </h4> ' +'<h2>'+ name1 +'</h2>')
}
else if(longName == name2Len){
    document.write('<h4> Your best friend name is </h4> ' + '<h2>'+ name2 +'</h2>');
}else{
    document.write('<h4> Your best friend name is </h4> ' + '<h2>'+ name3 +'</h2>')
};