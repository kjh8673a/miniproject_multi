function logFormCheck() {
    var id = document.getElementById("userid");
    var pwd = document.getElementById("userpwd");
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
    document.getElementById("logFrm").submit();
}