export default class Animal {
  constructor({ name = 'Animal', age } = {}) {
    this.name = name
    this.age = age
    this.speak()
    this.render()
  }

  render() {
    const el = document.createElement('div')
    el.className = 'animal'
    el.style.background = `hsl(${Math.round(Math.random() * 360)}, 70%, 70%)`
    el.style.left = Math.random() * 2000 + 'px'
    document.body.appendChild(el)
  }

  speak() {
    console.log(this.name + ' speaks.')
  }
}
