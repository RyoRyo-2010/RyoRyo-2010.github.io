document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('#bingo .cell-btn'));

  const colRanges = [
    { start: 1, end: 15 },
    { start: 16, end: 30 },
    { start: 31, end: 45 },
    { start: 46, end: 60 },
    { start: 61, end: 75 }
  ];

  // prepare 5 unique numbers per column (shuffle ranges and take first 5)
  const cols = colRanges.map(r => {
    const arr = [];
    for (let n = r.start; n <= r.end; n++) arr.push(n);
    shuffle(arr);
    return arr.slice(0, 5);
  });

  buttons.forEach((btn, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    const num = cols[col][row];
    btn.dataset.num = String(num);
    btn.value = String(num);

    // center cell (2,2) starts as ◎
    if (row === 2 && col === 2) {
      btn.textContent = '◎';
      btn.value = '◎';
      btn.classList.add('selected');
    } else {
      btn.textContent = String(num);
    }

    btn.addEventListener('click', () => {
      if (btn.textContent === String(btn.dataset.num)) {
        btn.textContent = '◎';
        btn.value = '◎';
        btn.classList.add('selected');
      } else if (btn.textContent === '◎') {
        btn.textContent = btn.dataset.num;
        btn.value = btn.dataset.num;
        btn.classList.remove('selected');
      } else {
        btn.textContent = '◎';
        btn.value = '◎';
        btn.classList.add('selected');
      }
    });
  });
  document.querySelector('#timestamp').textContent = new Date().toLocaleString();

  function shuffle(a) {
    for (let i = 100; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i%a.length], a[j%a.length]] = [a[j%a.length], a[i%a.length]];
    }
  }
});
