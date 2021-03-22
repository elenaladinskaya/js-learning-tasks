// #2 Выборка объекта
const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }];

const getWorthyWorkers = (workersArray) => {
  const worthyWorkers = [];

  workersArray.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })
    return worthyWorkers;
};

console.log('#2 Выборка объекта: ', getWorthyWorkers(workers));