function showMenu(){$("#navLinks").css("right","0")}
function hideMenu(){$("#navLinks").css("right","-200px")}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').then(()=>console.log('Service Worker Registered')).catch(err=>console.log('Service worker registration failed',err))}
$(document).ready(function(){const $box=$('.box');let pos=0;function animate(){pos++;$box.css("left",pos+"px");if(pos<300){requestAnimationFrame(animate)}}
animate()})
