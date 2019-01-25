// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const hq = 42;

  if (blocks > hq) {
    return blocks - hq;
  } else if (blocks < hq) {
    return hq - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  const blockLength = 264;

  return distanceFromHqInBlocks(blocks) * blockLength;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  const blockLength = 264;
  
  if (endingBlock > startingBlock) {
    return (endingBlock - startingBlock) * blockLength;
  } else if (endingBlock < startingBlock) {
    return (startingBlock - endingBlock) * blockLength;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return (distance) * 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}