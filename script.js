const linkedList = () => {
    let head = null;

    function getHead() {
        return head;
    }

    function append(value) {
        const newNode = node(value);
        let currentNode = head;
        if (currentNode === null) {
            head = newNode.value;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode.value;
        }
        return { head };
    }

    return { append, getHead };
};

const node = (value = null, next = null) => {
    return { value, next };
};

const node1 = node("1");
const node2 = node("2");
const node3 = node("3");

const myList = linkedList();

myList.append(node1);
myList.append(node2);
myList.append(node3);

console.log(myList.getHead());
