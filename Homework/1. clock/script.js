var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");

circle = new Path2D;
circle.arc(120, 80, 60, 0, 2 * Math.PI);

context.fillStyle = "black";

context.fill(circle);

circle2 = new Path2D;
circle2.arc(120, 80, 59, 0, 2 * Math.PI);

context.fillStyle = "white";

context.fill(circle2);

var d, angle, pX, pY, qX, qY, R = 120 / 2, x = 120 / 2, y = 40 / 2;

for(d = 0; d < 60; ++d){
    angle = (d / 60) * (2 * Math.PI);
    pX = Math.cos(angle) * R;
    pY = Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; qY += R;

    line = new Path2D;

    line.moveTo(pX + x, pY + y);
    line.lineTo(qX + x, qY+ y);

    context.lineWidth = 1;
    context.stroke(line);

}