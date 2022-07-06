function luckCheck(ticket){
  if (ticket.length % 2 === 0) {
    return ticket.split('').slice(0, ~~ticket.length / 2).map(Number).reduce((accumulator, value) => accumulator + value, 0) === ticket.split('').slice(~~ticket.length / 2).map(Number).reduce((accumulator, value) => accumulator + value, 0)
  }

  return luckCheck(ticket.split('').filter((_, index, array) => index !== ~~(array.length / 2)).join(''))
}
