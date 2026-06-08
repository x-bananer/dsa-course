import test from 'node:test';
import assert from 'node:assert/strict';
import LinkedList from './LinkedList.js';

test('new: creates list with one node', () => {
    const list = new LinkedList(4);

    assert.equal(list.length, 1);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next, null);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
});

test('push: adds a node to a non-empty list', () => {
    const list = new LinkedList(4);

    const result = list.push(5);

    assert.equal(result, list);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.tail.value, 5);
    assert.equal(list.tail.next, null);
});

test('push: adds a node to an empty list', () => {
    const list = new LinkedList(4);
    list.head = null;
    list.tail = null;
    list.length = 0;

    const result = list.push(5);

    assert.equal(result, list);
    assert.equal(list.length, 1);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next, null);
    assert.equal(list.tail.value, 5);
    assert.equal(list.tail.next, null);
});

test('pop: removes the last node from a list with several nodes', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const removed = list.pop();

    assert.equal(removed.value, 6);
    assert.equal(removed.next, null);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.tail.value, 5);
    assert.equal(list.tail.next, null);
});

test('pop: removes the only node from a single-node list', () => {
    const list = new LinkedList(4);

    const removed = list.pop();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(list.length, 0);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
});

test('pop: returns undefined for an empty list', () => {
    const list = new LinkedList(4);
    list.head = null;
    list.tail = null;
    list.length = 0;

    const removed = list.pop();

    assert.equal(removed, undefined);
    assert.equal(list.length, 0);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
});

test('unshift: adds a node to a non-empty list', () => {
    const list = new LinkedList(4);

    const result = list.unshift(3);

    assert.equal(result, list);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next.value, 4);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
});

test('unshift: adds a node to an empty list', () => {
    const list = new LinkedList(4);
    list.head = null;
    list.tail = null;
    list.length = 0;

    const result = list.unshift(3);

    assert.equal(result, list);
    assert.equal(list.length, 1);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next, null);
    assert.equal(list.tail.value, 3);
    assert.equal(list.tail.next, null);
});

test('shift: removes the first node from a list with several nodes', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const removed = list.shift();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 6);
    assert.equal(list.tail.value, 6);
    assert.equal(list.tail.next, null);
});

test('shift: removes the only node from a single-node list', () => {
    const list = new LinkedList(4);

    const removed = list.shift();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(list.length, 0);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
});

test('shift: returns undefined for an empty list', () => {
    const list = new LinkedList(4);
    list.head = null;
    list.tail = null;
    list.length = 0;

    const removed = list.shift();

    assert.equal(removed, undefined);
    assert.equal(list.length, 0);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
});

test('get: returns a node at a particular index', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const node = list.get(1);

    assert.equal(node.value, 5);
    assert.equal(node.next.value, 6);
});

test('get: returns undefined if index is negative', () => {
    const list = new LinkedList(4);

    const node = list.get(-1);

    assert.equal(node, undefined);
});

test('get: returns undefined if index is out of bounds', () => {
    const list = new LinkedList(4);

    const node = list.get(1);

    assert.equal(node, undefined);
});

test('set: updates a node at a particular index', () => {
    const list = new LinkedList(4);
    list.push(5);

    const result = list.set(1, 42);

    assert.equal(result, true);
    assert.equal(list.get(1).value, 42);
});

test('set: returns false if index is negative', () => {
    const list = new LinkedList(4);

    const result = list.set(-1, 42);

    assert.equal(result, false);
});

test('set: returns false if index is out of bounds', () => {
    const list = new LinkedList(4);

    const result = list.set(1, 42);

    assert.equal(result, false);
});

test('insert: adds a node at the beginning of the list', () => {
    const list = new LinkedList(4);
    list.push(5);

    const result = list.insert(0, 3);

    assert.equal(result, list);
    assert.equal(list.length, 3);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next.value, 4);
    assert.equal(list.tail.value, 5);
});

test('insert: adds a node at the end of the list', () => {
    const list = new LinkedList(4);
    list.push(5);

    const result = list.insert(2, 6);

    assert.equal(result, list);
    assert.equal(list.length, 3);
    assert.equal(list.tail.value, 6);
    assert.equal(list.tail.next, null);
});

test('insert: adds a node at a particular index', () => {
    const list = new LinkedList(4);
    list.push(6);

    const result = list.insert(1, 5);

    assert.equal(result, list);
    assert.equal(list.length, 3);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.head.next.next.value, 6);
    assert.equal(list.tail.value, 6);
});

test('insert: returns undefined if index is negative', () => {
    const list = new LinkedList(4);

    const result = list.insert(-1, 5);

    assert.equal(result, undefined);
});

test('insert: returns undefined if index is out of bounds', () => {
    const list = new LinkedList(4);

    const result = list.insert(2, 5);

    assert.equal(result, undefined);
});

test('remove: removes the first node from the list', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const removed = list.remove(0);

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 6);
    assert.equal(list.tail.value, 6);
    assert.equal(list.tail.next, null);
});

test('remove: removes the last node from the list', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const removed = list.remove(2);

    assert.equal(removed.value, 6);
    assert.equal(removed.next, null);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.tail.value, 5);
    assert.equal(list.tail.next, null);
});

test('remove: removes a node at a particular index', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const removed = list.remove(1);

    assert.equal(removed.value, 5);
    assert.equal(removed.next, null);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next.value, 6);
    assert.equal(list.tail.value, 6);
    assert.equal(list.tail.next, null);
});

test('remove: returns undefined if index is negative', () => {
    const list = new LinkedList(4);

    const removed = list.remove(-1);

    assert.equal(removed, undefined);
});

test('remove: returns undefined if index is out of bounds', () => {
    const list = new LinkedList(4);

    const removed = list.remove(1);

    assert.equal(removed, undefined);
});

test('reverse: reverses a list with several nodes', () => {
    const list = new LinkedList(4);
    list.push(5);
    list.push(6);

    const result = list.reverse();

    assert.equal(result, list);
    assert.equal(list.length, 3);
    assert.equal(list.head.value, 6);
    assert.equal(list.head.next.value, 5);
    assert.equal(list.head.next.next.value, 4);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
});

test('reverse: reverses a list with two nodes', () => {
    const list = new LinkedList(4);
    list.push(5);

    const result = list.reverse();

    assert.equal(result, list);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 4);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
});

test('reverse: returns the same single-node list', () => {
    const list = new LinkedList(4);

    const result = list.reverse();

    assert.equal(result, list);
    assert.equal(list.length, 1);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next, null);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
});

test('reverse: returns the same empty list', () => {
    const list = new LinkedList(4);
    list.head = null;
    list.tail = null;
    list.length = 0;

    const result = list.reverse();

    assert.equal(result, list);
    assert.equal(list.length, 0);
    assert.equal(list.head, null);
    assert.equal(list.tail, null);
});
