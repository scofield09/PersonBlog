function getNow(){
    var myDate = new Date();
    return `${myDate.getFullYear()}年${myDate.getMonth()+1}月${myDate.getDate()}日`
}

module.exports.getNow = getNow;