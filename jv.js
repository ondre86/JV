gsap.registerPlugin(ScrollTrigger,CustomEase,TextPlugin)

function $(element){
    return document.querySelectorAll(element)
}

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
const isDark = window.matchMedia(`(prefers-color-scheme: dark)`) === true || window.matchMedia(`(prefers-color-scheme: true)`).matches === true
const isMobile = window.matchMedia(`(max-width: 800px)`) === true || window.matchMedia(`(max-width: 800px)`).matches === true

dialogContent = {
    title: ["Yelp","def", "ghi", "jkl", "mno", "pqr"],
    role: ["Public Relations", "Copywriting", "Research", "Event Planning"],
    dates: ["Q1 2023", "Q3 2022", "Q2 2021", "Q4 2019", "Q2 2017", "Q4 2016", "Q1 2014"],
    txt: [
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", "callous", "doorstep", "elephant", "freeman"],
        ["gangster", "hoover", "inglewood", "killer", "litigious", "maniac"],
        ["niggas", "opening", "pressure", "questions", "ridiculous", "savant"],
        ["trippin", "understand", "voracious", "withstand", "xenon", "yesterday"],
        ["alphabet", "banging", "crip", "delirious", "euphoria", "fugitive"],
        ["greatness", "homeless", "inverted", "justice", "kelvin", "lemonade"],
    ],
    img: [
        ["1-1.jpg", "1-2.jpg", "1-3.jpg", "1-4.jpg", "1-5.jpg", "1-6.jpg"],
        ["2-1.jpg", "2-2.jpg", "2-3.jpg", "2-4.jpg", "2-5.jpg", "2-6.jpg"],
        ["3-1.jpg", "3-2.jpg", "3-3.jpg", "3-4.jpg", "3-5.jpg", "3-6.jpg"],
        ["4-1.jpg", "4-2.jpg", "4-3.jpg", "4-4.jpg", "4-5.jpg", "4-6.jpg"],
        ["5-1.jpg", "5-2.jpg", "5-3.jpg", "5-4.jpg", "5-5.jpg", "5-6.jpg"],
        ["6-1.jpg", "6-2.jpg", "6-3.jpg", "6-4.jpg", "6-5.jpg", "6-6.jpg"]    
    ],
}


// Animation Timelines
function fadeInBody(){
    enterBody = gsap.timeline()
    .to("body", {
        opacity: 1,
        duration: 2,
        ease: "power5.out"
    })
    return enterBody
}
function namesScroll(){
    bgNamesScroll = gsap.timeline()
    .to(".bg-line", {
        opacity: 1,
        duration: .75
    })
    .to(".bg-line",{
        x: -50,
        duration: 5,
        ease: "power5.in"
    }, "<")
    .to(".bg-line:nth-of-type(2n)",{
        x:-350,
        duration: 5,
        ease: "power5.in"
    }, "<")
    return bgNamesScroll
}
function fadeInHeroContent(){
    enterHeroContent = gsap.timeline()
    .from([".name1", ".name2"], {
        opacity: 0,
        stagger: .5
    })
    .from(".title span", {
        opacity: 0,
        stagger: .5,
        delay: .25
    })
    .from(".intro", {
        y: 50,
        opacity: 0,
        duration: 1,
    })
    .to("nav", {
        opacity: 1,
        y: 0,
        duration: 1,
    }, "<")

    return enterHeroContent
}
function rotateSmileyFace(){
    let rotatingSmileyFace = gsap.timeline({repeat:-1})

    .to(".js-smiley-char", {
        rotateY: 90,
        duration: 2
    })
    .fromTo(".smiley-face", {
        rotateY: 90,
        opacity: 1,
    }, {
        rotateY: 0,
        duration: 2
    })
    .to(".smiley-face", {
        delay: 1,
        rotateY: 90,
        duration: 2
    })
    .to("#smiley-fill", {
        fill: "#f7c7ff",
        duration: 0.1
    })
    .to(".smiley-face", {
        rotateY: 0,
        duration: 2
    }) 
    .to(".smiley-face", {
        delay: 1,
        rotateY: 90,
        duration: 2
    })
    .to("#smiley-fill", {
        fill: "#A0D369",
        duration: 0.1
    })
    .to(".smiley-face", {
        rotateY: 0,
        duration: 2
    }) 
    .to(".smiley-face", {
        delay: 1,
        rotateY: 90,
        duration: 2
    })
    .to(".js-smiley-char", {
        rotateY: 0,
        duration: 2
    }) 

    return rotatingSmileyFace
}
function repeatChatText(){
    chat = gsap.timeline({
        scrollTrigger: ".chat2",
        repeat: -1
    }
    )
    .to(".chat2", {
        text: "Meet!",
        duration: 2,
        ease: "power5.in",
        delay: 1
    })
    .to(".chat2", {
        text: "Chat!",
        duration: 2,
        ease: "power5.in",
        delay: 1
    })
    return chat
}

function ctaIconZoom(){
    $(".cta-holster")[0].addEventListener("mouseenter", ()=>{
        gsap.to(".cta-holster:first-of-type .cta-svg svg", {
            scale: 1.15
        })
    })
    $(".cta-holster")[0].addEventListener("mouseleave", ()=>{
        gsap.to(".cta-holster:first-of-type .cta-svg svg", {
            scale: 1
        })
    })
    $(".cta-holster")[1].addEventListener("mouseenter", ()=>{
        gsap.to(".cta-holster:nth-of-type(2n) .cta-svg svg", {
            scale: 1.15
        })
    })
    $(".cta-holster")[1].addEventListener("mouseleave", ()=>{
        gsap.to(".cta-holster:nth-of-type(2n) .cta-svg svg", {
            scale: 1
        })
    })
}


addEventListener("load", (event) => {
    master = gsap.timeline()
    .add(fadeInBody(), 0)
    .add(namesScroll(), 0)
    .add(fadeInHeroContent(), ">-=2.85")
    .add(rotateSmileyFace(), ">-=.5")
    .add(repeatChatText, 0)



    gsap.from("button", {
        scrollTrigger: {
            trigger: ".project3",
            start: "top bottom-=15%",
            end: "+=10%",
            scrub: 0
        },
        y: 100,
        opacity: 0,
    })


    ctaIconZoom()


// DIALOG
    // INITIALIZE
        dialogObj = {
            dialog: $("dialog")[0],
            x: $("dialog button")[0],
            title: $(".d-title h4")[0],
            metaRole: $(".dmw")[0],
            metaDate: $(".d-date")[0],
            dcwText: $(".d-txt"),
            dcw: $(".dcw")
        }
    // OPEN
        for (let x = 0; x < $(".js-pop-up").length; x++){
            $(".js-pop-up")[x].addEventListener("click", (e)=>{
                dialogObj.dialog.showModal() 
                if ($(".js-pop-up")[x].getAttribute("data-popup") == x){
                    dialogObj.title.innerHTML = dialogContent.title[x]
                    dialogObj.metaRole.innerHTML = $(".bmh")[x].innerHTML
                    dialogObj.metaDate.innerHTML = dialogContent.dates[x]
                    for (let v = 0; v < dialogContent.txt[0].length; v++){
                        dialogObj.dcwText[v].innerHTML = dialogContent.txt[x][v]
                        dialogObj.dcw[v].children[1].src = `assets/img/${dialogContent.img[x][v]}`
                    }
                }
                gsap.to("dialog", {
                    y: 0,
                    duration: .5,
                    ease: "power2.out"
                })
            })
        }
    // CLOSE
        $("dialog button")[0].addEventListener("click", (e)=>{
            gsap.to("dialog", {
                y: "100vh",
                duration: .5,
                ease: "power2.out"
            })
            // CLOSE DIALOG
            setTimeout(() => {
                dialogObj.dialog.close()
            }, 500)

            dialogObj.dialog.scrollTo(0,0)
        })
    // BOUNDING BOX CLICK TO EXIT
        dialogObj.dialog.addEventListener('click', function(event) {
            var rect = dialogObj.dialog.getBoundingClientRect();
            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                gsap.to("dialog", {
                    y: "100vh",
                    duration: .5,
                    ease: "power2.out"
                })
            // CLOSE DIALOG
            setTimeout(() => {
                dialogObj.dialog.close()
            }, 500);
            }
        })
})

window.addEventListener("resize", (e)=>{
    // console.log("flip")
})