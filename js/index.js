import { Router } from './router.js'
import { Changes } from './changes.js'
import {
  homeMenuElement,
  universeMenuElement,
  explorationMenuElement,
  page
} from './elements.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

const changes = Changes({
  homeMenuElement,
  universeMenuElement,
  explorationMenuElement,
  page
})
