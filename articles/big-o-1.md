---
title: "Oh Big O! (Part 1)"
date: "Jan 19 2022"
description: "Big who?"
thumbnail: "/images/articles/big-o.jpeg"
thumbnailInfo: "Photo by Bernard Hermant on Unsplash"
---

As a person that went to a Bootcamp, I was briefly presented to Big O and it’s importance. And to be completely honest, no, I didn’t understand at that time the real importance of it. Neither understood why on earth I would want to stop my coding progress to learn Big O Notation, Data Structures, and Algorithms.

2 weeks after the Bootcamp, I got my first interview, scheduled for the week after. I decided to do what any human being would do: check the company’s interview questions on glassdoor! 🤣

![Freddie Mercury](https://media.giphy.com/media/e0xUKbJ4OYW2s/giphy.gif)

“OH, NO! Algorithms! Data Structures! **Big O**!”

“Ok, I got 1 week to learn this! I can totally do this, right?” 🤪

![Homer Simpson](https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif)

What was I thinking?! Lol! No, 1 week is not enough. I didn’t pass on that interview, but I finally started to understand what Big O means! And you know what?! It’s not that hard! So, I will try my best to explain it to you, and hopefully, you will pass the interview! But if you don’t, it’s ok, it wasn’t for you. What is yours is reserved! 🤞🏼

---

To understand the importance of Big O, you need to know the **rules of good code**:

1. **Readable** code: no variables named “a”, “b”, “c”, please!
   <br>
2. **Scalable** code: where the Big O notation comes to the scene. In terms of:

    a) **Space**: we are talking about **memory**, how much space you use.

    b) **Speed**: we are talking about **time**, how long it takes to evaluate.

> And that’s why we care about Big O notation. It’s a way of **calculating how much space and time our code takes**.

Ok, before we start talking about the types of Big O, we need to know a few more rules:

1.  We do **not** care about the **constants** because they are trivial when we compare them with large input sizes. Ex.

        Big O(50n) ==> drop the constant (50) ==> Big O(n)

2.  Especially in interviews, we care about the **WORST CASE** scenario. Which means the worst Big O notation for the case.

3.  We have to check the Big O notation for **TIME** and for **SPACE**. They are not necessarily the same.

![Photo by Alice Pasqual on Unsplash](/images/articles/dun.jpeg)

Ok, now we can begin our exploration into the Big O notation world…

#### Big O(1) => Constant 😍

It means our code only takes a certain amount of time/space, and it doesn’t matter how big is the input.

```javascript
const instant = (num1, num2) => num1 + num2;
// OR
const instant = arr => {
	for (let i = 0; i < 5; i++) {
		console.log(arr[i] + i);
	}
};
// Note: in the second example, it doesn't matter the size of the array or if we have
// a for loop because we are only going to loop 5 times, which would be
// Big O(5) ==> Big O(5*1) ==> drop the constant ==> Big O(1)
```

#### Big O(logn) => Logarithmic 🤩

To understand this one, we need to refresh our Math classes on Log. In this case, **Log base 2**. Let’s walk through 2 examples:

```
Log 8 is 3, because 2 to the power of 3 equals 8.
Log 16 is 4, because 2 to the power of 4 equals 16.
So we can deduct: Log(n) = y, because 2^y = n
```

![My “beautiful” explanation of Log!](/images/articles/big-o-log.jpeg)

Note that as our input doubles in size (log 8, log 16, …), we only really add one more operation.

**Tip**: when you see a function that keeps cutting in half, it usually is Big O(logn), or at least this part of the function. 😜 Ex. Binary Search.

```javascript
const binarySearch = (sortedArr, target) => {
	let start = 0;
	let end = sortedArr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (sortedArr[mid] === target) return true;
		else if (sortedArr[mid] < target) start = mid + 1;
		else end = mid - 1;
	}
	return false;
};
```

#### Big O(n) => Linear 😕

This one means the amount of operations **grows with the size of the input** in a linear way. In other words, it grows **proportionally**, as the number of elements increases (n), the number of operations increases as well.

A good example is 1 for loor through the input elements:

```javascript
const linear = arr => {
    for (let num or arr) {
        console.log(num);
    }
}

// Note: if we have 5 numbers in the array, we will log 5 times, one for each.
// Same thing happens if we have 1 billion numbers in the array, we will log 1 billion times.
// So, our number of operations increases proportionally with the size of our input.
```

**Notes**:

1. If you have 2 for loops, and they are on the same level, not nested, it is still Big O(n). Ex.

```javascript
const linear = arr => {
	for (let num of arr) {
		console.log(num);
	}
	for (let num of arr) {
		console.log(num * 2);
	}
};
```

2. If you have 2 for loops, but each one is going through **different inputs**, it will be Big O(n + m), where ’n’ is the size of the first input and ‘m’ is the size of the second input. Ex.

```javascript
const linear = (arr1, arr2) => {
	for (let num1 of arr1) {
		console.log(num1);
	}
	for (let num2 of arr2) {
		console.log(num2);
	}
};
```

![break](https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif)

That’s it for part 1 guys! Let’s give our brains a little break and I’ll post part 2 very soon.

**See ya!** 👋

_Originally published at [Medium](https://medium.com/analytics-vidhya/oh-big-o-part-1-490f4c52afe) on June 29, 2021._
