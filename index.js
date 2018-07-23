// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  let hq = 42;
  let distance;

  if (pickupLocation === hq + 1) {
    distance = 1;
  } else if (pickupLocation === hq - 8 || pickupLocation === hq + 8) {
    distance = 8;
  }
  return distance
}

function distanceFromHqInFeet(passenger) {
  return distanceFromHqInBlocks(passenger) * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distance;

  if (start < destination) {
    distance = (destination - start) * 264;
  } else if (start > destination) {
    distance = (start - destination) * 264;
  }
  return distance
}

function calculatesFarePrice(start, destination) {
  let fare;
  let distance = distanceTravelledInFeet(start, destination)

  if (distance < 400) {
    fare = 0;
  } else if (distance > 400 && distance < 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else if (distance > 2500) {
    fare = 'cannot travel that far';
  }
  return fare
}
