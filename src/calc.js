function Yfind(canv, Hx, Hy, Hr, Hc){
  var ratio = 1.75 * Hr;
  var bsx = Hx; /* Body Start X */
  var bsy = Hy + Hr; /* Body Start Y */
  var bex = Hx + 0; /* Body End X */
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
   /* Drawing commands here */
  }
}
/* Incomplete - Y Calculation for attaching things to body */