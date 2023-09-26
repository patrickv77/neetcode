var minMachines = function (start, end) {
  const tasks = start.map((el, i) => [el, end[i]]);
  let res = [[tasks.pop()]];
  let resItr = 0;

  while (tasks.length) {
    console.log('res', res);
    console.log('tasks', tasks)
    console.log(resItr);
    // loop through tasks, taking note of the best fit
    let taskBefore = res[resItr][0][0];
    let taskLast = res[resItr][res[resItr].length - 1][1];
    let updated = false;

    // declare but do not define variables
    let taskBeforeClosest,
      taskBeforeClosestIndex,
      taskLastClosest,
      taskLastClosestIndex;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i][1] < taskBefore) {
        taskBeforeClosest = tasks[i][1];
        taskBeforeClosestIndex = i;
      }
      if (tasks[i][0] > taskLast) {
        taskLastClosest = tasks[i][0];
        taskLastClosestIndex = i;
      }
    }

    if (taskBeforeClosestIndex) {
      updated = true;
      res[resItr].shift(tasks.splice(taskBeforeClosestIndex, 1));
      taskLastClosestIndex--;
    }

    if (taskLastClosestIndex) {
      updated = true;
      res[resItr].push(tasks.splice(taskLastClosestIndex, 1));
    }

    if(!updated) {
      res.push([tasks.pop()])
      resItr++;
    }
  }

  return res.length;
};

// console.log(minMachines([1, 8, 3, 9, 6], [7, 9, 6, 14, 7])); // 3
console.log(minMachines([1,1,1,1,1,8,16,42,12,14,25,27],[2,3,4,5,6,9,17,43,13,15,26,28])); // 5
/*
[
  [1,7], [8,9]
  [3,6], [9,14]
  [6,7]
]
*/
