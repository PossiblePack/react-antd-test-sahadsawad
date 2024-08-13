export function randomShapeOrder(array: string[]) {
    const arrayCopy = [...array]; // Create a copy of the array
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  }

export function rotateShapeRight(array: string[]) {
    if (array.length > 0) {
        const lastElement = array.pop();
        array.unshift(lastElement!);
    }
    return array;
}

export function rotateShapeLeft(array: string[]) {
    if (array.length > 0) {
        // Remove the first element from the array and store it
        const firstElement = array.shift();

        // Add the first element to the end of the array
        array.push(firstElement!);
    }

    return array;
}