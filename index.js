// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42;

  if (pickupLocation > hq) {
    return pickupLocation - hq;
  } else if (pickupLocation < hq) {
    return hq - pickupLocation;
  }
}

function distanceFromHqInFeet(blocks) {
  const blockLength = 264;

  return distanceFromHqInBlocks(blocks) * blockLength;
}

function distanceTravelledInFeet(start, destination) {
  const blockLength = 264;

  if (destination > start) {
    return (destination - start) * blockLength;
  } else if (destination < start) {
    return (start - destination) * blockLength;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
