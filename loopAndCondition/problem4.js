// Speed Limit = 70
// 5=> 1 points
// 12 points => suspended

checkSpeed(75);
// console.log(speed);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit) console.log("Okay");
  else {
    points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("licence canceled", "your points :", points);
    else console.log(points);
  }
}
