// Multiples of 3 or 5
// If we list all the natural numbers below  10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below N.
export function multiplesOf3Or5(n: number): number {
  let resp = 0;
  for (let i: number = 0; i < n; i++) {
    // const e = isMultipleOf(i, 3) || isMultipleOf(i, 5) ? i : 0;
    // console.log(e);

    resp += isMultipleOf(i, 3) || isMultipleOf(i, 5) ? i : 0;
  }
  return resp;
}

function isMultipleOf(n: number, multiple: number) {
  return n % multiple === 0;
}
