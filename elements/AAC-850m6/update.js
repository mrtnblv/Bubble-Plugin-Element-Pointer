function(instance, properties, context) {
	
	const clickableElements = document.querySelectorAll('.clickable-element');
    clickableElements.forEach(function(element) {
    	element.style.removeProperty('cursor');
	});
    
    const cursor = document.querySelector('#' + properties.id);
    const hide = properties.hide_default;
    cursor.style.position = 'absolute';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    cursor.style.top = '0';
	cursor.style.left = '0';
    if (hide) {
        document.body.classList.add('disable-pointer');
        clickableElements.forEach(function(element) {
            element.classList.add('disable-pointer');
        });
    } else {
        document.body.classList.remove('disable-pointer');
        clickableElements.forEach(function(element) {
            element.classList.remove('disable-pointer');
        });
    }

    const positionElement = (e)=> {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    }

    window.addEventListener('mousemove', positionElement)

}