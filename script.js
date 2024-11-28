function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function navanimation(){
var nav = document.querySelector("nav")
var navbottom = document.querySelector("#nav-bottom")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()

    tl.to(navbottom,{
        height:"22vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()

    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to(navbottom,{
        height:"0vh",
        duration:0.2
    })  
})
}
function page2animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
        gsap.to(elem.childNodes[5],{
            scale:1.5,
            color:"#111"
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
        gsap.to(elem.childNodes[5],{
            scale:1,
            color:"#fff"
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x - 50,
            y:dets.y - elem.getBoundingClientRect().y - 130
        })
    })
})
}
function page3animation(){
    var page3Center = document.querySelector(".page3-center") 
var video = document.querySelector("#page3 video")
var icon = document.querySelector(".page3-center icon i")
page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}
function page6animation(){
    var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].play()
        gsap.to(elem.childNodes[3],{
            opacity:1
        })
        gsap.to(elem.childNodes[5],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].load()
        gsap.to(elem.childNodes[3],{
            opacity:0
        })
        gsap.to(elem.childNodes[5],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[5],{
            x:dets.x - elem.getBoundingClientRect().x - 50,
            y:dets.y - elem.getBoundingClientRect().y - 50
        })
    })
})
}
function page7animation(){
    var p7Elem = document.querySelectorAll(".p7container-elem")

p7Elem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[1],{
            transform: "translateY(0%)",
            opacity:1,
            duration:0.5
        })
        gsap.to(elem.childNodes[3],{
            transform: "translateX(1%)",
            duration:0.5
        })
        gsap.to(elem.childNodes[7],{
            transform: "translateX(-100%)",
            duration:0.5
        })
    })
    elem.addEventListener("mouseleave",function(){
        var tl = gsap.timeline()
        tl.to(elem.childNodes[1],{
            transform: "translateY(100%)",
            opacity:0,
            duration:0.5
        },"anim")
        tl.to(elem.childNodes[3],{
            transform: "translateX(0%)",
            duration:0.5
        },"anim")
        tl.to(elem.childNodes[7],{
            transform: "translateX(0%)",
            duration:0.5
        },"anim")
        tl.to(elem.childNodes[1],{
            transform: "translateY(-100%)",
            opacity:0
        })
    })
})
var icon = document.querySelector(".arrow-click i")
var clickDiv = document.querySelector(".click-div")

clickDiv.addEventListener("click",function(){
    gsap.to(icon,{
        rotate:"180deg"
    })
})
}
function page8animation(){
    gsap.from(".btm8-parts h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btm8-parts",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}

locomotiveanimation()
navanimation()
page2animation()
page3animation()
page6animation()
page7animation()
page8animation()

