import gsap from 'gsap'
// eslint-disable-next-line import/no-named-as-default
import { ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin)

export default function (ctx, inject) {
  ctx.gsap = gsap
  inject('gsap', gsap)
}
