const subscribeConrollerEvents = (controller, eventModel) => {
   let controllerPressed = false;

   const onPointerDown = () => {
      controllerPressed = true;
   };

   const onPointerUp = () => {
      controllerPressed = false;
      eventModel.clearAllEvents();
   };

   const onPointerMove = (e) => {
      if(!controllerPressed) return;
      if(e.client.x - 60 > 0) {
         eventModel.remove(eventModel.EVENTS.LEFT);
         eventModel.add(eventModel.EVENTS.RIGHT);
      } else {
         eventModel.remove(eventModel.EVENTS.RIGHT);
         eventModel.add(eventModel.EVENTS.LEFT);
      }
   };

   controller.eventMode = 'dynamic';
   controller.on('pointerdown', onPointerDown, controller);
   controller.on('pointerup', onPointerUp);
   controller.on('pointermove', onPointerMove);
}
