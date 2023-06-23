const subscribeConrollerEvents = (controller, eventModel) => {
   let controllerPressed = false;
   const controllerCenterX = controller.x + controller.width / 2;
   const controllerCenterY = controller.y + controller.height / 2;

   const pointerX = (e) => e.screen.x - controllerCenterX;
   const pointerY = (e) => e.screen.y - controllerCenterY;

   const handle = (x, y) => {
      if(!controllerPressed) return;
      if(x - controllerCenterX > 0) {
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
      controller.updateStickPosition(pointerX(e), pointerY(e));
   };

   const onPointerUp = () => {
      controllerPressed = false;
      eventModel.clearAllEvents();
      controller.updateStickPosition(0, 0);
   };

   const onPointerMove = (e) => {
      handle(e.client.x, e.client.y);
      controller.updateStickPosition(pointerX(e), pointerY(e));
   };

   controller.eventMode = 'dynamic';
   controller.on('pointerdown', onPointerDown, controller);
   controller.on('pointerup', onPointerUp);
   controller.on('pointermove', onPointerMove);
   app.stage.on('pointerup', onPointerUp);
   app.stage.on('pointermove', onPointerMove);
}
