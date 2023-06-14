/**
 * Queue is a linear data Structure | majorly perform two operation {EnQueue | DeQueue }
 * @description it follow the the first in first out approach
 */

let Queue = [];
let currentSize = Queue.length;
let maxSize = 5;

function enqueue(item) {
  if (currentSize > maxSize) {
    alert("Queue is already full");
  } else {
    Queue[currentSize] = item;
    currentSize += 1;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let index = 0; index < Queue.length; index++) {
      Queue[index] = Queue[index + 1];
    }
    currentSize--;
    Queue.length = currentSize;
  } else {
    console.log("Queue is empty ");
  }
}

enqueue(10);
enqueue(11);
enqueue(12);
enqueue(20);
enqueue(21);

dequeue();
dequeue();

console.log(Queue);
