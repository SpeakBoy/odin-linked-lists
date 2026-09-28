const { default: ListNode } = await import("./node.js");

class LinkedList {
    #head = undefined;
    #tail = undefined;
    #size = 0;

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new ListNode();
        newNode.value = value;

        // If the list is empty, the new node is the head.  
        if (this.size() === 0) {
            this.#head = newNode;
        }
        
        // If a tail exists, then the existing tail should point to the new node.
        if (this.#tail) {
            this.#tail.nextNode = newNode;
        }

        // The new node becomes the tail.
        this.#tail = newNode;

        this.#size++;
    }

    // Adds a new node containing value to the start of the list.
    prepend(value) {
        const newNode = new ListNode();
        newNode.value = value;

        // If the list is empty, the new node is the tail.
        if (this.size() === 0) {
            this.#tail = newNode;
        }

        // If a head exists, then the new node should point to the existing head.
        if (this.#head) {
            newNode.nextNode = this.#head;
        }

        // The node becomes the head.
        this.#head = newNode;

        this.#size++;
    }

    // Returns the total number of nodes in the list.
    size() {
        return this.#size;
    }

    // Should return the value of the first node in the list. 
    // If the list is empty, it should return undefined.
    head() {
        if (this.size() > 0) {
            return this.#head.value;
        }
        return undefined;
    }

    // Should return the value of the final node in the list.
    // If the list is empty, it should return undefined.
    tail() {
        if (this.size() > 0) {
            return this.#tail.value;
        }
        return undefined;
    }

    // Should return the value at the given index. 
    // If there is no node at the given index, it should return undefined.
    at(index) {
        let i = 0;
        let currentNode = this.#head;
        // Search through each element of the list until the current index equals the search index.
        while (currentNode) {
            if (i === index) {
                return currentNode.value;
            }
            currentNode = currentNode.nextNode;
            i++;
        }
        return undefined;
    }

    // Should remove the head node from the list and return its value.
    // If it's used on an empty list, it should return undefined.
    pop() {
        if (this.size() === 0) {
            return undefined;
        }

        // Store the value of the head (to be popped).
        const poppedValue = this.#head.value;

        // The element the head is pointing to becomes the new head
        this.#head = this.#head.nextNode;
        this.#size--;

        // If the list becomes empty,
        // then the tail no longer exists and is updated accordingly.
        if (this.size() === 0) {
            this.#tail = undefined;
        }

        return poppedValue;
    }

    // Returns true if the passed value is in the list 
    // and otherwise returns false.
    contains(value) {
        let currentNode = this.#head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing the given value.
    // If the value can't be found in the list, it should return -1.
    // If more than one node has a value matching the given value,
    // it should return the index of the first node with the matching value.
    findIndex(value) {
        let i = 0;
        let currentNode = this.#head;
        while (currentNode) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.nextNode;
            i++;
        }
        return -1;
    }

    // Represents LinkedList objects as strings,
    // so you can print them out and preview them in the console.
    // If the list is empty, it should return an empty string.
    toString() {
        if (this.size() === 0) {
            return "";
        }

        let listString = "";
        let currentNode = this.#head;
        while (currentNode) {
            listString += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }

        listString += "null";
        return listString;
    }
}