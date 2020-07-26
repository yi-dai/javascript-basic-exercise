export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  /*
  function LinkedList() {
    const Node = function Node(element) {
      this.value = element;
      this.next = null;
      // eslint-disable-next-line no-console
      // console.log('ccc');
    };
    let head = null;
    this.append = function Append(element) {
      // eslint-disable-next-line no-console
      // console.log('append');
      const node = new Node(element);
      let current;
      if (head === null) {
        head = node;
        // eslint-disable-next-line no-console
        // console.log(head.value);
      } else {
        current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        // eslint-disable-next-line no-console
        // console.log(current);
      }
      // eslint-disable-next-line no-console
      // console.log(head);
    };
    this.display = function Display() {
      let now = this.head;
      while (now) {
        // eslint-disable-next-line no-console
        console.log('aaaa');
        // eslint-disable-next-line no-console
        console.log(now.value);
        now = now.next;
      }
    };
  }
  const list = new LinkedList();
  if (!array) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  } else if (array.length >= 1) {
    for (let i = 0, len = array.length; i < len - 1; i += 1) {
      list.append(array[i]);
      // eslint-disable-next-line no-console
      // console.log(list);
    }
    list.display();
    // eslint-disable-next-line no-console
    // console.log(list.head);
    return list.head;
  }
  */
  let result = { value: null, next: null };
  let presult = { value: null, next: null };
  if (!array) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  } else if (array.length >= 1) {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      presult = result;
      if (presult.value !== null) {
        result = { value: array[i], next: presult };
      } else {
        result = { value: array[i], next: null };
      }
    }
  }
  return result;
}
