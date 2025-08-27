1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
<!-- getElementById: -->
getElementById নির্দিষ্ট একটি element কে সিলেক্ট করতে getElementById ব্যবহার হয়। getElementById সবসময় একটাই element রিটার্ন করে। ।

<!-- getElementsByClassName -->
getElementsByClassName দিয়ে অনেকগুলো element একসাথে সিলেক্ট করা যায়। getElementsByClassName একটি HTMLCollection রিটার্ন করে। 


<!-- querySelector -->
CSS selector ব্যবহার করে প্রথম matching element কে সিলেক্ট করে। querySelector শুধুমাত্র একটি element কে সিলেক্ট করতে পারে। 


<!-- querySelectorAll -->
querySelectorAll দিয়ে অনেকগুলা element কে একসাথে সিলেক্ট করা যায়।
querySelectorAll দিয়ে সবগুলো matching element সিলেক্ট করা যায়।










2. How do you create and insert a new element into the DOM?

answer:
<!-- element create -->
let element = document.createElement("div") এভাবে নতুন element create করা হয়।

<!-- element এর ভিতর content add করা  -->
element.innerHTML = `<p> HELLO WORLD</p>` এভাবে element এর ভিতর content add করা হয়।

<!-- insert করা -->
parent.append(element) এভাবে element কে DOM এ  ঢুকিয়ে দেয়া হয়।










3. What is Event Bubbling and how does it work?

answer:
কোনো child element-এ event ঘটলে সেটা উপরের parent elements পর্যন্ত propagate হয়।
এই প্রক্রিয়াটাকে event bubbling বলে।

যেমন: 
একটা button এ click করলে, event প্রথমে button কে detect করে  তারপর তার parent div তারপর body পর্যন্ত চলে যায়।  










4. What is Event Delegation in JavaScript? Why is it useful?

answer:
Event delegation হলো parent element এ event listener add করে তারপর event.target দিয়ে চেক করা সেই  parent element এর কোন child এ event ঘটেছে।

এটা useful কারণ:
একটি parent element এ অনেক child element থাকলেও একটাই event listener add করতে হয়।
এতে করে code অনেক কম লিখা লাগে।










5. What is the difference between preventDefault() and stopPropagation() methods?

answer:
preventDefault() কোনো একটি event এর default action বন্ধ করে।

যেমন: 
form submit করলে web page টা অটোমেটিক  reload হয়ে যায়, সেটা preventDefault() দিয়ে বন্ধ করা হয়। 


stopPropagation():
event bubbling বন্ধ করে। মানে event আর parent element-এ propagate করবে না।

যেমন: 
div এর ভিতরে button আছে এখন stopPropagation() দিলে button এ ক্লিক করলে div এর event আর ট্রিগার হবে না। 
