---
title: "Oh Big O! (Part 3)"
date: "Feb, 02 2022"
description: "Last Part of Big O. Example!"
thumbnail: "/images/articles/big-o-3.jpeg"
thumbnailInfo: "Photo by Chaitanya Tvs on Unsplash"
---

Hello again! This is part 3 of the Big O series! If you didn’t see part 1 and 2, please check it out [here](big-o-1.md) and [here](big-o-2.md)! 👀

![Lucille Ball — I Love Lucy gif from Giphy](https://media.giphy.com/media/uQ1IhcydV7k64/giphy.gif)

Today we are going to put our knowledge to test! We are going to go through a problem and figure out the Big O together. Let’s tackle this! 💪

![Gina Rodriguez — Jane the Virgin gif from Giphy](https://media.giphy.com/media/MEySLGjxQak0w/giphy.gif)

**You are given an array with integers and a target number. If two numbers in the array sum up to the target number, return an array with the numbers. Otherwise, return -1.**

```javascript
const array = [1, 3, 6, 0, 12, -1];
const target = 5;

const findSumToTarget = (array, target) => {
	// OUR CODE HERE
};
```

Ok, so let’s go through the problem: 🤓

-   We have an array with numbers and a target.
-   We need to iterate over the array and find out if there is a pair that sums up to the target.
-   If yes, we need to put them in an array and return that.
-   If no, we need to return -1.

Some options to consider:

1️⃣ Two for loops (naive, brute force):

```javascript
const findSumToTarget = (array, target) => {
	for (let i = 0; i < array.length - 1; i++) {
		let firstNum = array[i];
		for (let j = i + 1; j < array.length; j++) {
			let secondNum = array[j];
			if (firstNum + secondNum === target) {
				return [firstNum, secondNum];
			}
		}
	}
	return -1;
};
```

So, the above approach will have the **Big O(n²) Time and Big O(1) Space**. But why? Well, we have 1 for loop going through the array length (which would be **n**) and inside this loop, we have another loop going through the whole array again (another **n**), and the rest of the function runs in constant time.

![Sum That Big O!](/images/articles/big-o-sum.jpeg)

2️⃣ Hash Table and 1 for loop:

```javascript
const findSumToTarget = (array, target) => {
	let obj = {};
	for (let num of array) {
		let remainder = target - num;
		if (obj[remainder]) {
			return [num, remainder];
		} else {
			obj[num] = true;
		}
	}
	return -1;
};
```

This approach has a **better** Big O Notation for **Time**, but a **worse** Big O Notation for **Space**. **Big O (n) Space-Time**. In this case, we created an object and we are going to put each number inside the object (within the else statement). Then we will iterate over the array with a for loop and check what is the remainder by reducing the target by the current number. Then we will check if the object contains the remainder.

![Let’s sum it again!](/images/articles/big-o-sum-2.jpeg)

3️⃣ Sort and 1 while loop:

```javascript
const findSumToTarget = (array, target) => {
	array.sort((a, b) => a - b);
	let start = 0;
	let end = array.length - 1;
	while (start < end) {
		let sum = array[start] + array[end];
		if (sum === target) {
			return [array[start], array[end]];
		} else if (sum < target) {
			start++;
		} else {
			fi;
			end--;
		}
	}
	return -1;
};
```

In this approach, we have a **Big O (n log n) Time and Big O(1) Space**. Sorting in an interview context is usually considered a Big O (n log n) Time. And the while loop will be Big O (n), which, summing to **n log n**, will result in **2n log n**. However, we drop the constants and this will result in a Big O (n log n). And, since we are no longer creating a data structure to hold all the items in the array, the space comes back to Big O(1).

![Guess what? Sum, sum, sum!](/images/articles/big-o-sum-3.jpeg)

---

Well guys that’s it! We did it! We finally finished the Big O series! 🥳

I hope you understand a little bit better now and that you enjoyed the ride!

![rollercoaster](https://media.giphy.com/media/3WGj7sNEnOgvu/giphy-downsized-large.gif)

**Thank you** very much for reading the series and I hope to see you again in a future article!

![that's all folks](https://media.giphy.com/media/l4pTjOu0NsrLApt0Q/giphy.gif)

**See ya!** 👋

_Originally published at [Medium](https://medium.com/analytics-vidhya/oh-big-o-part-3-5e3ccee2097) on July 17, 2021._
