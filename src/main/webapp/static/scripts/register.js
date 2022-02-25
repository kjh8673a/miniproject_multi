$(function(){
    $("#regFrm").submit(function(){
        return formCheck();
    });
});

function formCheck() {
    var error = document.querySelectorAll('.regError');
    
    // 아이디
    var reg = /^[a-z0-9]{5,20}$/;
    if($("#regUserid").val()=="") {
        error[0].innerHTML = "아이디를 입력하세요."
        error[0].style.display = "block";
        $("#regUserid").focus();
        return false;
    } else if(!reg.test($("#regUserid").val())) {
        error[0].innerHTML = "5~20자의 영문 소문자, 숫자만 사용 가능합니다."
        error[0].style.display = "block";
        $("#regUserid").focus();
        return false;
    } else { error[0].style.display = "none"; }

    // 비밀번호
    reg = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/;
    if($("#regUserpwd1").val()=="") {
        error[1].innerHTML = "비밀번호를 입력하세요";
        error[1].style.display = "block";
        $("#regUserpwd1").focus();
        return false;
    } else if(!reg.test($("#regUserpwd1").val())) {
        error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        error[1].style.display = "block";
        $("#regUserpwd1").focus();
        return false;
    } else if($("#regUserpwd1").val() != $("#regUserpwd2").val()) {
        error[1].innerHTML = "비밀번호가 일치하지 않습니다.";
        error[1].style.display = "block";
        $("#regUserpwd2").focus();
        return false;
    } else { error[1].style.display = "none"; }

    // 이름
    reg = /^[가-힣a-zA-Z]{1,40}$/;
    if($("#regUsername").val()=="") {
        error[2].innerHTML = "이름을 입력하세요.";
        error[2].style.display = "block";
        $("#regUsername").focus();
        return false;
    } else if(!reg.test($("#regUsername").val())) {
        error[2].innerHTML = "한글과 영문 대 소문자를 사용하세요.";
        error[2].style.display = "block";
        $("#regUsername").focus();
        return false;
    } else { error[2].style.display = "none"; }

    // 생년월일
    reg = /^[0-9]{4}$/;
    if(!reg.test($("#regBirthYear").val())) {
        error[3].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        error[3].style.display = "block";
        $("#regBirthYear").focus();
        return false;
    } else if($("#regBirthMonth").val()=="none") {
        error[3].innerHTML = "태어난 월을 선택하세요.";
        error[3].style.display = "block";
        $("#regBirthMonth").focus();
        return false;
    } else { error[3].style.display = "none"; }

    reg = /^[0-9]{1,2}$/;
    if(!reg.test($("#regBirthDate").val())) {
        error[3].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
        error[3].style.display = "block";
        $("#regBirthDate").focus();
        return false;
    } else { error[3].style.display = "none"; }

    if($("#regBirthDate").val() > 31) {
        error[3].innerHTML = "생년월일을 다시 확인해주세요.";
        error[3].style.display = "block";
        $("#regBirthDate").focus();
        return false;
    } else if(($("#regBirthMonth").val()==4 || $("#regBirthMonth").val()==6 || $("#regBirthMonth").val()==9 || $("#regBirthMonth").val()==11) && $("#regBirthDate").val()==31) {
        error[3].innerHTML = "생년월일을 다시 확인해주세요.";
        error[3].style.display = "block";
        $("#regBirthDate").focus();
        return false;
    } else if ($("#regBirthMonth").val()==2) {
        var lunarchk = ($("#regBirthYear").val()%4==0 && ($("#regBirthYear").val()%100!=0 || $("#regBirthYear").val()%400==0));
        if($("#regBirthDate").val()>29 || ($("#regBirthDate").val()==29 && !lunarchk)) {
            error[3].innerHTML = "생년월일을 다시 확인해주세요.";
            error[3].style.display = "block";
            $("#regBirthDate").focus();
            return false;
        }
    } else { error[3].style.display = "none"; }

    // 성별
    if($("#regGender").val()=="none") {
        error[4].innerHTML = "성별을 선택하세요.";
        error[4].style.display = "block";
        $("#regGender").focus();
        return false;
    } else { error[4].style.display = "none"; }

    // MBTI
    if($("#regMBTI").val()=="none") {
        error[4].innerHTML = "MBTI를 선택하세요.";
        error[4].style.display = "block";
        $("#regMBTI").focus();
        return false;
    } else { error[4].style.display = "none"; }

    return false;
}