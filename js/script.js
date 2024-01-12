// Event Types, Event Handlers, Event Bubbling, Event Capturing and Event Delegation
const eventContainer = document.getElementById("eventContainer");
const eventPara = document.createElement("p");

eventPara.innerHTML = `<pre><b>Events</b> are a fundamental part of the web. In the browser, they are triggered by user actions. For example, when a user clicks on a button, an event is triggered. The <b>Event Handler</b> is a function that is executed when the event occurs. There are many types of events in the browser like <span>User Interface Events, Focus and blur Events, Mouse Events, Keyboard Events, Form Events, Mutation Events and Observers, HTML Events, CSS Events</span> and many more.

Additionally, there are three types to register <b>Event Handlers</b>. One is register through <b>addEventListener</b> method and other two are called <b>Event Handler Properties</b> and <b>Inline Event Handlers</b>.

Let's see them in action. First we'll see the least recommended approach, the <b>Inline Event Handler</b>

<button class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 outline-none text-white font-bold py-2 px-4 rounded" type="button" onclick="changeBackground()">Change background</button>

Now, let's do it with moderately recommended approach, the <b>Event Handler Property</b>.

</pre>`;

const eventPara1 = document.createElement("p");
eventPara1.innerHTML = `<pre>Last but not the least, let's do it with the most and best recommended approach, the <b>addEventListener</b> method.`;

const eventHeader = document.createElement("h5");
eventHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700 mt-6"
);
eventHeader.innerText = "Event objects";

const eventPara2 = document.createElement("p");
eventPara2.innerHTML = `<pre>
Sometimes, inside an event handler function, you'll see a parameter specified with a name such as <span>event</span>, <span>evt</span>, or <span>e</span>. This is called the <b>event object</b>, and it is automatically passed to event handlers to provide extra features and information.</pre>`;

const eventLink = document.createElement("a");
eventLink.setAttribute(
  "class",
  "text-lg font-bold my-3 hover:text-red-700 hover:underline underline-offset-4 focus:underline focus:text-red-700 outline-none text-center text-blue-700 block font-sans"
);
eventLink.innerText = "Read more on MDN";
eventLink.href =
  "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects";

// Event Handler Property mechanism
const eventBtn = document.createElement("button");
eventBtn.innerText = "Change background";
eventBtn.setAttribute(
  "class",
  "bg-green-500 hover:bg-green-700 focus:bg-green-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg self-start mb-6"
);
eventBtn.setAttribute("type", "button");
eventBtn.onclick = changeBackground;

// addEventListener mechanism
const eventBtn1 = document.createElement("button");
eventBtn1.innerText = "Change background";
eventBtn1.setAttribute(
  "class",
  "bg-purple-500 hover:bg-purple-700 focus:bg-purple-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg self-start mt-6"
);
eventBtn1.setAttribute("type", "button");
eventBtn1.addEventListener("click", changeBackground);

// Change background mechanism
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndBgCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  eventContainer.style.backgroundColor = rndBgCol;
  eventPara.firstChild.style.color = rndCol;
  eventPara1.firstChild.style.color = rndCol;
  eventPara2.firstChild.style.color = rndCol;
}

eventContainer.append(
  eventPara,
  eventBtn,
  eventPara1,
  eventBtn1,
  eventHeader,
  eventPara2,
  eventLink
);

// Event Bubbling
const eventFeaturesContainer = document.getElementById(
  "eventFeaturesContainer"
);
const eventFeaturesPara = document.createElement("p");
eventFeaturesPara.innerHTML = `<pre><b>Event bubbling</b> describes how the browser handles events targeted at nested elements echoing up the DOM tree i.e. the parent elements of the target to the most parent element.
Let's see them in action. First, we'll set a event listener on the parent element of a button.</pre>`;

const eventFeaturesPara1 = document.createElement("p");
eventFeaturesPara1.innerHTML = `<pre>

Now, let's see the <b>Bubbling example</b>. What happens if we add event listeners to the button and the parent?</pre>`;

const eventFeaturesPara2 = document.createElement("p");
eventFeaturesPara2.innerHTML = `<pre>

What happens In this case is:
<ul class="list-disc list-inside"><li>the click on the button fires first</li><li>followed by the click on its parent (the <span>&lt;div&gt;</span> element)</li><li>it can be followed by the <span>&lt;div&gt;</span> element's parent (the <span>&lt;body&gt;</span> element) if we set the event listener on the <span>&lt;body&gt;</span>.</li></ul>
We describe this by saying that the event <b>bubbles up</b> from the innermost element that was clicked.

This behavior can be useful and can also cause unexpected problems. Want to see some? <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#video_player_example" title="See this on MDN" class="text-md font-bold text-blue-400 hover:underline underline-offset-4 focus:underline hover:text-blue-600 focus:text-blue-600">Let's See on MDN</a>

</pre>`;

// Listen to events on parent only
const parentContainer = document.createElement("div");
const containerBtn = document.createElement("button");
const outputContainer = document.createElement("pre");
containerBtn.innerText = "Click me";
containerBtn.setAttribute(
  "class",
  "bg-red-500 hover:bg-red-700 focus:bg-red-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg mt-6 mb-3"
);
parentContainer.append(containerBtn);
parentContainer.addEventListener("click", (e) =>
  handleClick(e, outputContainer)
);

// Listen to events on button and parent
const parentContainer1 = document.createElement("div");
const containerBtn1 = document.createElement("button");
const outputContainer1 = document.createElement("pre");
containerBtn1.innerText = "Click me";
containerBtn1.setAttribute(
  "class",
  "bg-purple-500 hover:bg-purple-700 focus:bg-purple-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg mt-6 mb-3"
);
parentContainer1.append(containerBtn1);
parentContainer1.addEventListener("click", (e) =>
  handleClick(e, outputContainer1)
);
containerBtn1.addEventListener("click", (e) =>
  handleClick(e, outputContainer1)
);
/* document.body.addEventListener("click", (e) =>
  handleClick(e, outputContainer1)
); */

// Event Bubbling mechanism
function handleClick(event, element) {
  element.innerHTML += `<b>You clicked on a ${event.currentTarget.tagName} element</b>\n`;
}

// Event Capturing
const eventFeaturesHeader = document.createElement("h5");
eventFeaturesHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700"
);
eventFeaturesHeader.innerText = "Now, let's understand Event Capturing";

const eventFeaturesPara3 = document.createElement("p");
eventFeaturesPara3.innerHTML = `<pre>An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the <span>capture</span> option in <span>addEventListener()</span>. Let's see the example. It's much like earlier bubbling example, but now we have used the <span>capture</span> option:</pre>`;
const eventFeaturesPara4 = document.createElement("p");
eventFeaturesPara4.innerHTML = `<pre>

<b>Event Bubbling and Capturing</b> can be very useful. But it also can be very confusing and can cause unexpected problems. To prevent that, we can use the <span>stopPropagation()</span> method to stop bubbling up to parent elements <i>or</i> capturing down to child elements and <span>stopImmediatePropagation()</span> method to do work like <span>stopPropagation()</span>, as well as stoping all the event listeners registered on the target element from being executed. Let's see them in action:</pre>`;

// Event Capturing Demo
const parentContainer2 = document.createElement("div");
const containerBtn2 = document.createElement("button");
const outputContainer2 = document.createElement("pre");

containerBtn2.innerText = "Click me";
containerBtn2.setAttribute(
  "class",
  "bg-green-500 hover:bg-green-700 focus:bg-green-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg mt-6 mb-3"
);

parentContainer2.append(containerBtn2);

parentContainer2.addEventListener(
  "click",
  (e) => handleClick(e, outputContainer2),
  { capture: true }
);
containerBtn2.addEventListener("click", (e) =>
  handleClick(e, outputContainer2)
);

// Stop Propagation Demo
const parentContainer3 = document.createElement("div");
const containerBtn3 = document.createElement("button");
const outputContainer3 = document.createElement("pre");

containerBtn3.innerText = "Click me";
containerBtn3.setAttribute(
  "class",
  "bg-lime-500 hover:bg-lime-700 focus:bg-lime-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg mt-6 mb-3"
);

parentContainer3.append(containerBtn3);

parentContainer3.addEventListener("click", (e) =>
  handleClick(e, outputContainer3)
);
containerBtn3.addEventListener("click", (e) =>
  stopPropagation(e, outputContainer3)
);
containerBtn3.addEventListener("click", (e) => {
  e.currentTarget.classList.add("w-52");
});

const eventFeaturesPara5 = document.createElement("p");
eventFeaturesPara5.innerHTML = `<pre>

We clicked the <span>&lt;button&gt;</span> inside the <span>&lt;div&gt;</span> container, but instead of it's default behavior for bubbling up to the parent <span>&lt;div&gt;</span> container, we stopped the event propagation. Though, you can see our another event listener on the same element <b>to make the button bigger</b> takes effect. To stop that also, we have to use the <span>stopImmediatePropagation()</span> method. Let's see it in action:</pre>`;

// Stop Event Propagation mechanism
function stopPropagation(event, element) {
  event.stopPropagation();
  element.innerHTML += `<b>You clicked on a ${event.currentTarget.tagName} element</b>\n`;
}

// Stop Immediate Propagation
const parentContainer4 = document.createElement("div");
const containerBtn4 = document.createElement("button");
const outputContainer4 = document.createElement("pre");

containerBtn4.innerText = "Click me";
containerBtn4.setAttribute(
  "class",
  "bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 outline-none text-white font-bold py-2 px-4 rounded font-mono text-lg mt-6 mb-3"
);

parentContainer4.append(containerBtn4);

parentContainer4.addEventListener("click", (e) =>
  handleClick(e, outputContainer4)
);
containerBtn4.addEventListener("click", (e) =>
  stopImmediatePropagation(e, outputContainer4)
);
containerBtn4.addEventListener("click", (e) => {
  e.currentTarget.classList.add("w-52");
});

const eventFeaturesPara6 = document.createElement("p");
eventFeaturesPara6.innerHTML = `<pre>

Now, despite the second event listener being registered on the <span>&lt;button&gt;</span> element, the button <b>will not be bigger</b> anymore. <p class="hidden md:inline">Now let's understand <a href="../learn-advance-js/index.html#eventDelegationHeader" title="Event Delegation" class="text-md font-bold text-blue-400 hover:underline underline-offset-4 focus:underline hover:text-blue-600 focus:text-blue-600" id="eventDelegationClick"><b>Event Delegation</b></a></p></pre>`;

// Stop Immediate Propagation mechanism
function stopImmediatePropagation(event, element) {
  event.stopImmediatePropagation();
  element.innerHTML += `<b>You clicked on a ${event.currentTarget.tagName} element</b>\n`;
}

eventFeaturesContainer.append(
  eventFeaturesPara,
  parentContainer,
  outputContainer,
  eventFeaturesPara1,
  parentContainer1,
  outputContainer1,
  eventFeaturesPara2,
  eventFeaturesHeader,
  eventFeaturesPara3,
  parentContainer2,
  outputContainer2,
  eventFeaturesPara4,
  parentContainer3,
  outputContainer3,
  eventFeaturesPara5,
  parentContainer4,
  outputContainer4,
  eventFeaturesPara6
);

// Event Delegation Practice
const eventDelegationContainer = document.createElement("div");
const eventDelegationHeader = document.createElement("h5");
const eventDelegationPara = document.createElement("p");
const eventDelegationClick = document.getElementById("eventDelegationClick");

eventDelegationContainer.setAttribute("class", "md:hidden");

eventDelegationHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700"
);
eventDelegationHeader.setAttribute("id", "eventDelegationHeader");

eventDelegationHeader.innerText = "Let's understand Event Delegation";

eventDelegationPara.innerHTML = `<pre>Well, <b>Event Bubbling</b> isn't just annoying, though: it can be very useful. In particular, it enables <b>Event Delegation</b>. So, <b>Event Delegation</b> is a pattern based upon the concept of <b>Event Bubbling</b>. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

Let's assume we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually. This pattern arises the following question:

<b>How Does Event Delegation Work?</b>

As stated above, With event delegation, instead of handling the click event on every child individually, you can handle it on their parent. The idea is that you <q class="italic font-semibold">delegate</q> the handling of an event to a different element (specifically the parent element) instead of the actual element that received the event.
Before going to see it in action we must know the difference between <span>target</span> and <span>currentTarget</span> properties. As mentonied in stack overflow, <span>target</span> is the element that received the event or triggered the event (e.g., the user clicked on), and <span>currentTarget</span> is the element that is handling the event or you can say the element that the event listener is attached to. Let's see an example:

</pre>`;

eventDelegationClick.addEventListener("click", (event) => {});

const eventDelExmpCon = document.createElement("div");
eventDelExmpCon.setAttribute("class", "w-full");

// create 16 child elements for the demo purposes
for (let i = 0; i < 16; i++) {
  const childElement = document.createElement("div");
  childElement.setAttribute(
    "class",
    "w-1/4 h-[100px] float-left border-solid border-slate-400 border-2 rounded-md grid place-content-center font-mono text-lg cursor-pointer"
  );
  childElement.innerText = `Click ${i + 1}`;

  eventDelExmpCon.append(childElement);
}

// Event Delegation mechanism
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

eventDelExmpCon.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

eventDelegationContainer.append(
  eventDelegationHeader,
  eventDelegationPara,
  eventDelExmpCon
);

eventContainer.append(eventDelegationContainer);

// Event Interaction Practice
// TODO: Show users a message when they're trying to close the tab/window

addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";

  // unfortunately, this custom message won't be shown in most of the modern browsers
  // for security reasons
  return `Hey! Wait!
Warning: This is a event triggered purely for JS events pratice purpose.
Are you sure you want to close the tab?`;
});

// TODO: Develop same functionality when the user navigates away for the mobile devices
/* addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "hidden") {
    confirm(`Hey! Wait!
Warning: This is a event triggered purely for JS events pratice purpose.
Are you sure you want to close the tab?`);
  }
}); */

// DOM manipulation and ES6 practice
const templateContainer = document.getElementById("templateContainer");
const templatePara = document.createElement("p");
const templatePara2 = document.createElement("p");
const templatePara3 = document.createElement("p");
const poemPara = document.createElement("p");

// ES6 template literal practice
templatePara.innerHTML =
  "<pre>ES6 Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates. It offers a more concise syntax for creating strings than concatenation and interpolation.</pre><br>";

templatePara2.innerHTML =
  "<pre>In JS, writing multi-line strings with string literals like single qoute ('') or double qoute (\"\") need to be escaped with escape sequences like \\n for new line, and \\t for tab etc.</pre><br>";

templatePara3.innerHTML = `<pre>But with template literal, we can write as many multi-line strings as we want without using escape sequences. Let's see an example by writing a famous poem called The Road Not Taken, by Robert Frost.

</pre>`;

poemPara.innerHTML = `<pre>
<b>The Road Not Taken by Robert Frost</b>
Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.
</pre>`;

templateContainer.append(templatePara, templatePara2, templatePara3, poemPara);

// ES6 interpolation practice
const interpolateContainer = document.getElementById("interpolateContainer");
const interpolatePara = document.createElement("p");
const interpolatePara2 = document.createElement("p");

// ES6 interpolation
interpolatePara.innerHTML = `<pre>Previously in JS, without template literals, when we want to combine output from expressions with strings, we concatenate them using the addition operator +:

Code:
<code>const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

Output in the console:
// "Fifteen is 15 and
// not 20."</code>
`;

interpolatePara2.innerHTML = `<pre>That can be hard to read — especially when you have multiple expressions.

With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form <span>\${expression}</span> to perform substitutions for embedded expressions:

Code:
<code>const a = 5;
const b = 10;
console.log(\`Fifteen is \${a + b} and
not \${2 * a + b}.\`);

Output in the console:
// "Fifteen is 15 and
// not 20."</code>
Note that there's a mild difference between the two syntaxes. Template literals coerce their expressions directly to strings, while addition coerces its operands to primitives first.
</pre>`;

interpolateContainer.append(interpolatePara, interpolatePara2);

// Tagged template practice
const taggedContainer = document.getElementById("taggedContainer");
const taggedPara = document.createElement("p");
const taggedHeader = document.createElement("h5");
const taggedPara1 = document.createElement("p");
const taggedLink = document.createElement("a");

taggedHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700"
);

taggedPara.innerHTML = `<pre>In certain cases, nesting a template is the easiest (and perhaps more readable) way to have configurable strings. Within a backtick-delimited template, it is simple to allow inner backticks by using them inside an <span>\${expression}</span> placeholder within the template.

For example, in the following code:
<code>const classes = \`header \${
  isLargeScreen() ? "" : \`icon-\${item.isCollapsed ? "expander" : "collapser"}\`
}\`;</code>
Otherwise, it would have been very difficult to write this kind of nested expression and get expected results without template literals.

</pre>`;

taggedHeader.innerText = "Another use is tagged templates";

taggedPara1.innerHTML = `<pre>A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string.</pre>`;

taggedLink.setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
);
taggedLink.setAttribute("target", "_blank");
taggedLink.setAttribute(
  "class",
  "text-lg font-bold my-3 hover:text-red-700 hover:underline underline-offset-4 focus:underline focus:text-red-700 outline-none text-center text-blue-700"
);
taggedLink.innerText = "Read more on MDN";

taggedContainer.append(taggedPara, taggedHeader, taggedPara1, taggedLink);

// Practice: Spread and Rest operator, Array and Object destructuring
const spreadContainer = document.getElementById("spreadContainer");
const spreadPara = document.createElement("p");
const spreadHeader = document.createElement("h5");
const spreadPara1 = document.createElement("p");

spreadHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700"
);

spreadPara.innerHTML = `<pre>Spread Syntax: It is used to spread the elements of an array into another array. It is also used to spread the elements of an object into another object. It can be used to spread strings. In function calls, it can be used to pass arguments and spread them.

Remeber: Spread syntax looks exactly like rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

Let's see an example with spread syntax to map through multiple arrays.

We'll create three arrays of numbers called numbers, doubled, and triple. We'll then use spread syntax to spread these arrays into a new array called spreadNumbers.<br>
Code:
<code>const numbers = [1, 2, 3];
const doubled = [2, 4, 6];
const triple = [3, 6, 9];

const spreadNumbers = [...numbers, ...doubled, ...triple];</code>
Now let's do some math. Square each number in spreadNumbers and add it to a new array called squaredNumbers with higher order function 'map'.<br>
<code>const squaredNumbers = spreadNumbers.map((num) => num * num);</code>
Now let's see the results in the console. For that, we'll use console.log to print the spreadNumbers array and the squaredNumbers array.<br>
<code>console.log(spreadNumbers, squaredNumbers);</code>
To see the result you've to open DevTool of your browser and go to the console tab. You'll see:<br> <code>[1, 2, 3, 2, 4, 6, 3, 6, 9] [1, 4, 9, 4, 16, 36, 9, 36, 81]</code>
</pre>`;

// Spread syntax
const numbers = [1, 2, 3];
const doubled = [2, 4, 6];
const triple = [3, 6, 9];

const spreadNumbers = [...numbers, ...doubled, ...triple];
const squaredNumbers = spreadNumbers.map((num) => num * num);
console.log(spreadNumbers, squaredNumbers);

spreadHeader.innerText = "Object and Array Destructuring with Spread Syntax";

spreadPara1.innerHTML = `<pre>

Object destructuring is a JavaScript feature that allows you to destructure properties of an object into variables. It is also used to destructure arrays into variables.

Let's see an example:

<code>const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  friends: ["Jane", "Peter", "Michael", "Mary"],
};

// Object destructuring
const { name: personName, ...personDetails } = person;
console.log(personName, personDetails);

// Array destructuring
const [firstFriend, secondFriend, ...otherFriends] = person.friends;
console.log(firstFriend, secondFriend, otherFriends);
</code>
Both will print the following on the console:

<code>John { age: 30, city: 'New York', country: 'USA' }</code>
and

<code>Jane, Peter, Michael, Mary</code>
</pre>`;

// Object and Array Destructuring with Spread Syntax
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  friends: ["Jane", "Peter", "Michael", "Mary"],
};

// Object destructuring
const { name: personName, ...personDetails } = person;
console.log(personName, personDetails);

// Array destructuring
const [firstFriend, secondFriend, ...otherFriends] = person.friends;
console.log(firstFriend, secondFriend, otherFriends);

// REST Parameter Practice
const restHeader = document.createElement("h5");
const restPara = document.createElement("p");

restHeader.setAttribute(
  "class",
  "text-lg font-medium text-center text-gray-700"
);

restHeader.innerText = "Rest Parameter";

restPara.innerHTML = `<pre>
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
It collects multiple elements and "condenses" them into an array like single element.
Let's see in action:

<code>function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10</code>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" class="text-lg font-bold my-3 hover:text-red-700 hover:underline underline-offset-4 focus:underline focus:text-red-700 outline-none text-center text-blue-700 block font-sans">Read more on MDN</a></pre>`;

// Rest parameter
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

spreadContainer.append(
  spreadPara,
  spreadHeader,
  spreadPara1,
  restHeader,
  restPara
);

// Select all pre tags and add tailwind classes to them
const allPreTags = document.querySelectorAll("pre");
allPreTags.forEach((preTag) => {
  preTag.classList.add(
    "break-words",
    "whitespace-pre-wrap",
    "font-600",
    "text-lg",
    "text-gray-600"
  );
});

// Select all code tags and add tailwind classes to them
const allCodeTags = document.querySelectorAll("code");
allCodeTags.forEach((codeTag) => {
  codeTag.classList.add(
    "text-sm",
    "text-gray-600",
    "block",
    "bg-stone-200",
    "p-4",
    "rounded-md",
    "border-s-4",
    "border-slate-600",
    "border-solid"
  );
});

// Select all span tags and add tailwind classes to them
const allSpanTags = document.querySelectorAll("span");
allSpanTags.forEach((spanTag) => {
  spanTag.classList.add("text-md", "px-2", "w-auto", "bg-stone-200", "rounded");
});
