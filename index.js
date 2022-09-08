const n = 29
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

  if (sand < (n - 2) / 2) {
    line.fill('#', i, j)
    sand++
  }

  console.log(line.join(''))
}
