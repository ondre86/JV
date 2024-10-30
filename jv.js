gsap.registerPlugin(ScrollTrigger,CustomEase,TextPlugin)

function $(element){
    return document.querySelectorAll(element)
}

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
const isDark = window.matchMedia(`(prefers-color-scheme: dark)`) === true || window.matchMedia(`(prefers-color-scheme: true)`).matches === true
const isMobile = window.matchMedia(`(max-width: 800px)`) === true || window.matchMedia(`(max-width: 800px)`).matches === true

dialogContent = {
    title: ["Yelp","The MKRT Co.", "Louisiana State University"],
    role: ["Public Relations", "Copywriting", "Research", "Event Planning"],
    txt: [
        [
            "<a href='https://yelp.com' target='_blank' rel='noopener'>Yelp</a> is one of the leading sites for aggregating and sharing user-generated reviews and photos of businesses. <br><br> In addition to providing a hub for quality recommendations, Yelp is a fierce proponent of fostering community in its markets to support local businesses and users.",
            "As the Yelp New Orleans community manager I was the on-the-ground face of the brand in the city and surrounding areas. <br> I managed a vibrant and eclectic community of about 300 engaged Yelp users called the <a href='https://yelp.com/elite' target='_blank' rel='noopener'>Yelp Elite Squad</a>. <br><br> I had the pleasure of working with local business owners and managers to curate and host <a href='https://www.yelp.com/collection/ZkftnfsnHlHIkdX9nAvKOg/Yelp-NOLA-Elite-Events-2023?sort_by=alpha' target='_blank' rel=noreferrer>unique promotional events</a> for those users and the wider New Orleans community to highlight their products and services.", 
            "These duties are best exemplified in my execution of our signature event <a href='https://www.yelp.com/biz/yelp-krewe-du-vieux-tailgate-2023-new-orleans?sort_by=date_desc' target='_blank' rel='noopener'>Yelp's Krewe du Vieux Tailgate</a> This event was held in collaboration with a community partner, <a href='https://nolajazzmuseum.org/events/2023/2/4/yelps-krewe-du-vieux-outdoor-tailgate' target='_blank' rel='noopener'>New Orleans Jazz Museum</a>, to celebrate our local tradition of Mardi Gras. <br><br> The tailgate was a free event and was open to the public with the Yelp Elite Squad getting special perks such as early entry and swag. Over 400 people attended the event, had national beverage sponsors, and featured <a href='https://www.yelp.com/collection/ZkftnfsnHlHIkdX9nAvKOg/Yelp-NOLA-Elite-Events-2023?sort_by=alpha' target='_blank' rel='noreferrer'>14 local business partners</a>. <br><br> I was responsible for pitching and securing the local businesses and sponsors, event day logistics (event flow, security, crowd control, amenities, etc), creating the promotional graphics, executing the marketing, and more.", 
            "In addition, I managed YelpNOLA's social media profiles (<a href='https://www.instagram.com/yelpnola/' target='_blank' rel='noopener'>Instagram</a>, <a href='https://www.facebook.com/YelpNewOrleans/' target='_blank' rel='noopener'>Facebook</a>, and <a href='https://www.twitter.com/yelpnola/' target='_blank' rel='noopener'>Twitter</a>), which had upward of 20k followers combined. I also curated and wrote a themed, weekly roundup of local businesses for our city-wide newsletter with a readership of about 68k and produced a monthly newsletter for the Yelp Elite Squad.", 
        ],
        [
            '<a href="https://www.mrktco.com/" target="_blank" rel="noopener">The MRKT Co.</a> is a premier marketing agency that specializes in outreach to diverse and multicultural audiences. <br><br> <em>"Blending strategic messaging, compelling design, and unignorable creativity, we help companies grow by creating powerful experiences between audience and brand."</em>', 
            "I was brought on as a part-time online community manager to support the agency in executing a campaign for one of its clients, the <a href='https://www.oprah.com/app/own-tv.html' target='_blank' rel='noopener'>Oprah Winfrey Network (OWN)</a>. <br><br> The <a href='https://www.oprah.com/sp/own-your-health.html' target='_blank' rel='noopener'>OWN Your Health campaign</a>. was an initiative that sought to bring awareness to Black women’s health and wellness. ", 
            "As community manager, I worked with the MRKT and OWN teams to write asset and social media copy, foster community engagement in the <a href='https://www.facebook.com/groups/907295180105969/' target='_blank' rel='noopener'>OWN Your Facebook group</a>, curate and develop social media content, and assist with social media strategy.", 
            "I also monitored post analytics and tracked brand sentiments using <a href='https://sproutsocial.com/' target='_blank' rel='noopener'>Sprout Social</a> throughout the campaign to measure effectiveness. ", 
        ],
        [
            "<a href='https://lsu.edu/' target='_blank' rel='noopener'>Louisiana State University</a> is Louisiana’s flagship and a land, sea, and space grant institution. <br><br> During my tenure, I had the pleasure of working with several departments and units. I spent my last few years working in the <a href='https://www.lsu.edu/global-engagement/' target='_blank' rel='noopener'>International Programs department</a> — first as the communication and outreach coordinator for Academic Programs Abroad, and lastly, as the communication and marketing specialist for International Programs as a whole. ", 
            "At Academic Programs Abroad (APA) I was in charge of marketing strategy and execution for our study abroad programs and support services. <br><br> This included but was not limited to, managing our social media accounts as well as curating and creating the content, planning and executing our twice, yearly study abroad fair for the entire student body, coordinating presentations and other in-person marketing opportunities, designing flyers and other creative, and copywriting.", 
            "In addition to those core duties, I oversaw, facilitated, and revamped the LSU Study Abroad Scholarship, supervised a small team of student workers and interns who assisted with marketing tasks and produced and facilitated our staff retreat.", 
            "In 2022, I elevated to communication and marketing specialist for International Programs. Many of my responsibilities mirrored those that I had in APA, but with the inclusion of more high-level projects. <br><br> These included creating and leading a communications committee with members from each of our units, creating detailed standard operating procedures and workflows for marketing tasks and requests, writing press releases, auditing and revamping our departmental websites, and aggregating our yearly data into a comprehensive report for stakeholders.", 
        ],
    ],
    img: [
        ["yelp.png", "yelp-elite.png", "tailgate.webp", "yelp-social.png"],
        ["mrkt.png", "OWN-health.webp", "OWN-group.webp", "sprout.jpg"],
        ["lsu.png", "lsu-start.webp", "lsu-funding.png", "lsu-global.png"],  
    ],
}
dialogContent2 = {
    title: ['Bring Back Websites', "Copy Parking Lot"],
    txt: [
        "Have you ever tried to find a business’ hours only to see that Google says they close at 2:00 p.m. on Tuesdays, Yelp says this location has been reported closed, but they just posted on their Instagram stories, and their website says they’re open seven days a week until 7:00 p.m.? <br><br> Or what about when Instagram is down so you can’t check to see if a business has posted, the hours on Google haven’t been updated recently, so you go to check their website and there are no hours to be found? <br><br> Or, my personal favorite, when the hours on Google are different from those on their Instagram which are different from those on Yelp which are nowhere near similar to the hours on their website. <br><br> You shouldn’t have to turn into Inspector Gadget to find out basic business information. All businesses should have one, easily accessible source of truth for their customers and potential customers on a well-managed and updated website. <br><br> Call me a Boomer, but the decline in well-maintained websites has made me very sad as a consumer and a communicator/marketer. <br><br> In a world where just about all marketing, advertising, and communication has shifted to social media, it’s become more difficult to find what you need easily and trust that the information is reliable. <br><br> There are so many social sites that it can be hard for brands to keep up and post on all of them consistently. This isn’t to say that some brands don’t do a fantastic job with their socials, but what happens when, inevitably, Instagram is down for the day?",
        "<h4 class='bold font-m'>Collaboration</h4> <br> The sole person on my team who handles communication and marketing tasks. Anyone who has ever had to manage even one social media account knows that it’s no small feat, so when you add in strategy, event planning, and anything else that falls under the public relations and marketing umbrella it can be overwhelming. <br><br> I’ve been successful not because I’m superwoman (I only wear that cape on Tuesdays and Thursdays), but because I’ve always had a strong network of people I could brainstorm with and turn to for assistance. We can’t, nor should we, do it all ourselves. <br><br> <h4 class='bold font-m'>Strategy Over Tactics</h4><br> One of the most important things I’ve learned over the years is that a good strategy and strong brand identity will take you far. With a solid foundation, there’s no need for spin or costly stunts (make no mistake, we love a production when it makes sense!). I can help you discover, or get reconnected to, your “why” and build a strategy you can build from. <br><br> <h4 class='bold font-m'>Collaboration is Key</h4> <br> Throughout my career, I’ve often found myself in a team of one. While there are definite pros to that autonomy, it could also be a huge drag. I’m a strong believer that the real magic lies in collaboration."
    ]
}
colors = {
    yellow: "rgb(255, 223, 54)",
    purple: "rgb(247, 199, 255)",
    green: "rgb(196, 236, 153)"
}

// Animations
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
    .from(".intro-wrap .intro", {
        y: 50,
        opacity: 0,
        duration: 1,
    })
    .from("nav", {
        opacity: 0,
        y: -50,
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
        fill: colors.purple,
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
        fill: colors.green,
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
    .to(".js-smiley-char", {
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
    // $(".cta-holster")[1].addEventListener("mouseenter", ()=>{
    //     gsap.to(".cta-holster:nth-of-type(2n) .cta-svg svg", {
    //         scale: 1.15
    //     })
    // })
    // $(".cta-holster")[1].addEventListener("mouseleave", ()=>{
    //     gsap.to(".cta-holster:nth-of-type(2n) .cta-svg svg", {
    //         scale: 1
    //     })
    // })
}

addEventListener("load", (event) => {
    ctaIconZoom()

    master = gsap.timeline()
    .add(fadeInBody(), 0)
    .add(namesScroll(), 0)
    .add(fadeInHeroContent(), ">-=2.85")
    .add(rotateSmileyFace(), ">-=.5")
    // .add(repeatChatText, 0)

    elements = [...$(".projects")[0].children, $(".blog .inner-project-wrap")[0], $(".footer-content-wrap")[0]]
    for (element of elements){
        gsap.from(element, {
            scrollTrigger: element,
            y: 150,
            opacity: 0,
        })
    }

    // DIALOG
    dialogObj = {
        dialog: $("dialog")[0],
        x: $("dialog button")[0],
        title: $(".d-title h4")[0],
        metaRole: $(".dmw")[0],
        metaDate: $(".d-date")[0],
        dcwText: $(".d-txt"),
        dcw: $(".dcw")
    }
    dialogObj2 = {
        dialog: $("dialog")[1],
        x: $("dialog button")[1],
        title: $(".d-title h4")[1],
        txt: $(".d-blog")[0],
    }
    // OPEN
    for (let x = 0; x < $(".js-pop-up").length; x++){
        $(".js-pop-up")[x].addEventListener("click", (e)=>{
            dialogObj.dialog.showModal() 
            if ($(".js-pop-up")[x].getAttribute("data-popup") == x){
                dialogObj.title.innerHTML = dialogContent.title[x]
                dialogObj.metaRole.innerHTML = $(".bmh")[x].innerHTML
                for (let v = 0; v < dialogContent.txt[x].length; v++){
                    dialogObj.dcwText[v].innerHTML = dialogContent.txt[x][v]
                    if (dialogObj.dcw[v].children[1].nodeName != "P"){
                        dialogObj.dcw[v].children[1].src = `assets/img/${dialogContent.img[x][v]}`
                    }
                    else {
                        dialogObj.dcw[v].children[0].src = `assets/img/${dialogContent.img[x][v]}`
                    }
                }
            }
            gsap.to("#project-dialog", {
                y: 0,
                duration: .5,
                ease: "power2.out"
            })
        })
    }
    for (let x = 0; x < $(".blog-post").length; x++){
        $(".blog-post")[x].addEventListener("click", (e)=>{
            dialogObj2.dialog.showModal() 
            if ($(".blog-post")[x].getAttribute("data-popup") == x){
                dialogObj2.title.innerHTML = dialogContent2.title[x]
                dialogObj2.txt.innerHTML = dialogContent2.txt[x]
            }
            gsap.to("#blog-dialog", {
                y: 0,
                duration: .5,
                ease: "power2.out"
            })
        })
    }
    // CLOSE
    $("dialog button")[0].addEventListener("click", (e)=>{
        gsap.to("#project-dialog", {
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
    $("dialog button")[1].addEventListener("click", (e)=>{
        gsap.to("#blog-dialog", {
            y: "100vh",
            duration: .5,
            ease: "power2.out"
        })
        // CLOSE DIALOG
        setTimeout(() => {
            dialogObj2.dialog.close()
        }, 500)

        dialogObj2.dialog.scrollTo(0,0)
    })
    // BOUNDING BOX CLICK TO EXIT
    dialogObj.dialog.addEventListener('click', (event) => {
        let rect = dialogObj.dialog.getBoundingClientRect();
        let isClickInsideDialog = (
            rect.top <= event.clientY && 
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && 
            event.clientX <= rect.left + rect.width
        )
        if (!isClickInsideDialog) {
            gsap.to("#project-dialog", {
                y: "100vh",
                duration: .5,
                ease: "power2.out"
            })
            setTimeout(() => {
                dialogObj.dialog.close()
            }, 500)
        }
    })
    dialogObj2.dialog.addEventListener('click', (event) => {
        let rect = dialogObj2.dialog.getBoundingClientRect();
        let isClickInsideDialog = (
            rect.top <= event.clientY && 
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && 
            event.clientX <= rect.left + rect.width
        )
        if (!isClickInsideDialog) {
            gsap.to("#blog-dialog", {
                y: "100vh",
                duration: .5,
                ease: "power2.out"
            })
            setTimeout(() => {
                dialogObj2.dialog.close()
            }, 500)
        }
    })
})