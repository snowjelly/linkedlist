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
    let counter;

    if (tmp.value === null) {
      counter = 0;
      return counter;
    } else {
      counter = 1;
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

  function tail() {
    let tmp = headVal;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  function at(index) {
    let tmp = headVal;
    let counter;
    const sizeVal = size();
    const length = sizeVal - 1;

    if (length === -1) {
      return new Error("The linked list must not be empty");
    }

    if (index > length) {
      return new Error(
        `Index specified is too large. The tail is at index ${length}`
      );
    }

    if (index < 0) {
      return new Error("Index cannot be less than 0");
    }

    if (tmp.value === null) {
      counter = 0;
      return counter;
    } else {
      counter = 1;
    }

    while (counter !== sizeVal) {
      const indexVal = index + 1;
      if (counter === indexVal) return tmp;
      tmp = tmp.nextNode;
      counter += 1;
      if (counter === indexVal) return tmp;
    }
  }

  function pop() {
    const sizeVal = size();

    if (sizeVal === 0) {
      return new Error("List must not be empty");
    }

    if (sizeVal === 1) {
      const prevTail = headVal;
      headVal = node();
      return prevTail;
    }

    const tailIndex = sizeVal - 1;
    const newTailIndex = tailIndex - 1;
    const newTail = at(newTailIndex);
    const prevTail = newTail.nextNode;
    newTail.nextNode = null;

    return prevTail;
  }

  return { prepend, head, append, size, tail, at, pop };
};

const list = LinkedList();

list.prepend("test");
list.prepend("B");
list.prepend("C");
list.append("D");
list.append("E");
