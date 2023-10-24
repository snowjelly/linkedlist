const node = () => {
  return {
    value: null,
    nextNode: null,
  };
};

const LinkedList = () => {
  let headVal = node();

  function prepend(value) {
    const newNode = node();
    newNode.value = value;

    newNode.nextNode = headVal;
    headVal = newNode;
  }

  function append(value) {
    let tmp = headVal;
  }

  function head() {
    return headVal;
  }

  return { prepend, head, append };
};

const list = LinkedList();

list.prepend("test");
list.prepend("B");
list.prepend("C");
console.log(list.append("D"));

console.log(list.head());
