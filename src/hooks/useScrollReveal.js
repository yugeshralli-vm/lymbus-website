import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (!options.repeat) observer.unobserve(el)
        } else if (options.repeat) {
          el.classList.remove('visible')
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.repeat])

  return ref
}

/* Returns [ref, triggered] — triggers once when element enters viewport.
   Use this to fire one-shot effects (e.g. count-up) on scroll. */
export function useScrollTriggered(options = {}) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || triggered) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          obs.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options.threshold, triggered])

  return [ref, triggered]
}

export function useCountUp(target, duration = 2000, trigger = false) {
  const ref = useRef(null)

  useEffect(() => {
    if (!trigger || !ref.current) return

    const start = 0
    const end = parseFloat(target)
    const isDecimal = target.toString().includes('.')
    const decimals = isDecimal ? target.toString().split('.')[1].length : 0
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased

      if (ref.current) {
        ref.current.textContent = current.toFixed(decimals)
      }

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration, trigger])

  return ref
}
