import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function (ctx, inject) {
  ctx.gsap = gsap
  inject('gsap', gsap)
}
