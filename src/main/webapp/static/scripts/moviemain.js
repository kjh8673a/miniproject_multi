window.onload = function() {
    const container = document.querySelector('.container');
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    const firstSlide = document.querySelector('.inner:nth-child(1)');
    const secondSlide = document.querySelector('.inner:nth-child(2)');
    const thirdlide = document.querySelector('.inner:nth-child(3)');
    const fourthSlide = document.querySelector('.inner:nth-child(4)');
    
    // 버튼1~4로 슬라이드 이동
    document.querySelector('.btn1').addEventListener('click', function(){
        document.querySelector('.showing').classList.remove('showing');
        firstSlide.classList.add('showing');
        container.style.transform = 'translate(0)';
    });
    document.querySelector('.btn2').addEventListener('click', function(){
        document.querySelector('.showing').classList.remove('showing');
        secondSlide.classList.add('showing');
        container.style.transform = 'translate(-100vw)';
    });
    document.querySelector('.btn3').addEventListener('click', function(){
        document.querySelector('.showing').classList.remove('showing');
        thirdlide.classList.add('showing');
        container.style.transform = 'translate(-200vw)';
    });
    document.querySelector('.btn4').addEventListener('click', function(){
        document.querySelector('.showing').classList.remove('showing');
        fourthSlide.classList.add('showing');
        container.style.transform = 'translate(-300vw)';
    });

    // prev버튼
    prevBtn.addEventListener('click', function(){
        if(firstSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            fourthSlide.classList.add('showing');
            container.style.transform = 'translate(-300vw)';
        }else if(secondSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            firstSlide.classList.add('showing');
            container.style.transform = 'translate(0)';
        }else if(thirdlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            secondSlide.classList.add('showing');
            container.style.transform = 'translate(-100vw)';
        }else if(fourthSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            thirdlide.classList.add('showing');
            container.style.transform = 'translate(-200vw)';
        }
    });

    // next버튼
    nextBtn.addEventListener('click', function(){
        if(firstSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            secondSlide.classList.add('showing');
            container.style.transform = 'translate(-100vw)';
        }else if(secondSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            thirdlide.classList.add('showing');
            container.style.transform = 'translate(-200vw)';
        }else if(thirdlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            fourthSlide.classList.add('showing');
            container.style.transform = 'translate(-300vw)';
        }else if(fourthSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            firstSlide.classList.add('showing');
            container.style.transform = 'translate(0)';
        }
    });

    // 슬라이드 자동 이동
    function showslide() {
        if(firstSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            secondSlide.classList.add('showing');
            container.style.transform = 'translate(-100vw)';
        }else if(secondSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            thirdlide.classList.add('showing');
            container.style.transform = 'translate(-200vw)';
        }else if(thirdlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            fourthSlide.classList.add('showing');
            container.style.transform = 'translate(-300vw)';
        }else if(fourthSlide.classList.contains('showing')) {
            document.querySelector('.showing').classList.remove('showing');
            firstSlide.classList.add('showing');
            container.style.transform = 'translate(0)';
        }
    }
    function autoslide() {
        setInterval(showslide, 3000);
    }
    autoslide();
}
