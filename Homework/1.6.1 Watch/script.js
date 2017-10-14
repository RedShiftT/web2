var canvas = document.getElementById("clock"),
    context = canvas.getContext("2d");

function drawCrl(x, y, R, col){
    circle = new Path2D;
    circle.arc(x, y, R, 0, 2 * Math.PI);
    context.fillStyle = col;
    context.fill(circle);
}

function clock(){
    var d, angle, pX, pY, qX, qY, R = 200;
        circle = new Path2D;
        circle.arc(R, R, R, 0, 2 * Math.PI);
        context.lineWidth = 1;
        context.stroke(circle);

    for(d = 0; d < 60; ++d){
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pY += R;
        qX += R; qY += R;

        line = new Path2D;
            line.moveTo(pX, pY);
            line.lineTo(qX, qY);

        if ((d % 5) == 0){
            context.lineWidth = 2;
        }else{
            context.lineWidth = 1;
        }

        context.strokeStyle = "black";
        context.stroke(line);

    }

    context.fillStyle = "blue";  
    context.textBaseline = "bottom";
    context.textAlign = "center";
    context.font = 'bold 35px Arial';  
    context.fillText("3", R + R - 40, R + 20); 
    context.fillText("12", R, R - R + 60);
    context.fillText("6", R, R + R - 20);
    context.fillText("9", R - R + 40, R + 20);
  
    var date = new Date();
    
    sAngel = Math.PI / 2 - ((date.getSeconds() + (date.getMilliseconds() / 1000)) / 60) * 2 * Math.PI,
    mAngel = Math.PI / 2 - ((date.getMinutes() + date.getSeconds() / 60) / 60) * 2 * Math.PI,
    hAngel = Math.PI / 2 - (((date.getHours() % 12) + date.getMinutes() / 60) / 12) * 2 * Math.PI;

    var 
    sX = Math.cos(sAngel) * R * 0.9 + R,
    sY = -Math.sin(sAngel) * R * 0.9 + R,
    mX = Math.cos(mAngel) * R * 0.8 * 0.9 + R,
    mY = -Math.sin(mAngel) * R * 0.8 * 0.9 + R,
    hX = Math.cos(hAngel) * R * 0.6 * 0.9 + R,
    hY = -Math.sin(hAngel) * R * 0.6 * 0.9 + R;

    sLine = new Path2D();
        sLine.moveTo(R, R);
        sLine.lineTo(sX, sY);
        context.lineWidth = 1;
        context.strokeStyle = "red";
        context.stroke(sLine);

    mLine = new Path2D();
        mLine.moveTo(R, R);
        mLine.lineTo(mX, mY);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke(mLine);

    hLine = new Path2D();
        hLine.moveTo(R, R);
        hLine.lineTo(hX, hY);
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.stroke(hLine);
    
    drawCrl(R, R, 5, "blue");
    drawCrl(R, R, 3, "Black");

}

function drawWatch(){
    context.clearRect(0, 0, 1000, 1000);
    clock();
    setTimeout(drawWatch, 15);
}

drawWatch();