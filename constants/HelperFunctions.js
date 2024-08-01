import gsap from 'gsap'
import { DiPython } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { FaGithub, FaGitSquare, FaBootstrap } from "react-icons/fa";
import { FiFigma } from 'react-icons/fi'
import { SiMongodb } from "react-icons/si";
import { DiJavascript1, DiGoogleCloudPlatform } from 'react-icons/di'
import { SiFlask, SiMaterialUi, SiAdobexd, SiCss3, SiHtml5, SiNpm, SiAdobephotoshop, SiNextDotJs, SiReact, SiRedux, SiNodeDotJs, SiAdobeillustrator, SiDjango, SiTailwindcss, SiJava } from 'react-icons/si'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { CgNpm } from "react-icons/cg"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import classyStore from "../public/png/classy-store.png"
import classyTV from "../public/png/classy-tv.png"
import classyChat from "../public/png/classy-chat.png"
import classyMedia from "../public/png/classy-media.png"
import blog1 from "../public/png/filter(1).png"
import blog2 from "../public/png/useOnClickOutside(1).png"
import blog3 from "../public/png/debouncing-throttling.png"

export const sectionRefs = new Array(6)
export const navRef = new Array(6)
export const mobNavRef = new Array(6)

let lastScrollPosition = 0


export function distributeByPosition(vars) {
    var ease = vars.ease,
        from = vars.from || 0,
        base = vars.base || 0,
        axis = vars.axis,
        ratio = { center: 0.5, end: 1, edges: 0.5 }[from] || 0,
        distances;
    return function (i, target, a) {
        var l = a.length,
            originX, originY, x, y, d, j, minX, maxX, minY, maxY, positions;
        if (!distances) {
            distances = [];
            minX = minY = Infinity;
            maxX = maxY = -minX;
            positions = [];
            for (j = 0; j < l; j++) {
                d = a[j].getBoundingClientRect();
                x = (d.left + d.right) / 2; //based on the center of each element
                y = (d.top + d.bottom) / 2;
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
                positions[j] = { x: x, y: y };
            }
            originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0;
            originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0;
            maxX = 0;
            minX = Infinity;
            for (j = 0; j < l; j++) {
                x = positions[j].x - originX;
                y = originY - positions[j].y;
                distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
                if (d > maxX) {
                    maxX = d;
                }
                if (d < minX) {
                    minX = d;
                }
            }
            distances.max = maxX - minX;
            distances.min = minX;
            distances.v = l = (vars.amount || (vars.each * l) || 0) * (from === "edges" ? -1 : 1);
            distances.b = (l < 0) ? base - l : base;
        }
        l = (distances[i] - distances.min) / distances.max;
        return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
    };
}

export function killTimeline(timeline) {
    const targets = timeline.getChildren()

    for (let target of targets) {
        if (target.targets().length) {
            gsap.set(target.targets(), { clearProps: "all" })
        }
    }
}


export const SkillData = {
    0: {
        icon: DiPython,
        name: 'Python',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "1 year of AI ML experiments",
    },
    1: {
        icon: FaGithub,
        name: 'Github',
        info: 'Powerful modern application for code management',
        stars: "4",
        ex: "2 years of building and debugging",
    },
    2: {
        icon: SiMongodb,
        name: 'MongoDB',
        info: 'Powerful modern database management',
        stars: "4",
        ex: "6 months of building and debugging",
    },
    3: {
        icon: FaGitSquare,
        name: 'Git',
        info: 'Powerful modern application for code management',
        stars: "4",
        ex: "2 years of building and debugging",
    },
    4: {
        icon: SiHtml5,
        name: 'HTML 5',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of structuring web pages",
    },
    5: {
        icon: SiCss3,
        name: 'CSS 3',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of styling and designing",
    },
    6: {
        icon: SiAdobephotoshop,
        name: 'Photoshop',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "2 years of graphic designing",
    },
    7: {
        icon: SiNextDotJs,
        name: 'Next.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "1 year of building and debugging",
    },
    8: {
        icon: SiReact,
        name: 'React.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "2 years of building and debugging",
    },
    9: {
        icon: SiRedux,
        name: 'Redux Toolkit',
        info: 'Powerful modern application for state management',
        stars: "4.5",
        ex: "2 years of building and debugging",
    },
    10: {
        icon: FiFigma,
        name: 'Figma',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 years of using figma for designs",
    },
    11: {
        icon: DiJavascript1,
        name: 'Javascript',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of building and debugging",
    },
    12: {
        icon: SiNodeDotJs,
        name: 'Node.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 years of building and debugging",
    },
    13: {
        icon: SiAdobeillustrator,
        name: 'Illustrator',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "3 months of using AI for designing.",
    },
    14: {
        icon: FaBootstrap,
        name: 'Bootstrap',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 year of building and debugging",
    },
    15: {
        icon: SiTailwindcss,
        name: 'Tailwind CSS',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "1 year of web designing",
    },
    16: {
        icon: SiMaterialUi,
        name: 'Material UI',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3.5",
        ex: "5 months of UI project",
    },
}

export const featuredProjects = [
    {
        name: "Classy Store",
        intro: "Classy Store is an FullStack e-commerce platform based on the theme Electronics & Gadgets. It's for shoppers who want best deal in a small amount of time at a fast speed. You can buy products in your favourite category on Classy Store.",
        features: ["Complete checkout process", "Product filter for easy access", "Engaging design", "Fully responsive"],
        link: "https://classystore.vercel.app/",
        tech: [{
            icon: <SiReact />,
            name: "ReactJS"
        }, {
            icon: <SiCss3 />,
            name: "CSS 3"
        }],
        image: classyStore
    }, {
        name: "Classy Media",
        intro: "A social media platform inspired from twitter and mixing it to one to provide users the best of both platform. 'Share moments' - 'Connect' - 'Know the world'",
        features: ["Photo post with caption", "Follow/Unfollow users", "Comment and like posts", "Great user experience"],
        link: "https://classymedia.vercel.app/",
        tech: [{
            icon: <SiNextDotJs />,
            name: "ReactJS"
        }, {
            icon: <SiRedux />,
            name: "Redux"
        }, {
            icon: <SiCss3 />,
            name: "CSS 3"
        }],
        image: classyMedia
    }, {
        name: "Classy TV",
        intro: "Classy TV is a FullStack Video library platform for tech enthusiasts. It shows videos based on New gadgets, Music, World etc. You can like videos, add to watchlater and can create your own playlist. Proper History management and CRUD functionalities.",
        features: ["Playlist management", "Watch later feature", "Integrated notes with timestamp", "Great user experience"],
        link: "https://classytv.vercel.app/",
        tech: [{
            icon: <SiReact />,
            name: "ReactJS"
        }, {
            icon: <SiRedux />,
            name: "Redux"
        },{
            icon: <SiCss3 />,
            name: "CSS 3"
        }],
        image: classyTV
    }, {
        name: "Classy Chat",
        intro: "Classy Chat is a FullStack Chat App. Live chats, connect, share moments, creative emojis and notification sound.",
        features: ["Live chat", "Instant notification", "Crazy UI", "Authentication"],
        link: "https://classychat.onrender.com/",
        tech: [{
            icon: <SiNextDotJs />,
            name: "ReactJS"
        }, {
            icon: <SiCss3 />,
            name: "CSS 3"
        }, {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },{
            icon: <SiNodeDotJs />,
            name:"Node JS"
        }],
        image: classyChat
    }
]

export const featuredBlogs = [
    {
        title: "How to create a reusable useOnClickOutside hook?",
        time: "3 minutes read",
        des: "While creating UI components in react, we might have come across situations where we want some action to happen if the user clicks outside of a certain element. E.g In modals, if a user clicks on the overlay the modal closes.",
        img: blog2,
        link: "https://medium.com/@leader.akashak/how-to-create-a-reusable-useonclickoutside-hook-in-react-cc5403e20519"
    },
    {
        title: "How to use Map, Filter & Reduce",
        time: "10 minutes read",
        des: "Let's understand some important functions of them, that are map, filter and reduce. You definitely have heard about them. You probably know about them. But are they still confusing to you? Let's make them beautifully more clearer to you via beautiful examples.",
        img: blog1,
        link: "https://medium.com/@leader.akashak/map-filter-reduce-functions-in-javascript-made-easy-6c31cdb7d198"
    },
    {
        title: "How to use Debouncing & Throttling",
        time: "9 minutes read",
        des: "In this article, we will discuss and understand debouncing and throttling in javascript, which are very useful when it comes to the performance of a website.",
        img: blog3,
        link: "https://medium.com/@leader.akashak/understand-debouncing-and-throttling-in-javascript-with-examples-a3bcc8eccf57"
    }
]

export function getSkillIcon(index, data) {
    let Temp
    if (data === "Skill") {
        Temp = SkillData[index].icon
    } else {
        Temp = featuredProjects[index]?.tech[data].icon
    }
    return <Temp />
}

export function loadStars(count) {
    let split = count.split('.')
    let blank = split.length == 2 ? 4 - parseInt(split[0]) : 5 - parseInt(split[0])
    let arr = []
    let i = 0;
    while (i < split[0]) {
        arr.push(<FaStar key={i} size={15} />)
        i++
    }
    if (split.length == 2) {
        arr.push(<FaStarHalfAlt key={7} size={15} />)
    }
    i = 0
    while (i < blank) {
        arr.push(<FaRegStar key={10 + i} size={15} />)
        i++
    }
    return arr
}

export function calculateDuration(position) {
    let totalTravel = Math.abs(window.scrollY - position)
    if (totalTravel < 1000) {
        return 0.6
    } else if (totalTravel < 2000) {
        return 0.8
    } else if (totalTravel < 3000) {
        return 1
    } else if (totalTravel < 4000) {
        return 1.5
    } else {
        return 2
    }
}


export function scroll(el, screen) {
    if (el) {
        let position
        if (el.id == "section3" && !screen) {
            position = el.parentElement.offsetTop + el.offsetHeight
        }
        else {
            position = el.getBoundingClientRect().top + window.scrollY || window.pageYOffset
        }
        lastScrollPosition = position = (lastScrollPosition > position) && screen ? position - 60 : position
        gsap.to(window, { duration: calculateDuration(position), scrollTo: position, ease: "power2" })
    } else {
        gsap.to(window, { duration: calculateDuration(0), scrollTo: 0, ease: "power2" })
    }
}

export function setActiveNav(num) {
    let activeC = 'active'
    for (let i = 0; i < 6; i++) {
        if (num == navRef[i]?.id && num == mobNavRef[i].id) {
            navRef[i].classList.add(activeC)
            mobNavRef[i].classList.add(activeC)
        } else if (navRef[i]?.classList && mobNavRef[i]?.classList) {
            navRef[i].classList.remove(activeC)
            mobNavRef[i].classList.remove(activeC)
        }
    }
}

const topToBottomNavTarget = ['#ab_con', '#section3', '#section4', '#section5', '#section6', '#section7']
function topToBottomNavigation(el, i) {
    gsap.utils.toArray(topToBottomNavTarget).forEach((el, i) => {

        ScrollTrigger.create({
            trigger: el,
            start: 'top top+=250',
            end: 'top top+=250',
            onEnter: (() => setActiveNav(i + 1)),
            onLeaveBack: i == 0 && (() => {
                navRef[0].removeAttribute('class')
                mobNavRef[0].removeAttribute('class')
            }),
        })
    })
}
export function desktopNavigation() {
    topToBottomNavigation()

    ////////////////////////////////////////////////// Intro section
    ScrollTrigger.create({
        trigger: '#section2',
        start: 'bottom center',
        end: 'bottom center',
        onEnterBack: (() => setActiveNav(1)),
        // markers: true

    })

    ////////////////////////////////////////////////// Career section
    ScrollTrigger.create({
        trigger: '#section3',
        start: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(2)),
    })

    ///////////////////////////////////////////////// Skills section
    ScrollTrigger.create({
        trigger: '#section4',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(3)),
    })

    ///////////////////////////////////////////////// Projects section
    ScrollTrigger.create({
        trigger: '#section5',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(4)),
    })

    ///////////////////////////////////////////////// Blogs section
    ScrollTrigger.create({
        trigger: '#section6',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(5)),
    })
}

export function mobileNavigation() {
    topToBottomNavigation()

    gsap.utils.toArray(topToBottomNavTarget).forEach((el, i) => {
        if (i != 5) {
            ScrollTrigger.create({
                trigger: i == 0 ? '#section2' : el,
                start: 'bottom center+=100',
                end: 'bottom center+=100',
                onEnterBack: (() => setActiveNav(i + 1)),
            })
        }
    })
}