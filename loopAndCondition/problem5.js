// show the even and odd number

showNumber(10);
function showNumber(limit) {
  for (i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? '"even"' : '"odd"');
  }
}
