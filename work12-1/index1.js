//获取当前年份
year=new Date().getFullYear()
//调用calendar函数，设置cal内容显示年历
document.getElementById("cal").innerHTML=calendar(year)
function setCalendar(year)
{
    document.getElementById('cal').innerHTML = '<div class="box" id="cal"></div>'
    var year =parseInt(year)
    //设置preyear
    var pre = year-1
    console.log(pre)
    //设置curyear
    //设置nextyear
    var next = year+1
    console.log(pre)
    console.log(next)
    document.getElementById('curyear').setAttribute('data-year',year);
    document.getElementById('preyear').setAttribute('data-year',pre);
    document.getElementById('nextyear').setAttribute('data-year',next);
    document.getElementById('curyear').innerText = year
    document.getElementById('preyear').innerText = "<<"+pre
    document.getElementById('nextyear').innerText = next+">>"
    document.getElementById("cal").innerHTML = calendar(year) 
}
