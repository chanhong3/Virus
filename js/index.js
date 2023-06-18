//안사라지는 코드
gsap.timeline({
    scrollTrigger: {
        trigger: ".sec1", // 객체기준범위
        pin: true, // 고정
        start: "top top", // 시작점
        end: "bottom bottom", // 끝점
        scrub: 0.5, // 모션바운스
        //markers: true, // 개발가이드선
    }
})

    .to('.sec1_tit1', { duration: 0.3, opacity: 1 })

    .to('.sec1_tit2', { duration: 0, delay: 0.3 })
    .to('.sec1_tit2', { duration: 0.5, opacity: 1 })

    .to('.sec1_tit3', { duration: 1, opacity: 1 })
    .to('.sec1_tit3', { duration: 0, delay: 1 });


//사라지는 코드
gsap.timeline({
    scrollTrigger: {
        trigger: ".sec2", // 객체기준범위
        pin: true, // 고정
        start: "30% 50%", // 시작점
        end: "bottom bottom", // 끝점
        scrub: 0.5, // 모션바운스
        //markers: true, // 개발가이드선
    }
})
.to('.sec2_tit1', { duration: 0.3, opacity: 0.2, y: 0 })

.to('.sec2_tit2', {
    duration: 0.3, opacity: 1, y: 0, onComplete: function () {
        console.log('두번째 문구등장!');
    }
})
.to('#virus1', { duration: 0.3, opacity: 1, y: 0 })
.to('#virus1', { duration: 0, delay: 1 })

.to('.sec2_tit2', { duration: 0, delay: 1 })
.to('.sec2_tit2', { duration: 0.3, opacity: 0.2, y: 0 })

.to('.sec2_tit3', { duration: 0.3, opacity: 1, y: 0 })
.to('.sec2_tit3', { duration: 0, delay: 1 })

.to('#virus4', { duration: 0.3, opacity: 0.4, y: 0 })
.to('#virus4', { duration: 0, delay: 1 })


//가로 스크롤
var $sections = document.querySelectorAll(".horizon_box");
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec4",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=300%",
    }
});
tl.from($sections, { x: '300%', autoAlpha: 0, duration: 2, ease: "none", stagger: 3 })
    .to($sections, { duration: 3 });


//글자 밑줄
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('span').forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: 'top center',
        // toggleClass: 'active', // reverses when you scroll back
        onEnter: () => span.classList.add('active'),
        //markers: true,
    })
})

//프로그레스바
window.onscroll = function () {
    progressBar()
};

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}

// 위로 올라가는 버튼
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var button = document.getElementById('top')
button.addEventListener('click',scrollToTop)

//스르륵 이동
    $("#sec1_btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#sec1").offset().top
        }, 800);
    });
    $("#sec3_btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#sec3").offset().top
        }, 800);
    });
    $("#sec4_btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#sec4").offset().top
        }, 800);
    });
    $("#sec5_btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#sec5").offset().top
        }, 800);
    });