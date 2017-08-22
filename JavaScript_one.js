
var  today = new Date();
var  nowHours = today.getHours();
var  str ;

if (nowHours >16){
    str = '下午好';
}else if (nowHours >10){
    str = '上午好';
}

document.write('<h3>' +str +'</h3>');
