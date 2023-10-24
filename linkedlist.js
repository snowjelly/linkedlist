const node = () => {
  return {
    value: null,
    nextNode: null,
  };
};

const LinkedList = () => {
  let headVal = null;

  function prepend(value) {
    const newNode = node();
    newNode.value = value;

    if (headVal === null) {
      headVal = newNode;
    }

    newNode.nextNode = headVal;
    headVal = newNode;
  }

  function head() {
    return headVal;
  }

  return { prepend, head };
};

const list = LinkedList();

list.prepend("test");
list.prepend("B");
list.prepend("C");

console.log(list.head());
