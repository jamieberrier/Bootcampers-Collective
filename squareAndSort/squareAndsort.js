/* 
Square and Sort
Given a sorted list of integers, square the elements 
and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
*/

const squareAndSort = arr => {
  let squares = arr.map(num => num ** 2)

  for(let i = 0; i < squares.length; i++) {
    if(squares[i] > squares[i + 1]) {
      let temp = squares[i]
      squares[i] = squares[i + 1]
      squares[i + 1] = temp
    }
  }

  return squares
}

squareAndSort([-2,0,2,4,8])