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
    while (tmp.nextNode !== null) {
      if (tmp.nextNode.value === null) {
        break;
      }
      tmp = tmp.nextNode;
    }
    tmp.nextNode = node();
    tmp.nextNode.value = value;
  }

  function head() {
    return headVal;
  }

  function size() {
    let tmp = headVal;
    let counter = 1;
    if (tmp.value === null) {
      counter = 0;
      return counter;
    }
    while (tmp.nextNode !== null) {
      if (tmp.nextNode.value === null) {
        break;
      }
      tmp = tmp.nextNode;
      counter += 1;
    }
    return counter;
  }

  return { prepend, head, append, size };
};

const list = LinkedList();

list.prepend("test");
list.prepend("B");
list.prepend("C");
list.append("D");
list.append("E");
