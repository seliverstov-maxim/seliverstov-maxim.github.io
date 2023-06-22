const subscribeKeyboardEvents = (eventModel) => {

  document.addEventListener("keydown", (event) => {
    const keyCode = event.keyCode;
    if (event.isComposing || keyCode === 229) return;
    if ([68, 65].indexOf(keyCode) == -1) return;

    if (keyCode == 68) {
      eventModel.add(eventModel.EVENTS.RIGHT);
    }

    if (keyCode == 65) {
      eventModel.add(eventModel.EVENTS.LEFT);
    }
  });

  document.addEventListener("keyup", (event) => {
    const keyCode = event.keyCode;
    if (event.isComposing || keyCode === 229) return;

    if (keyCode == 68) {
     eventModel.remove(eventModel.EVENTS.RIGHT);
    }

    if (keyCode == 65) {
      eventModel.remove(eventModel.EVENTS.LEFT);
    }
  });
}
