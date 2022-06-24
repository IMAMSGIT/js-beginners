try {
  const numbers = [1, 2, 3, 4];
  const count = count0ccurences(array, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function count0ccurences(array, searchElemnt) {
  if (Array.isArray(array)) throw new Error("Invalid array.");
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElemnt ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
