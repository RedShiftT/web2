var canvas = document.getElementById("clock"),
    context = canvas.getContext("2d");

function drawCrl(x, y, R, col){
    circle = new Path2D;
    circle.arc(x, y, R, 0, 2 * Math.PI);
    context.fillStyle = col;
    context.fill(circle);
}

function clock(){
    
        circle = new Path2D;
        circle.arc(60, 60, 60, 0, 2 * Math.PI);
        context.lineWidth = 1;
        context.stroke(circle);

    var d, angle, pX, pY, qX, qY, R = 60, x = 0, y = 0;

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

    context.fillStyle = "blue";  
    context.font = 'bold 12px Arial';  
    context.fillText("3", 105, 65); 
    context.fillText("12", 53, 17);
    context.fillText("6", 57, 111);
    context.fillText("9", 10, 65);
  
    var date = new Date();

    sAngel = Math.PI / 2 - (date.getSeconds() / 60) * 2 * Math.PI,
    // sAngel = Math.PI / 2 - ((date.getSeconds() + (date.getMilliseconds() / 1000)) / 60) * 2 * Math.PI,
    mAngel = Math.PI / 2 - (date.getMinutes() + date.getSeconds() / 60 / 60) * 2 * Math.PI,
    hAngel = Math.PI / 2 - (((date.getHours() % 12) + date.getMinutes() / 60) / 12) * 2 * Math.PI;

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
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke(mLine);

    hLine = new Path2D();
        hLine.moveTo(x + R, y + R);
        hLine.lineTo(hX + x, hY + y);
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.stroke(hLine);
    
    drawCrl(60, 60, 3, "blue");
    drawCrl(60, 60, 2, "Black");

}

function drawWatch(){
    context.clearRect(0, 0, 1000, 1000);
    clock();
    setTimeout(drawWatch, 15);
}

drawWatch();