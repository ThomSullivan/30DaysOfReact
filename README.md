# 30DaysOfReact
Work done along with 30 Days of React
30 Days of JavaScript was such a good learning tool I decided to move right on into React.

## Day 1
Nothing new yet, but a good review of 30 days of JavaScript. It is nice to see that I am able to solve these problems with more alacrity than I had previously.

## Day 2 
Scaffolding a React app and working with JSX elements and babel. Writing JavaScript in babel reminds me of an ORM and it probably is something very similar. It was however explained that this method of using React is being shown only for the purpose of understanding how React works. Future days will utilize create-react-app.

## Day 3
First create-react-app boilerplate day! Most of the boilerplate was removed and JSX elements were used to create the page. Importing modules and files this way is a new way of working with files. Making a basic website from 95% JavaScript has never been easier! I eagerly await tomorrows challenge.

## Day 4
Work with React elements has started, creating function based elements that return JSX. Data is being injected into the JSX elements for various sources like object attributes, and random colors. Working with styles that are dependent upon variables within the function is a little tricky at the moment. However at this moment there is no CSS file and therefor CSS classes are not being utilized. At the moment styles are being defined as an object within the index.js file. I assume this will change as the days continue, but it is always nice to learn to methods to work around problems that are encountered.

## Day 5
The focus of day is on how to utilize props to pass data between React components. Getting a little bit of box in a box syndrome at this point. JSX wrapped in functions wrapped in other components and data passing between all of them. I get why this is being done, creating apps this way make parts reusable and allows for programmatic creation of elements on screen. The exercise are still only producing a static page at this point. I am ready to start creating features that are not just a static display. Its about time to start making React react to user interactions.

## Day 6
Day 6 focuses on using map to create several components from source data. Using map on arrays of strings, numbers, objects, etc to programmatically create react components. The day also briefly touches on Keys. Not much was discussed other than keys help React detect what has been changed, keys have to be unique, and that you should use keys. I assume this will be discussed in more detail in a later day. I worked on a different computer for this day, I found out it is much easier to get node.js and npm working on a Linux machine than a Windows one. Also a note for challenging machines while working with React, the node_modules folder is untracked by default. When cloning to different machines nothing works without it! One extra thing I have picked up while working on these challenges is, the Object.assign() method in JavaScript. Creating the color sheets in the challenges required a unique style to be set for every component. Looking for a way to do this I found Object.assign(), it worked like a charm and allowed me to combine the style object I had created with another with the unique styles.

## Day 7
Day seven is the start of work with class based React components extending the React.component class. I am glad we have made it to this point as everything I have looked up for troubleshooting React issues showed solutions in class based components. The progression of the materials created for the challenges is most excellent. Each day has built upon the previous ideas and then morphs the previous day's work to adapt to new ideas and tools that are introduced each day. The work done on day six was adapted to class based components to complete the day seven challenges. I struggled with destructuring props at first with the class based components. I could not seem to get the data carrier hooked up correctly. In the end I was able to get it all working, the problem was that I was getting to specific when assigning variables. I was using code like this.props.numbers when in fact all I needed was this.props.  This is why I enjoy this style of learning the struggle through problems like this give me a deeper understanding of what is actually happening. 

## Day 8
Day eight focused on the use of states withing class based React components. At this point I see why React documentation talk about making reusable components. The random country generator box created for the challenge this day helped me to understand the reason this is said so often. A shell is created then React will make a component when ever you ask. The further in I get the more this works like the Django template language, just less curly brackets :) The introduction of states really makes me think about all the things I will soon be able to do with React. Maybe there will be happy components and sad components that randomly flip upside down! This has no practical use though and the practical uses of states is what will interest me the most. These practical uses will also be a better use of time for building USEFUL skills.
