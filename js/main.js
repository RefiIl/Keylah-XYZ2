tl= gsap.timeline()
tl.fromTo('#title',{yPercent:-70,opacity:0},{yPercent:0,opacity:1,delay:1,duration:0.9})
tl.fromTo('#description',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.8})
tl.fromTo('#more',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.8})
tl.fromTo('#title_img',{xPercent:10,opacity:0},{xPercent:0,opacity:1,duration:1.2,delay:-0.2,},'-=0.7')

if (window.matchMedia("(min-width: 900px)").matches) {
   gsap.fromTo("#plan1", {
   xPercent:-50,opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 100%", 
       end: "+=600",
    } ,xPercent:0,opacity:1,duration:1.9});
   gsap.fromTo("#plan3", {
   xPercent:50,opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 100%", 
       end: "+=600",
    } ,xPercent:0,opacity:1,duration:1.9});
   gsap.fromTo("#plan2", {
   opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 100%", 
       end: "+=600",
    } ,opacity:1,duration:2.3});
   
    tl1= gsap.timeline({scrollTrigger: {
       trigger: "footer",
       start: "100% 150%", 
       end: "+=600",
    }})
    tl1.fromTo('.feature1',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4})
    tl1.fromTo('.feature2',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature3',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature4',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature5',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature6',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
}
if (window.matchMedia("(max-width: 900px)").matches) {
   gsap.fromTo("#plan1", {
   xPercent:-50,opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 170%", 
       end: "+=600",
    } ,xPercent:0,opacity:1,duration:1.9});
   gsap.fromTo("#plan3", {
   xPercent:50,opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 170%", 
       end: "+=600",
    } ,xPercent:0,opacity:1,duration:1.9});
   gsap.fromTo("#plan2", {
   opacity:0
   
   },{    scrollTrigger: {
       trigger: "#plans",
       start: "100% 170%", 
       end: "+=600",
    } ,opacity:1,duration:2.3});
   
    tl1= gsap.timeline({scrollTrigger: {
       trigger: "footer",
       start: "100% 200%", 
       end: "+=600",
    }})
    tl1.fromTo('.feature1',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4})
    tl1.fromTo('.feature2',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature3',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature4',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature5',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
    tl1.fromTo('.feature6',{yPercent:-20,opacity:0},{yPercent:0,opacity:1,duration:0.4},'-=0.2')
}
