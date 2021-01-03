/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const firstReserveArray = retrieveListElementsIntoArray(l1);
  const secondReverseArray = retrieveListElementsIntoArray(l2);
  const firstArray = reverseArray(firstReserveArray);
  const secondArray = reverseArray(secondReverseArray);
  const firstNumber = transformArrayIntoInteger(firstArray);
  const secondNumber = transformArrayIntoInteger(secondArray);
  const sum = firstNumber + secondNumber;
  const resultArray = transformNumberIntoArray(sum);
  /* THIS IS NOT THE SOLUTION YET. THERE IS SOME PROBLEM WITH THE 
  transformArrayIntoInteger method */
  console.log({firstNumber, secondNumber, sum, resultArray})
  console.log(resultArray);
};

const retrieveListElementsIntoArray = linkedList => {
  let arr = [];
  while (linkedList.next !== null) {
    arr.push(linkedList.val)
    linkedList = linkedList.next;
  }

  return arr;
}

const reverseArray = arr => {
  return arr.reverse();
}

const transformArrayIntoInteger = arr => {
  return arr.map(number =>  parseInt(number, 10));
}

const transformNumberIntoArray = number => {
  return number.toString(10).replace(/\D/g, '0').split('').map(Number);
}
