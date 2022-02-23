function logFrmCheck() {
    var id = document.getElementById("logUserid");
    var pwd = document.getElementById("logUserpwd");
    if (id.value == "") {
        alert("아이디를 입력하세요.");
        id.focus();
        return false;
    }
    if(pwd.value=="") {
        alert("비밀번호를 입력하세요.");
        pwd.focus();
        return false;
    }
    // document.getElementById("logFrm").submit();

    return false;
}