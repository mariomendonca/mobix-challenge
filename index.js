const n = 40

function drawHourglass(sandStart) {
  let j = n
  let sand = 0
  for (let i = 0; i < n; i++) {
    j -= 1
    if (i === 0 || i === n - 1) {
      const line = Array(n).fill('#')
      console.log(line.join(''))
      continue
    }

    const line = Array(n).fill(' ')
    line[0] = '#'
    line[n - 1] = '#'
    line[i] = '#'
    line[j] = '#'

    if (sand < (n - 2) / 2 && sandStart === i) {
      if (j >= i) {
        line.fill('#', i, j)
      } else {
        line.fill('#', j, i)
      }
      sand++
      sandStart++
    }

    console.log(line.join(''))
  }

}

let sandStart = 1
const timer = setInterval(() => {
  if (sandStart > ((n - 2) / 2) + 1)  {
    console.log('Timer finished')
    clearInterval(timer);
    return
  }
  console.log('Timer:', sandStart - 1, ' seconds')
  drawHourglass(sandStart)
  sandStart++
}, 1000)
