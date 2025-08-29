1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById(): Selects only one element (since IDs must be unique)
getElementsByClassName(): Selects all elements with the same class
querySelector(): Selects the first matching element using a CSS selector
querySelectorAll(): Selects all matching elements using a CSS selecto

2. How do you create and insert a new element into the DOM?
Ans: const newElement = document.createElement('div');
newElement.textContent = 'New Content';
document.body.appendChild(newElement);

3. What is Event Bubbling and how does it work?
Ans:Event bubbling is when an event occurs on an element, it gradually propagates upward to parent elements in the DOM hierarchy.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is adding an event listener to a parent element to handle events from all its child elements. It is useful because:
Better performance - Fewer event listeners needed
Works with dynamic elements - Automatically handles elements added later
Less memory usage - More efficient memory management

5. What is the difference between preventDefault() and stopPropagation() methods? aytar uttor choto kore daw banglay
Ans: preventDefault(): Stops the browser's default behavior
stopPropagation(): Stops event bubbling
