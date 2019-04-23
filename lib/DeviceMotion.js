export class DeviceMotion {
  constructor(el) {
    this.el = el

    this.x = 0.5
    this.y = 0.5
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onDeviceMotion = this.onDeviceMotion.bind(this)
    this.update = this.update.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  onMouseMove(evt) {
    this.x = Math.min(evt.clientX, this.innerWidth) / this.innerWidth
    this.y = Math.min(evt.clientY, this.innerHeight) / this.innerHeight
    this.update()
  }

  onDeviceMotion(evt) {
    let rotationRate = evt.rotationRate

    window.removeEventListener('mousemove', this.onMouseMove)

    this.x = Math.min(Math.max(rotationRate.gamma, -45), 45) / -90
    this.y = Math.min(Math.max(rotationRate.beta, -45), 45) / -90

    this.update()
  }

  onResize() {
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight
    this.update()
  }

  update() {
    const _x = 12 * (-1 * this.y - 0.5)
    const _y = 12 * (this.x - 0.5)

    this.el.style.transform = `rotateX(${_x}deg) rotateY(${_y}deg) translateZ(3rem)`
    this.el.style.backgroundPosition = `-${this.x * 3}% -${this.y * 3}%`
  }

  init() {
    window.addEventListener('mousemove', this.onMouseMove, { passive: true })
    window.addEventListener('devicemotion', this.onDeviceMotion)
    window.addEventListener('resize', this.onResize, { passive: true })
  }

  destroy() {
    window.removeEventListener('mousemove', this.onMouseMove, { passive: true })
    window.removeEventListener('devicemotion', this.onDeviceMotion)
    window.removeEventListener('resize', this.onResize, { passive: true })
  }
}
