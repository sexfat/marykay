import gsap from 'gsap'
// eslint-disable-next-line import/no-named-as-default
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function (ctx, inject) {
  ctx.gsap = gsap
  inject('gsap', gsap)
}
