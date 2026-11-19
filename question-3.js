// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let passwordCount = userPassword.length;
    let result = "";
    if (passwordCount > 10) {
        result = "Strong"
    } else if (passwordCount >= 6) {
        result = "Medium"
    } else {
        result = "Weak"
    }
    console.log(result);
}

checkPasswordStrength("ssswnalWadqQ");
checkPasswordStrength("TechUp");
checkPasswordStrength("abcde");