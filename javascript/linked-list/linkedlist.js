'use strict';

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) { //means LL is empty
            this.head = node;
        } else { //means LL is not empty
            node.next = this.head;
            this.head = node;
        }
    }



    includes(value) {

        let current = this.head; // Initialize current

        while (current) {

            if (current.value == value) {

                return true; // data found
            }

            current = current.next;
        }
        return false; // data not found

    }

    toString() {

        let stringLinked = "";
        let current = this.head;

        while (current) {

            stringLinked += `{${current.value}} -> `

            current = current.next;

        }

        stringLinked += `NULL`;
        return stringLinked;

    }
    append(value) {
        let appended = new Node(value);

        if (!this.head) {
            this.head = appended;
            return this.head;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        current.next = appended;
    }

    insertBefore(value, newValue) {

        let node = new Node(newValue);
        let current = this.head;

        if (value === this.head.value) {
            this.insert(newValue);
            return this.head;
        }

        while (current.next !== null) {
            if (current.next.value === value) {
                node.next = current.next;
                current.next = node;
                return this.head;
            }
            current = current.next;
        }
    }

    insertAfter(value, newValue) {
        let node = new Node(newValue);
        let current = this.head;

        while (current) {
            if (current.value == value) {
                node.next = current.next;
                current.next = node;
                return this.head;
            }

            current = current.next;
        }}

        reverselinkedlist (){

           let newOne =new LinkedList();
            let current =this.head
            while (current){

         newOne.insert(current.value);
         current =current.next
                
            }

            return newOne;


        }








        
    }



























module.exports = LinkedList;