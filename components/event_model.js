class EventModel {
  events = [];
  EVENTS = [];
  subscriptions = [];
  constructor(events) {
    this.EVENTS = events;
  }

  get hasEvents() { return this.events.length > 0 }
  get lastEvent() { return this.events.slice(-1) }
  hasEvent(event) { return this.events.indexOf(event) != -1 }
  hasNotEvent(event) { return !this.hasEvent(event) }
  add(event) {
    if (this.hasEvent(event)) return false;

    this.events.push(event);
    this.apply(event);
    this.apply('any');
    return true;
  }

  remove(event) {
    if (this.hasNotEvent(event)) return false;

    this.events = this.events.filter((e) => e != event);
    this.apply(event);
    this.apply('any');
    return true;
  }

  clearAllEvents() {
    this.events = [];
    this.apply('any');
    return true;
  }

  subscribe(eventName, func) {
    this.subscriptions[eventName] ||= [];
    if (eventName != 'any') this.subscriptions[eventName].push(func);
    this.subscriptions['any'].push(func);
  }

  apply(eventName) {
    if (!this.subscriptions[eventName]) return;
    if (this.subscriptions[eventName].length == 0) return;

    this.subscriptions[eventName].forEach((e) => e.call(this, eventName, this));
  }
}
