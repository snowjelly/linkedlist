const node = () => {
  return {
    value: null,
    nextNode: null,
  };
};

const LinkedList = () => {
  let headVal = null;

  function prepend(value) {
    const newHead = node();
    newHead.value = value;
    headVal = newHead;
  }

  function head() {
    return headVal;
  }

  return { prepend, head };
};

const list = LinkedList();

list.prepend("test");
