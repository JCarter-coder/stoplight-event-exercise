(function() {
  'use strict';

  // YOUR CODE HERE
  const stopBtn = document.querySelector('#stopButton');
  const slowBtn = document.querySelector('#slowButton');
  const goBtn = document.querySelector('#goButton');

  const stopLight = document.getElementById('stopLight');
  const slowLight = document.getElementById('slowLight');
  const goLight = document.getElementById('goLight');

  //click event handlers
  stopBtn.addEventListener('click', function(e) {
    //console.log(e.target);
    console.log( stopLight.classList.toggle('stop') ? `${e.target.textContent} bulb on` : `${e.target.textContent} bulb off`);
  })

  slowBtn.addEventListener('click', function(e) {
    //console.log(e.target);
    console.log( slowLight.classList.toggle('slow') ? `${e.target.textContent} bulb on` : `${e.target.textContent} bulb off`);
  })

  goBtn.addEventListener('click', function(e) {
    //console.log(e.target);
    console.log( goLight.classList.toggle('go') ? `${e.target.textContent} bulb on` : `${e.target.textContent} bulb off`);
  })

  //mouse enter event handlers
  stopBtn.addEventListener('mouseenter', function(e) {
    console.log(`Entered ${e.target.textContent} button`);
  })

  slowBtn.addEventListener('mouseenter', function(e) {
    console.log(`Entered ${e.target.textContent} button`);
  })

  goBtn.addEventListener('mouseenter', function(e) {
    console.log(`Entered ${e.target.textContent} button`);
  })

  //mouse leave event handlers
  stopBtn.addEventListener('mouseleave', function(e) {
    console.log(`Left ${e.target.textContent} button`);
  })

  slowBtn.addEventListener('mouseleave', function(e) {
    console.log(`Left ${e.target.textContent} button`);
  })

  goBtn.addEventListener('mouseleave', function(e) {
    console.log(`Left ${e.target.textContent} button`);
  })
  
})();
