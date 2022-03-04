---
title: "Oh Big O! (Part 2)"
date: "Jan 26 2022"
description: "A little bit more about Big O"
thumbnail: "/images/articles/big-o-2.jpg"
thumbnailInfo: "Photo by Jeremy Perkins on Unsplash"
---

Hello again! This is part 2 of the Big O series! If you didn’t see part 1, please check it out [here](big-o-1)!

![britney spears oh](https://media.giphy.com/media/Dg4bJOS0OpyzC/giphy.gif)

So far we’ve learned what is and why do we use Big O notation. We also learned the rules of Big O and the first 3 types of Big O (linear, logarithmic, and constant). Now let’s keep exploring some of the other most used types…

![Renata Sorrah — math lady gif from Giphy](https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif)

#### Big O(n²) => Quadratic / Squared / Polynomial 😣

As the name implies, for every new item we add to our input, the time **increases proportionally to the exponential** (usually 2). So, the Big O will be directly proportional to the exponential of the input.

There are variations of this type with different exponentials, like 2, 3, 4, 5…Each adding an extra layer of complexity.

```javascript
// Ex. when we have 2 for loops nested:
const squared = arr => {
	arr.forEach(item => {
		arr.forEach(letter => {
			console.log(letter);
		});
	});
};
```

**Note**: If you have 2 for loops, but each one is going through different inputs, it will be Big O(n \* m), where ’n’ is the size of the first input and ‘m’ is the size of the second.

```javascript
const squared = (arr1, arr2) => {
	arr1.forEach(item => {
		arr2.forEach(letter => {
			console.log(item, letter);
		});
	});
};
```

#### Big O(2^n) => Exponential 😫

In this case, for each new item/number added to the input, the number of iterations of the algorithm will **double** in size.

    Ex. 2⁵ = 32 → 2⁶ = 64 → 2⁷ = 128

The most known example if the recursive Fibonacci sequence, where, for each number, we rerun the function twice.

```javascript
const fib = num => {
	if (num === 0 || num === 1) {
		return num;
	} else {
		return fib(num - 1) + fib(num - 2);
	}
};
```

#### Big O(n!) => Factorial 😵

The **worst** of them. You add a nested loop for **every** element you are iterating. Some examples are the Travelling Salesman problem using brute force and the Permutation problem.

![Bill Pullman — independence day gif from Giphy](https://media.giphy.com/media/Ljo7lUmOmJcaI/giphy.gif)

That’s it, guys! We managed to **survive** the Big O notation! 💪

Most of you know this great website, Big O CheatSheet, to visualize the difference between the Big O’s, but, just in case you don’t know, check it out [here](https://www.bigocheatsheet.com/).

![Big O Chart from Big O CheatSheet](/images/articles/big-o-table.png)

Also, if you are interested in seeing some more examples, **stay tuned** for next week’s article!

**See ya!** 👋

_Originally published at [Medium](https://medium.com/analytics-vidhya/oh-big-o-part-2-3017fb7c8041) on July 06, 2021._
