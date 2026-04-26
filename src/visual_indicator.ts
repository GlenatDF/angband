document.addEventListener('godModeChange', (event: CustomEvent) => {
  const indicator = document.getElementById('god-mode-indicator');
  if (!indicator) return;

  if (event.detail) {
    indicator.style.display = 'block';
  } else {
    indicator.style.display = 'none';
  }
});

const indicatorElement = document.createElement('div');
indicatorElement.id = 'god-mode-indicator';
indicatorElement.innerText = 'God Mode Active';
indicatorElement.style.display = 'none';
indicatorElement.style.position = 'absolute';
indicatorElement.style.top = '10px';
indicatorElement.style.right = '10px';
indicatorElement.style.backgroundColor = 'yellow';
indicatorElement.style.color = 'black';
indicatorElement.style.padding = '5px';
document.body.appendChild(indicatorElement);