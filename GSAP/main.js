var t1 = gsap.timeline({defaults:{duration:0.8}});

var rule = CSSRulePlugin.getRule('.head-1::after');

t1.from('.box',{x:'600px',ease:'back.out(1.7)'})
    .to(rule,{cssRule:{scaleY:0}})
    .from('.anim',{opacity:0,x:-5,stagger:0.8},'-=1');

const animBtn = document.querySelector('.anim-btn');

animBtn.addEventListener('click',function(){

    // Selecting the pseudo selector of an element by CSSRule plugin


    // // Using animation on box
    // gsap.from('.showcase-content',{duration:1,delay:1.5,opacity:0,x:'-5px'});
    // // gsap.from('.box',{duration:1,delay:0.5,opacity:0,y:'10px',ease:'back.out(1.7)'})
    // gsap.from('.box',{duration:1,delay:0.5,x:'600px',ease:'back.out(1.7)'});
    // gsap.from('.anim',{duration:1,delay:1.5,opacity:0,stagger:0.8});

    // // Animating element with pseudo selector
    // gsap.to(rule,{cssRule:{scaleY:0},duration:0.8,delay:1.5});

    // Now using TimelineMax to animate elements in a sequence
    

    t1.reverse();
})