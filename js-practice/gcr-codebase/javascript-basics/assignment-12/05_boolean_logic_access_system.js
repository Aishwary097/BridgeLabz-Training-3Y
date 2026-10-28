let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
  const accessGranted = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(accessGranted ? "Secure" : "Unsafe");
}

checkSecurity();
isOwnerInside = false;
checkSecurity();
