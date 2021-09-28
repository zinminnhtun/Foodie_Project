let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top");


let headerControl = new Waypoint({
    element : document.getElementById("about"),
    handler : function (direction) {
        if(direction == "down"){
            header.classList.add('shadow');
            header.classList.add('animate__fadeInDown');
            scrollToTop.classList.add('d-block','animate__fadeInUp');
        }else{
            header.classList.remove('shadow');
            header.classList.remove('animate__fadeInDown');
            scrollToTop.classList.remove('d-block','animate__fadeInUp');
        }
    },
    offset : '95%'
});
ScrollReveal({
    origin : "top",
    distance : "30px",
    duration : 1000,
    reset : true,
}).reveal(".content-reveal",{
    interval : 200,
})