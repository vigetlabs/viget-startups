import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface AnimatedElement extends Element {
  dataset?: DOMStringMap
  timeline?: gsap.core.Timeline
}

export const mmFilters = {
  isDesktop: '(min-width: 768px)',
  isMobile: '(max-width: 767.98px)',
  reduceMotion: '(prefers-reduced-motion: reduce)',
}

const mm = gsap.matchMedia()

// NOTE: May remove this later. Not sure if I'm going to use this for more broadly animating the site or not.
mm.add(mmFilters, (context) => {
  let { reduceMotion } = context.conditions ?? {}

  gsap.set('[data-animate]', { opacity: 0 })

  ScrollTrigger.batch('[data-animate]', {
    start: 'top 90%',
    batchMax: 5,
    onEnter: (batch) => {
      batch.forEach((el: AnimatedElement, i: number) => {
        setAnimation(el, i)
      })
    },
    onEnterBack: (batch) => {
      batch.forEach((el: AnimatedElement, i: number) => {
        setAnimation(el, i, -1)
      })
    },
    once: true,
  })

  function setAnimation(
    el: AnimatedElement,
    index: number = 0,
    direction?: -1 | 1,
  ) {
    direction = direction || 1
    let x = 0,
      y = 0

    const timeline = gsap.timeline()
    const animationStagger = 0.15

    switch (el.dataset?.animate) {
      case 'up':
        y = reduceMotion ? 0 : 50 * direction
        break

      case 'down':
        y = reduceMotion ? 0 : -50
        break

      case 'left':
        x = reduceMotion ? 0 : -50
        break

      case 'right':
        x = reduceMotion ? 0 : 50
        break

      default:
        break
    }

    timeline.fromTo(
      el,
      { opacity: 0, y, x, scale: reduceMotion ? 1 : 0.925 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        delay: reduceMotion ? 0 : index * animationStagger,
        ease: 'circ.out',
        duration: el.dataset?.animateDuration || 0.5,
        clearProps: 'x,y,scale',
      },
    )

    // store the timeline on the element
    el.timeline = timeline
  }
})

// Parallax effect
mm.add(mmFilters, (context) => {
  let { isMobile, reduceMotion } = context.conditions ?? {}

  if (reduceMotion) return

  gsap.to('[data-speed]', {
    y: (i, el) => {
      const speed = parseFloat(el.getAttribute('data-speed'))
      let adjustedSpeed

      // adjust speed on mobile to be half that of desktop
      if (speed < 1 && isMobile) {
        adjustedSpeed = speed + (1 - speed) / 2
      } else if (speed > 1 && isMobile) {
        adjustedSpeed = speed - (speed - 1) / 2
      } else {
        adjustedSpeed = speed
      }

      return (1 - adjustedSpeed) * ScrollTrigger.maxScroll(window)
    },
    ease: 'none',
    scrollTrigger: {
      start: 0,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  })
})
