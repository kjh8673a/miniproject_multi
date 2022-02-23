$(function(){
    $("#regFrm").submit(function(){
        return formCheck();
    });
});

function formCheck() {
    // 아이디
    var reg = /^[a-z]{1}[a-z0-9]{4,19}$/;
    if($("#regUserid").val()=="") {
        alert("아이디를 입력하세요");
        $("#regUserid").focus();
        return false;
    }
    if(!reg.test($("#regUserid").val())) {
        alert("아이디를 잘못입력하였습니다.\n5~20자의 영문 소문자, 숫자만 사용 가능합니다.");
        $("#regUserid").focus();
        return false;
    }

    // 비밀번호
    reg = /^[a-zA-Z0-9]{8,16}$/;
    if($("#regUserpwd1").val()=="") {
        alert("비밀번호를 입력하세요");
        $("#regUserpwd1").focus();
        return false;
    }
    if(!reg.test($("#regUserpwd1").val())) {
        alert("비밀번호를 잘못입력하였습니다.\n8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        $("#regUserpwd1").focus();
        return false;
    }
    if($("#regUserpwd1").val() != $("#regUserpwd2").val()) {
        alert("비밀번호가 일치하지 않습니다.");
        $("#regUserpwd2").focus();
        return false;
    }

    // 이름
    reg = /^[가-힣a-zA-Z]{1,40}$/;
    if($("#regUsername").val()=="") {
        alert("이름을 입력하세요");
        $("#regUsername").focus();
        return false;
    }
    if(!reg.test($("#regUsername").val())) {
        alert("이름을 잘못입력하였습니다.\n한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)")
        $("#regUsername").focus();
        return false;
    }

    // 생년월일
    reg = /^[0-9]{4}$/;
    if(!reg.test($("#regBirthYear").val())) {
        alert("태어난 년도 4자리를 정확하게 입력하세요.")
        $("#regBirthYear").focus();
        return false;
    }
    if($("#regBirthMonth").val()=="none") {
        alert("태어난 월을 선택하세요.");
        $("#regBirthMonth").focus();
        return false;
    }
    reg = /^[0-9]{1,2}$/;
    if(!reg.test($("#regBirthDate").val())) {
        alert("태어난 일(날짜) 2자리를 정확하게 입력하세요.")
        $("#regBirthDate").focus();
        return false;
    }
    if($("#regBirthDate").val() > 31) {
        alert("생년월일을 다시 확인해주세요.")
        $("#regBirthDate").focus();
        return false;
    } else if(($("#regBirthMonth").val()==4 || $("#regBirthMonth").val()==6 || $("#regBirthMonth").val()==9 || $("#regBirthMonth").val()==11) && $("#regBirthDate").val()==31) {
        alert("생년월일을 다시 확인해주세요.")
        $("#regBirthDate").focus();
        return false;
    } else if ($("#regBirthMonth").val()==2) {
        var lunarchk = ($("#regBirthYear").val()%4==0 && ($("#regBirthYear").val()%100!=0 || $("#regBirthYear").val()%400==0));
        if($("#regBirthDate").val()>29 || ($("#regBirthDate").val()==29 && !lunarchk)) {
            alert("생년월일을 다시 확인해주세요.")
            $("#regBirthDate").focus();
            return false;
        }
    }

    // 성별
    if($("#regGender").val()=="none") {
        alert("성별을 선택하세요.");
        $("#regGender").focus();
        return false;
    }

    // MBTI
    if($("#regMBTI").val()=="none") {
        alert("MBTI를 선택하세요.");
        $("#regMBTI").focus();
        return false;
    }

    return false;
}