var table, row, cell, i, j;
table = document.createElement('table');

table.style.fontFamily = 'monospace';
for (i=1; i<10; i++) {
row = document.createElement('tr');
for (j=1; j<10; j++) {
cell = document.createElement('td');
cell.appendChild(document.createTextNode(i*j));
cell.style.padding = '4px';
cell.style.width = 100 / 9 + '%';
cell.style.border = '1px solid gray';
row.appendChild(cell);
}
table.appendChild(row);
}
document.body.appendChild(table);

let currentElem = null;

table.onmouseover = function(event) {
  if (currentElem) return;
  let target = event.target.closest('td');
  if (!target) return;
  if (!table.contains(target)) return;
  currentElem = target;
  target.style.background = 'pink';
};

table.onmouseout = function(event) {
  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;
  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  currentElem.style.background = '';
  currentElem = null;
};

