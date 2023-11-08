import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedElement extends Element {
  dataset?: DOMStringMap
  timeline?: gsap.core.Timeline
}

const mm = gsap.matchMedia()

// only run when there is no preference for reduced motion
mm.add('(prefers-reduced-motion: no-preference)', () => {
  batchAnimation(gsap.utils.toArray('[data-animate]'))
  batchAnimation(gsap.utils.toArray('[data-animate-text]'))
  batchAnimation(gsap.utils.toArray('[data-animate-assets]'))
})

function batchAnimation(elements: AnimatedElement[] | string) {
  if (!elements.length) return

  gsap.set(elements, { opacity: 0 })

  ScrollTrigger.batch(elements, {
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
    onLeave: (batch) => {
      batch.forEach((el: AnimatedElement) => {
        // kill the timeline when leaving the viewport
        el.timeline?.kill()
        gsap.to(el, { opacity: 0 })
      })
    },
    onLeaveBack: (batch) => {
      batch.forEach((el: AnimatedElement) => {
        // kill the timeline when leaving the viewport
        el.timeline?.kill()
        gsap.to(el, { opacity: 0 })
      })
    },
  })
}

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

  const animateDirection = getAnimationDirection(el)

  switch (animateDirection) {
    case 'up':
      y = 75 * direction
      break

    case 'down':
      y = -75
      break

    case 'left':
      x = -75
      break

    case 'right':
      x = 75
      break

    default:
      break
  }

  const initialX = gsap.getProperty(el, 'x')
  const initialY = gsap.getProperty(el, 'y')

  timeline.fromTo(
    el,
    { opacity: 0, y, x, scale: 0.925 },
    {
      opacity: 1,
      scale: 1,
      y: initialY,
      x: initialX,
      delay: index * animationStagger,
      ease: 'circ.out',
      duration: 1,
      clearProps: 'x,y',
    },
  )

  // store the timeline on the element
  el.timeline = timeline
}

function getAnimationDirection(el: AnimatedElement) {
  // Iterate over the dataset object
  for (const attr in el.dataset) {
    // Check if the attribute starts with 'animate'
    if (attr.startsWith('animate')) {
      // Return the value of the attribute
      return el.dataset[attr]
    }
  }
}

// Parallax effect
mm.add(
  {
    isDesktop: '(min-width: 768px)',
    isMobile: '(max-width: 767.98px)',
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  (context) => {
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
  },
)
