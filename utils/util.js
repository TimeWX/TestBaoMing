//获取当前时间,格式为'05-13 13:31'
function formatTime(date) {
  //var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  //var second = date.getSeconds()


  return [month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

//格式化开始日期,格式为'2019-05-13'
function formatStartDate(date){
  let year=date.getFullYear();
  let month= date.getMonth()+1;
  let day=date.getDate();
  return [year,month,day].map(formatNumber).join('-');
}

//格式化结束日期,不能超过半年时间
function formatEndDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 7;
  if(month>12){
    year=year+1;
    month=month-12;
  }
  let day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatStartDate: formatStartDate,
  formatEndDate: formatEndDate
}
