import img1 from '../../assets/blog/blog-hm-2.jpg'
import img2 from '../../assets/blog/blog-hm-5.jpg'

export const blogs = [
    {
        question: "What are the different ways to manage a state in a React application",
        img: {img1},
        ans : `URL: We can use URL to store some data. Web Storage: The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. Local State: The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form etc. Lifted State: The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. `
      },
    {
        question: "How does the prototype chain work?",
        img: {img2},
        ans : `The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype . `
      },
    {
        question: "What is a unit test? Why should we write unit tests?",
        img: {img2},
        ans : `The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. we should write unit tests before writing any implementation. This makes our implementation details in our code shorter and easier to understand.  `
      },
    {
        question: "React vs. Angular vs. Vue",
        img: {img2},
        ans : `Architecture: Speaking of architecture, Angular.js is a full-fledged MVC framework. React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. Vue.js is a library that allows create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. Data Binding: Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. Syntax: Angular is written in TypeScript, React uses JSX and native Javascript, Vue.js makes use of an HTML-based template syntax that allows to link the displayed DOM to the data of the base element instance declaratively`
      },
    
]