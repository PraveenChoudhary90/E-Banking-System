const autoPassword = ()=>{
    let string = "qwertyuiopasdfghjklzxcvbnm1234567890{}:><?@QWERTYUIOPASDFGHJKLZXCVBNM"
    let pass = ""
    for(var i = 0 ; i<8;i++)
    {
     let myno = Math.floor(Math.random()*string.length)
     pass += string.charAt(myno)
    }
    return pass;
}
module.exports = {
    autoPassword
}