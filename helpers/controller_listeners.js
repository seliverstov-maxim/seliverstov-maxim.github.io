const subscribeConrollerEvents = (controller, eventModel) => {
   let controllerPressed = false;

   const handle = (x, y) => {
      if(!controllerPressed) return;
      if(x - 60 > 0) {
         eventModel.remove(eventModel.EVENTS.LEFT);
         eventModel.add(eventModel.EVENTS.RIGHT);
      } else {
         eventModel.remove(eventModel.EVENTS.RIGHT);
         eventModel.add(eventModel.EVENTS.LEFT);
      }
   };

   const onPointerDown = (e) => {
      controllerPressed = true;
      handle(e.client.x, e.client.y);
   };

   const onPointerUp = () => {
      controllerPressed = false;
      eventModel.clearAllEvents();
   };

   const onPointerMove = (e) => {
      handle(e.client.x, e.client.y);
   };

   controller.eventMode = 'dynamic';
   controller.on('pointerdown', onPointerDown, controller);
   controller.on('pointerup', onPointerUp);
   controller.on('pointermove', onPointerMove);
}
