const linkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    function getHead() {
        return head;
    }

    function getTail() {
        return tail;
    }

    function getSize() {
        return size;
    }

    function append(node) {
        const newTail = node;
        let currentNode = getHead();
        if (currentNode === null) {
            currentNode = newTail;
            head = currentNode;
            tail = currentNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newTail;
            tail = newTail;
        }
        size++;
    }

    function prepend(node) {
        const newHead = node;
        let currentNode = getHead();
        if (currentNode === null) {
            currentNode = newHead;
            head = currentNode;
            tail = currentNode;
        } else {
            newHead.next = currentNode;
            head = newHead;
        }
        size++;
    }

    function getNodeAt(index) {
        if (index > getSize() - 1 || index < 0) return null;
        let currentNode = getHead();
        for (let i = 1; i <= index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    function popNode() {
        let tailNode = getTail();
        let currentNode = getHead();
        if (tailNode === null) return;
        else {
            while (currentNode.next !== tailNode) {
                currentNode = currentNode.next;
            }
            currentNode.next = null;
            tail = currentNode;
            size--;
        }
    }

    function containsValue(recValue) {
        let currentNode = getHead();
        while (currentNode) {
            if (currentNode.value === recValue) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    return {
        append,
        prepend,
        getHead,
        getTail,
        getSize,
        getNodeAt,
        popNode,
        containsValue,
    };
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

myList.append(node3);
myList.append(node4);
myList.prepend(node2);
myList.prepend(node1);

myList.popNode();

console.log(myList.getHead());
console.log(myList.getSize());
console.log(myList.getTail());
console.log(myList.getNodeAt(0));
console.log(myList.containsValue("3"));
