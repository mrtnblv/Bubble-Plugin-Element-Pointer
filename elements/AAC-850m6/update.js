function(instance, properties, context) {
    
const cursor = document.querySelector('#' + properties.id);
const hide = properties.hide_default;
cursor.style.position = 'absolute';
cursor.style.zIndex = '9999';
cursor.style.pointerEvents = 'none';
if (hide) {
    document.body.style.cursor = 'none';
} else {
    document.body.style.cursor = 'auto';
}
    
const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
}

window.addEventListener('mousemove', positionElement)

}