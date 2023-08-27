//your JS code here. If required.
function getRandomTime() {
      return Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    }

    const promises = [
      new Promise(resolve => setTimeout(() => resolve('Promise 1'), getRandomTime() * 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 2'), getRandomTime() * 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 3'), getRandomTime() * 1000))
    ];

    Promise.all(promises)
      .then(results => {
        const loadingRow = document.getElementById('loading-row');
        loadingRow.parentNode.removeChild(loadingRow);

        const resultTable = document.getElementById('result-table');

        results.forEach((result, index) => {
          const row = resultTable.insertRow();
          const promiseCell = row.insertCell(0);
          const timeTakenCell = row.insertCell(1);

          promiseCell.innerHTML = result;
          timeTakenCell.innerHTML = getRandomTime().toFixed(3);
        });

        const totalRow = resultTable.insertRow();
        const totalPromiseCell = totalRow.insertCell(0);
        const totalTimeTakenCell = totalRow.insertCell(1);

        totalPromiseCell.innerHTML = 'Total';
        totalTimeTakenCell.innerHTML = (
          results.reduce((total, _, index) => total + parseFloat(timeTakenCell.innerHTML), 0)
        ).toFixed(3);
      });