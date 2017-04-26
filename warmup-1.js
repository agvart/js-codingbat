(function(Test, test) {

  // Warmup-1 > sleepIn

  var sleepInTests = [
    new Test([false, false], true),
    new Test([true, false], false),
    new Test([false, true], true),
    new Test([true, true], true)
  ];

  function sleepIn(weekday, vacation) {
    return !weekday || vacation;
  }

  test(sleepIn, sleepInTests);

  // Warmup-1 > monkeyTrouble

  var monkeyTroubleTests = [
    new Test([true, true], true),
    new Test([false, false], true),
    new Test([true, false], false)
  ];

  function monkeyTrouble(aSmile, bSmile) {
    return aSmile && bSmile || !aSmile && !bSmile;
  }

  test(monkeyTrouble, monkeyTroubleTests);

  // Warmup-1 > sumDouble

  var sumDoubleTests = [
    new Test([1, 2], 3),
    new Test([3, 2], 5),
    new Test([2, 2], 8)
  ];

  function sumDouble(a, b) {
    if (a === b) {
      return (a + b) * 2;
    } else {
      return a + b;
    }
  }

  test(sumDouble, sumDoubleTests);

  //Warmup-1 > diff21

  var diff21Tests = [
    new Test([19], 2),
    new Test([10], 11),
    new Test([21], 0),
    new Test([0], 21),
    new Test([25], 8),
    new Test([-1], 22)
  ];

  function diff21(a) {
    var result = Math.abs(a-21);
    if (a > 21) {
      return result * 2;
    }
    return result;
  }

  test(diff21, diff21Tests);

})(TEST.Test, TEST.test);
