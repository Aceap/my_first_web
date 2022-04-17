function validate_required(target) {
    return !(target.value == null || target.value == "");
}

function valid_string_equal(str1, str2) {
    return str1 == str2;
}

function valid_character(ch) {
    return !(ch >= "0" && ch <= "9");
}

function valid_length(str, min, max) {
    return str.length >= min && str.length <= max;
}

function validata_email(email) {
    let apos = email.indexOf("@");
    if (apos == -1) {
        return false;
    }
    let dotpos = email.lastIndex(".");
    return dotpos - apos > 1;
}

function validForm() {
    let userName = document.getElementById("userName");
    let pwd = document.getElementById("pwd");
    let repwd = document.getElementById("repwd");
    let email = document.getElementById("email");
    if (!validate_required(userName)) {
        alert("请输入登录使用的用户名！");
        return false;
    }
    if (!valid_character(userName.value.charAt(0))) {
        alert("登录用户名的首字符不能是数字！");
        return false;
    }
    if (!valid_length(userName.value, 6, 20)) {
        alert("登录用户名的长度应当在6到20个字符（含）之间！");
        return false;
    }
    if (!valid_string_equal(pwd, repwd)) {
        alert("两次输入的密码不一致！");
        return false;
    }
    if (!validata_email(email.value)) {
        alert("请输入合法的邮箱地址，如“aa@yahoo.com”！");
        return false;
    }
    return true;
}