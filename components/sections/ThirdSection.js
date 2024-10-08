import styles from './ThirdSection.module.scss'
import Path from '../../public/svg/path.svg'
import PathMB from '../../public/svg/path_mob.svg'
import Guy from '../../public/svg/guy.svg'
import Blob from '../../public/svg/secBlob.svg'
import { sectionRefs } from '../../constants/HelperFunctions'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
const ThirdSection = () => {

    useEffect(() => {
        let el = document.querySelector('#path_line');
        let mb_el = document.querySelector('#pathMB');
        let len = el.getTotalLength()
        let mb_len = mb_el.getTotalLength()
        el.style.strokeDasharray = len
        mb_el.style.strokeDasharray = mb_len
        el.style.strokeDashoffset = len
        mb_el.style.strokeDashoffset = mb_len

        ScrollTrigger.saveStyles(['.point', '.path_info', '#guy', '#secBlob'])
        ScrollTrigger.matchMedia({
            "(min-width:1131px)": () => scrollAnimation(),
            "(min-width:850px) and (max-width:1130px)": () => scrollAnimation("tablet"),
            "(max-width:849px)": () => mbScrollAnimation(),
        })
    }, [])
    return (
        <section ref={(el) => sectionRefs[1] = el} className={styles.container} id='section3'>
            <span className={styles.shadow_T}>career</span>
            <div className={styles.path_con}>
                <PathMB className={styles.pathMB} />
                <Path className={styles.path} />
                <div className={styles.info + ' path_info'}>
                    <span>2022</span>
                    <p>Joined AccioJob Coding Bootcamp</p>
                </div>
                <div className={styles.info + ' path_info'}>
                    {/* <span>2023</span>
                    <p>Started working as a Frontend Developer at  <a href='https://digimantralabs.com/'>DigiMantra Labs</a></p> */}
                </div>
                <div className={styles.info + ' path_info'}>
                    <span>2023</span>
                    <p>Started working as a Frontend Developer at  <a href='https://digimantralabs.com/'>DigiMantra Labs</a></p>
                </div>
            </div>

            <div className={styles.text_con}>
                <Guy className={styles.guy} />
                <div className={styles.secBlob} id="secBlob">
                    <div className={styles.text}>
                        <span>a</span>
                        <span>long way <span>ahead</span></span>
                        <span>lot more to <span>achieve</span></span>
                    </div>
                    <Blob className={styles.blob} />
                </div>
            </div>

        </section>
    )
}
const scrollAnimation = (screen) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section3',
            start: `top ${screen == 'tablet' ? 'top+=60' : 'top'}`,
            end: '+=630',
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
        }
    })

    tl.to('#path_line', {
        strokeDashoffset: 0,
        duration: 0.7,
    }, '-=0.1').from('.point', {
        transformOrigin: 'center',
        opacity: 0,
        scale: 0,
        duration: 0.05,
        delay: -0.7,
        stagger: 0.1,
    }).from('.path_info', {
        opacity: 0,
        duration: 0.1,
        delay: -0.7,
        stagger: 0.1,
    }).from('#guy', {
        y: 200,
        opacity: 0,
        ease: 'power3.easeOut',
        duration: 0.5
    }, '-=.7').from('#secBlob', {
        opacity: 0,
        scale: .8,
        x: 150,
        ease: 'power4.easeOut',
        duration: 0.2,
    }, '-=.5')
    ScrollTrigger.refresh()
}

function mbScrollAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section3',
            start: `top bottom-=200`,
            end: '+=700',
            scrub: 1,
        }
    })
    tl.to('#pathMB', {
        strokeDashoffset: 0
    }).from('.mb_point', {
        transformOrigin: 'center',
        opacity: 0,
        scale: 0,
        duration: 0.05,
        stagger: 0.1,
    }, "-=0.5").from('.path_info', {
        x: -70,
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
    }, "-=0.5").from('#secBlob', {
        opacity: 0,
        scale: .8,
        x: 100,
        ease: 'power4.easeOut',
        duration: 0.2,
    }, '-=0.25')

}
export default ThirdSection
