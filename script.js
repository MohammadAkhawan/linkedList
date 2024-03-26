const linkedList = () => {
    let head = null;

    function getHead() {
        return head;
    }

    function append(node) {
        const newTail = node;
        let currentNode = head;
        if (currentNode === null) {
            currentNode = newTail;
            head = currentNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newTail;
        }
    }

    function prepend(node) {
        const newHead = node;
        let currentNode = head;
        if (currentNode === null) {
            currentNode = newHead;
            head = currentNode;
        } else {
            newHead.next = currentNode;
            head = newHead;
        }
    }

    

    return { append, prepend, getHead };
};

const node = (value = null, next = null) => {
    return { value, next };
};

const node1 = node("1");
const node2 = node("2");
const node3 = node("3");
const node4 = node("4");
const node5 = node("5");
const node6 = node("6");
const node7 = node("7");
const node8 = node("8");
const node9 = node("9");

const myList = linkedList();

myList.append(node1);
myList.append(node2);
myList.append(node3);
myList.append(node4);
myList.prepend(node6);
myList.prepend(node9);

console.log(myList.getHead());
