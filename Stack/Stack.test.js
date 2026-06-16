import test from 'node:test';
import assert from 'node:assert/strict';
import Stack from './Stack.js';

test('new: creates stack with one node', () => {
    const stack = new Stack(4);

    assert.equal(stack.size, 1);
    assert.equal(stack.top.value, 4);
    assert.equal(stack.top.next, null);
});

test('push: adds a node to a non-empty stack', () => {
    const stack = new Stack(4);

    const result = stack.push(5);

    assert.equal(result, stack);
    assert.equal(stack.size, 2);
    assert.equal(stack.top.value, 5);
    assert.equal(stack.top.next.value, 4);
    assert.equal(stack.top.next.next, null);
});

test('push: adds a node to an empty stack', () => {
    const stack = new Stack(4);
    stack.top = null;
    stack.size = 0;

    const result = stack.push(5);

    assert.equal(result, stack);
    assert.equal(stack.size, 1);
    assert.equal(stack.top.value, 5);
    assert.equal(stack.top.next, null);
});

test('pop: removes the top node from a stack with several nodes', () => {
    const stack = new Stack(4);
    stack.push(5);
    stack.push(6);

    const removed = stack.pop();

    assert.equal(removed.value, 6);
    assert.equal(removed.next, null);
    assert.equal(stack.size, 2);
    assert.equal(stack.top.value, 5);
    assert.equal(stack.top.next.value, 4);
    assert.equal(stack.top.next.next, null);
});

test('pop: removes the only node from a single-node stack', () => {
    const stack = new Stack(4);

    const removed = stack.pop();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(stack.size, 0);
    assert.equal(stack.top, null);
});

test('pop: returns undefined for an empty stack', () => {
    const stack = new Stack(4);
    stack.top = null;
    stack.size = 0;

    const removed = stack.pop();

    assert.equal(removed, undefined);
    assert.equal(stack.size, 0);
    assert.equal(stack.top, null);
});
