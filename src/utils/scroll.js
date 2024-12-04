export const scrollToElement = (elementId) => {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const toggleBodyScroll = (disable) => {
  document.body.style.overflow = disable ? 'hidden' : ''
}