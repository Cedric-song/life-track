function createList(type = 'weight') {
  let arr = []
  for (let i = 0; i < 50; i++) {
    arr.push({
      index: i.toString(),
      date: createDate(),
      value: type === 'cost' ? ~~(20 + i * 0.5) + '元' : (80 - i / 10) + 'KG'
    })
  }
  return arr
}

// function formatDate(date) {
//   return date.replace(/\//gi, '-')
// }

function createDate() {
  const time = new Date()
  return time.getFullYear() + '/' + dateLength(time.getMonth() + 1) + '/' + dateLength(time.getDate())
}

function dateLength(num) {
  const str = num.toString()
  return str.length === 1 ? (0 + str) : str
}

export default createList
