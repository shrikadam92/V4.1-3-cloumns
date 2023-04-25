function readXlsxFile(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      const data = new Uint8Array(xhr.response);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      resolve(rows);
    };
    xhr.send();
  });
}

function showTemplates() {
  readXlsxFile('/templates.xlsx').then((rows) => {
    console.log(rows); // log the data to the console
    const table = document.getElementById('templates');
    const numRows = rows.length;
    for (let i = 0; i < numRows; i += 3) {
      const tr = document.createElement('tr');

      // create button in first column
      const button1 = document.createElement('button');
      button1.innerText = rows[i][0];
      button1.addEventListener('click', () => {
        // Get the active textbox element
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
          activeElement.value += rows[i][1];
        } else {
          navigator.clipboard.writeText(rows[i][1]);
        }
      });
      const td1 = document.createElement('td');
      td1.appendChild(button1);
      tr.appendChild(td1);

      // create button in second column, if it exists
      if (i + 1 < numRows) {
        const button2 = document.createElement('button');
        button2.innerText = rows[i + 1][0];
        button2.addEventListener('click', () => {
          // Get the active textbox element
          const activeElement = document.activeElement;
          if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            activeElement.value += rows[i + 1][1];
          } else {
            navigator.clipboard.writeText(rows[i + 1][1]);
          }
        });
        const td2 = document.createElement('td');
        td2.appendChild(button2);
        tr.appendChild(td2);
      }

      // create button in third column, if it exists
      if (i + 2 < numRows) {
        const button3 = document.createElement('button');
        button3.innerText = rows[i + 2][0];
        button3.addEventListener('click', () => {
          // Get the active textbox element
          const activeElement = document.activeElement;
          if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
            activeElement.value += rows[i + 2][1];
          } else {
            navigator.clipboard.writeText(rows[i + 2][1]);
          }
        });
        const td3 = document.createElement('td');
        td3.appendChild(button3);
        tr.appendChild(td3);
      }

      // check if row is within range to be highlighted
      if (i >= 20 && i <= 27) {
        tr.classList.add('highlight-row');
      }

      table.appendChild(tr);
    }
 
