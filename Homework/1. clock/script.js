var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");

function clock(){
    circle = new Path2D;
        circle.arc(120, 80, 60, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill(circle);

    circle2 = new Path2D;
        circle2.arc(120, 80, 59, 0, 2 * Math.PI);
        context.fillStyle = "white";
        context.fill(circle2);

    var d, angle, pX, pY, qX, qY, R = 60, x = 60, y = 20;

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

        if ((d % 5) == 0){
            context.lineWidth = 2;
        }else{
            context.lineWidth = 1;
        }

        context.strokeStyle = "black";
        context.stroke(line);

    }

    context.strokeStyle = "blue";    
    context.strokeText("3", 165, 83);
    context.strokeText("12", 115, 35);
    context.strokeText("6", 117, 130);
    context.strokeText("9", 70, 83);

    var date = new Date(), h, m, s, ms, sAngel, hAngel, mAngel;

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ms = (date.getMilliseconds() / 1000);

    sAngel = Math.PI / 2 - ((s + ms) / 60) * (2 * Math.PI);
    mAngel = Math.PI / 2 - (m / 60) * (2 * Math.PI);
    hAngel = Math.PI / 2 - ((h % 12) / 12) * (2 * Math.PI);

    var 
    sX = Math.cos(sAngel) * R * 0.9 + R,
    sY = -Math.sin(sAngel) * R * 0.9 + R,
    mX = Math.cos(mAngel) * R * 0.8 * 0.9 + R,
    mY = -Math.sin(mAngel) * R * 0.8 * 0.9 + R,
    hX = Math.cos(hAngel) * R * 0.6 * 0.9 + R,
    hY = -Math.sin(hAngel) * R * 0.6 * 0.9 + R;

    sLine = new Path2D();
        sLine.moveTo(x + R, y + R);
        sLine.lineTo(sX + x - 5, sY + y - 5);
        context.lineWidth = 1;
        context.strokeStyle = "red";
        context.stroke(sLine);

    mLine = new Path2D();
        mLine.moveTo(x + R, y + R);
        mLine.lineTo(mX + x + 3, mY + y + 3);
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke(mLine);

    hLine = new Path2D();
        hLine.moveTo(x + R, y + R);
        hLine.lineTo(hX + x, hY + y);
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.stroke(hLine);

}

function drawWatch(){
    context.clearRect(0, 0, 1000, 1000);
    clock();
    setTimeout(drawWatch, 15);
}

drawWatch();