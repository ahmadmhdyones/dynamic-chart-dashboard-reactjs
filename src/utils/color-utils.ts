function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomRGBAColor(randomAlpha: boolean = true) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = randomAlpha ? Math.random().toFixed(2) : '1';
  const rgbaString = `rgba(${r}, ${g}, ${b}, ${a})`;

  return rgbaString;
}

export function getRandomColor(format: 'hex' | 'rgba' = 'hex') {
  if (format === 'hex') {
    return getRandomHexColor();
  }
  return getRandomRGBAColor();
}
