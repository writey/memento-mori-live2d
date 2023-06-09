export default class PubSub {
  static events = {}
  static on = (event, cb) => {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(cb)
  }
  static emit = (event, data) => {
    this.events[event]?.forEach(cb => cb(data))
  }
  static off = (event, cb) => {
    const cbs = this.events[event]
    if (cbs) this.events[event] = cbs.filter(item => item !== cb)
  }
}