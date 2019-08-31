# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
     ***React is a library for building UI components, it tries to solve the problem of page reloads on DOM changes, it also has nice answers for data flow***
1. What does it mean to think in react?
   ***JSX, one way data flow***
1. Describe state.
***The current state or snapshot of your application***
1. Describe props.
***data gets passed down to child components via props, which help mitigate which components need to be "smart'***
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
 ***something that affects something outside the scope of the function being called, you sync effects with useEffect(), and give it a dependency at the end via an array, it could be empty to show that it only needs to run on page load as well***