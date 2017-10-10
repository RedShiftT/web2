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

var date = new Date(), h, m, s, sAngel, hAngel, mAngel;

h = date.getHours();
m = date.getMinutes();
s = date.getSeconds();

sAngel = (s / 60) * (2 * Math.PI);
mAngel = (m / 60) * (2 * Math.PI);
hAngel = ((h % 12) / 12) * (2 * Math.PI);

sAngel = Math.PI / 2 - sAngel;
mAngel = Math.PI / 2 - mAngel;
hAngel = Math.PI / 2 - hAngel;

var 
sX = -Math.cos(sAngel) * R,
sY = Math.sin(sAngel) * R,
mX = -Math.cos(mAngel) * R,
mY = Math.sin(mAngel) * R,
hX = -Math.cos(hAngel) * R,
hY = Math.sin(hAngel) * R,

zX = 0.9 * sX,
zY = 0.9 * sY,
lX = 0.9 * mX,
lY = 0.9 * mY,
kX = 0.9 * hX,
kY = 0.9 * hY;

// sX += R;
// sY += R;
// mX += R;
// mY += R;
// hX += R;
// hY += R;
zX += R;
zY += R;
lX += R;
lY += R;
hX += R;
hY += R;



hLine = new Path2D();

hLine.moveTo(x + R, y + R);
hLine.lineTo(kX + x - 3, kY + y - 3);
context.lineWidth = 5;
context.stroke(hLine);

mLine = new Path2D();

mLine.moveTo(x + R, y + R);
mLine.lineTo(lX + x + 3, lY + y + 3);
context.lineWidth = 1;
context.stroke(mLine);

sLine = new Path2D();

sLine.moveTo(x + R, y + R);
sLine.lineTo(zX + x - 5, zY + y - 5);
context.lineWidth = 1;
context.strokeStyle = "red";
context.stroke(sLine);

function drawWatch(){
    context.clearRect(0, 0, 1000, 1000);


    
    setTimeout(drawWatch, 1000);
}

