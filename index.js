var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 15;

  function drawCircle(centerX,centerY,radius)
  {
    // Erase context
    context.clearRect(0,0,canvas.width,canvas.height);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#F279D4';
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = '#003300';
    context.stroke();
  };

  drawCircle(centerX,centerY,radius);

  drawCircle(350,350,350);