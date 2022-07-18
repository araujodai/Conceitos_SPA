export function Changes({
  homeMenuElement,
  universeMenuElement,
  explorationMenuElement,
  page
}) {
  homeMenuElement.addEventListener('click', () => {
    highlight(homeMenuElement)
  })
  universeMenuElement.addEventListener('click', () => {
    highlight(universeMenuElement)
    page.classList.add('bg-universe')
  })
  explorationMenuElement.addEventListener('click', () => {
    highlight(explorationMenuElement)
    page.classList.add('bg-exploration')
  })
  function highlight(element) {
    selectionReset()
    element.classList.add('selected')
  }
  function selectionReset() {
    homeMenuElement.classList.remove('selected')
    universeMenuElement.classList.remove('selected')
    explorationMenuElement.classList.remove('selected')
    page.classList.remove('bg-universe')
    page.classList.remove('bg-exploration')
  }
  return {
    highlight,
    selectionReset
  }
}
