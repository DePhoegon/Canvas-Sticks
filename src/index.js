/* Color Section, line */
var defC = "purple"; /* head */
/* Color Section, end */

function negator(mul, ratio, Endx, Startx, StartY) {
  let neg = (Endx-Startx<0?StartY+(ratio*mul+(Endx-Startx)):StartY+(ratio*mul-(Endx-Startx)));
  return neg;
} /* Returns, the difference between the ratio control and the difference of the X change */

function limb(Canvas, UpperX1, UpperX2, LowerX2, UpperY1, UpperY2, LowerY2, UpperColor, LowerColor) {
  line(Canvas, UpperX1, UpperX2, UpperY1, UpperY2, UpperColor); /* 'upper'  */
  line(Canvas, UpperX2, LowerX2, UpperY2, LowerY2, LowerColor); /* 'lower' */
} /* Multi-Stage Body maker */

function tpose(canv, Hx, Hy, Hr, Hc) {
  var ratio = 1.75 * Hr;
  var bsx = Hx; /* Body Start X */
  var bex = Hx + 0; /* Body End X */
  var bsy = Hy + Hr; /* Body Start Y */
  var bey = bsy + 4.5 * Hr; /* Body End Y */
  var ay1 = bsy + Hr; /* Arms Start Y */
  var ax1 = ((ay1 - bsy) / (bey - bsy)) * (bex - bsx) + bsx; /* Arms Start X */
  var rax2 = ax1 - (3 / 4) * ratio; /* Right forarm End X */
  var rax3 = rax2 - 0; /* Right arm end X */
  var lax2 = ax1 + (3 / 4) * ratio; /* Left forarm End X */
  var lax3 = lax2 + 0; /* Left Arm End X */
  var rlx2 = bex - (1 / 2) * ratio; /* Right Upper Leg End X */
  var llx2 = bex + (1 / 2) * ratio; /* Left Upper Leg End X */
  var rlx3 = rlx2 - (1 / 8) * ratio; /* Right Lower leg End X */
  var llx3 = llx2 + (1 / 8) * ratio; /* Left Lower Leg End X */
  var ray2 = negator(1.25, ratio, rax2, ax1, ay1); /* Right uper End Y */
  var ray3 = negator(1.35, ratio, rax3, rax2, ray2); /* Right lower arm end Y */
  var lay2 = negator(1.25, ratio, lax2, ax1, ay1); /* Left upper End Y */
  var lay3 = negator(1.35, ratio, lax3, lax2, lay2); /* Left ower Arm End Y */
  var rly2 = negator(1.75, ratio, rlx2, bex, bey); /* Right Upper Leg End Y -use arm Start Y for sitting */
  var lly2 = negator(1.75, ratio, llx2, bex, bey); /* Left Upper Leg End Y -use arm Start Y for sitting */
  var rly3 = negator(2, ratio, rlx3, rlx2, rly2); /* Right Lower leg End */
  var lly3 = negator(2, ratio, llx3, llx2, lly2); /* Left Lower Leg End Y */
  switch (canv) {
    case 1:
      return ratio;
    case 2:
      return bsx;
    case 3:
      return bsy;
    case 4:
      return bey;
    case 5:
      return bex;
    case 6:
      return ax1;
    case 7:
      return ay1;
    case 8:
      return rax2;
    case 9:
      return ray2;
    case 10:
      return lax2;
    case 11:
      return lay2;
    case 12:
      return rax3;
    case 13:
      return ray3;
    case 14:
      return lax3;
    case 15:
      return lay3;
    case 16:
      return rlx2;
    case 17:
      return rly2;
    case 18:
      return llx2;
    case 19:
      return lly2;
    case 20:
      return rlx3;
    case 21:
      return rly3;
    case 22:
      return llx3;
    case 23:
      return lly3;
    default:
      cir(canv, Hx, Hy, Hr, Hc); /* Head */
      line(canv, bsx, bex, bsy, bey, Hc); /* Body */
      limb(canv, ax1, rax2, rax3, ay1, ray2, ray3, Hc, Hc); /* Right Arm */
      limb(canv, ax1, lax2, lax3, ay1, lay2, lay3, Hc, Hc); /* Left Arm */
      limb(canv, bex, rlx2, rlx3, bey, rly2, rly3, Hc, Hc); /* Right Leg */
      limb(canv, bex, llx2, llx3, bey, lly2, lly3, Hc, Hc); /* Left Leg */
      break;
  }
} /* Tpose for canvas stickman */
/*
  Canvas
  Head X, Head Y, Head Radius, Color
  */

function line(Canvas, StartX, EndX, StartY, EndY, Color) {
  Canvas.beginPath();
  Canvas.strokeStyle = Color;
  Canvas.moveTo(StartX, StartY);
  Canvas.lineTo(EndX, EndY);
  Canvas.stroke();
} /* Lines */
function cir(Canvas, CenterX, CenterY, Radius, Color) {
  Canvas.beginPath();
  Canvas.strokeStyle = Color;
  Canvas.arc(CenterX, CenterY, Radius, 0, 2 * Math.PI);
  Canvas.stroke();
} /* Circles */

var room = document.getElementById("bob");
var floor = room.getContext("2d");
/*
tpose(floor, 35, 25, 15, defC);
tpose(floor, 150, 15, 10, "Yellow");
var arms = tpose(15, 35, 25, 15);
alert(arms); */
randomdude(1, floor);
function randomdude(dudes, Canvas) {
  var i;
  for (i=0; i<dudes; i++) {
    var RanX = Math.floor(Math.random()*260)+25;
    var RanY = Math.floor(Math.random()*325)+1;
    var RanR = Math.floor(Math.random()*15)+5;
    var RanC = Math.floor(Math.random()*10)+1;
    if (tpose(23, RanX, RanY, RanR)>400) {for (RanY; tpose(23, RanX, RanY, RanR)>400; RanY=RanY-15) {}};
    if ((RanY-(RanR+10)<0)) {for (RanY; RanY-(RanR+5)<0; RanY=RanY+3){}}; 
    switch (RanC) {
      case 1:
        tpose(Canvas, RanX, RanY, RanR, "#ddd");
      break;
      case 2:
       tpose(Canvas, RanX, RanY, RanC, "#333");
      break;
      case 3:
        tpose(Canvas, RanX, RanY, RanC, "#0ff");
      break;
      case 4:
        tpose(Canvas, RanX, RanY, RanC, "#f0f");
      break;
      case 5:
        tpose(Canvas, RanX, RanY, RanC, "#000");
      break;
      case 6:
        tpose(Canvas, RanX, RanY, RanC, "#fff");
      break;
      case 7:
        tpose(Canvas, RanX, RanY, RanC, "#0f0");
      break;
      case 8:
        tpose(Canvas, RanX, RanY, RanC, "#50f");
      break;
      case 9:
        tpose(Canvas, RanX, RanY, RanC, "#0f5");
      break;
      case 10:
        tpose(Canvas, RanX, RanY, RanC, "#06f");
      break;
      default:
        tpose(Canvas, RanX, RanY, RanC, defC);
      break;
  }}}
