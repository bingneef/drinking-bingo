const shuffle = <T>(array: T[], seed: number)  =>{
  let currentIndex = array.length, temporaryValue, randomIndex;
  seed = seed || 1;
  
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  
  while (0 !== currentIndex) {    
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export const generateSeed = () => {
  return Math.floor(Math.random() * 10_000_000) + 1;
}

export default shuffle