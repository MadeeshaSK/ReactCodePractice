/*
// Difference between react and angular
// React is a library, Angular is a framework
// React is a view library, Angular is a complete framework
// React is a library for building UI components, Angular is a complete framework for building an entire application
// Vartual DOM vs Real DOM
// React uses virtual DOM, Angular uses real DOM
// React uses JSX, Angular uses HTML
// React is developed by Facebook, Angular is developed by Google
// React is lightweight, Angular is heavy
// React is easy to learn, Angular is difficult to learn
// React is fast, Angular is slow
// React is flexible, Angular is less flexible
// React is more popular, Angular is less popular
// Vartual dom means, it is a copy of the real dom. React uses virtual dom to improve the performance of the application. React updates the virtual dom instead of the real dom. React compares the virtual dom with
   the real dom and updates only the changed part of the real dom. This makes the application faster. React uses a diffing algorithm to compare the virtual dom with
   the real dom. React updates the real dom only with the changed part of the virtual dom. This makes the application faster.
// Real dom means, it is the actual dom. Angular uses real dom to update the view. Angular updates the real dom directly. Angular updates the real dom with the changed part of the view. Angular updates the real dom

// When we use these two
// in short , react use for small application and angular use for large application
// for example , real world, we use react for small application like calculator, todo list, etc. and we use angular for large application like e-commerce website, social networking website, etc.
// already done example websites, facebook, instagram, etc. use react and google, youtube, etc. use angular

// vite vs webpack
// Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major pieces:
// A dev server that serves your source files over native ES modules, with rich features such as hot module replacement (HMR).
// A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
// Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  
// create a react app using vite
** npm create vite@latest app1 --template react
npm install
npm run dev

// props vs state
// props are immutable, state is mutable
// props are used to pass data from parent component to child component, state is used to manage the data of a component
// props are read-only, state is read-write
// props are used to communicate between components, state is used to manage the data of a component

//SPA vs MPA
//SPA is a Single Page Application, MPA is a Multi Page Application
//SPA loads a single HTML page and dynamically updates the content, MPA loads multiple HTML pages
//SPA uses AJAX to load the content, MPA uses traditional page navigation
//SPA provides a better user experience, MPA provides a slower user experience

//React vs Vue
//React is a library for building user interfaces, Vue is a framework for building user interfaces
//React is developed by Facebook, Vue is developed by Evan You
//React uses JSX, Vue uses HTML templates

//Library vs Framework
//Library is a collection of functions, Framework is a collection of libraries
//Library is a set of reusable code, Framework is a set of rules and guidelines
//Library is used to perform specific tasks, Framework is used to build an entire application

//React vs Angular
//React is a library for building user interfaces, Angular is a framework for building user interfaces

//Static vs Dynamic
//Static means fixed, Dynamic means changing
//Static websites have fixed content, Dynamic websites have changing content
//Static websites are faster, Dynamic websites are slower

//JS vs TS
//JS is JavaScript, TS is TypeScript
//JS is dynamically typed, TS is statically typed
//JS has no type definitions, TS has type definitions
//JS has errors at runtime, TS has errors at compile-time

//Angular js with jquery(js)
//Angular 2 with typescript(ts)

// angular supports two-way data binding, react supports one-way data binding
// angular uses real dom, react uses virtual dom
// angular uses typescript, react uses javascript
// angular uses html, react uses jsx
// angular uses rxjs, react uses redux
// angular uses dependency injection, react uses context api
// angular uses component-based architecture, react uses component-based architecture
// angular uses services, react uses hooks
// angular uses directives, react uses props
// angular uses pipes, react uses props
// react faster than angular
// angular is heavy, react is lightweight

//Platfom , Library, Framework, package
//platform -> software platform is a system on which other programs can run, like windows, linux, macos, etc.
//platform -> hardware platform is a system on which other hardware can run, like intel, amd, etc.
//library -> a collection of functions that can be used in other programs, like jquery, lodash, etc.
//framework -> a collection of libraries that can be used to build an entire application, like angular, react, etc.
//package -> a collection of files that can be installed using a package manager, like npm, yarn, etc.

// js file -> direct run
// ts file -> compile -> js file -> run
// tsc index.ts
// tsc --watch index.ts
// tsc --init
// set rootDir and outDir in tsconfig.json
// rootDir ->./src
// outDir ->./dist
// index.html also in dist folder and link js file in index.html
// tsc
// the main diffrence between js and ts is js is dynamically typed and ts is statically typed
// js has no type definitions, ts has type definitions
// let varName: type = value; -> this is the syntax of typescript
// let varName = value; -> this is the syntax of javascript
// optional -> varName?: type = value; -> this is the syntax of typescript

// deside type after looking value is called type inference
// let varName = value; -> this is the syntax of typescript

// we can create an object by using literal, class, constructor, interface
// object literal
/* 
let obj = {
      name: "John",
      age: 30,
      city: "New York"
   }
*/
// object class
/*
class Person {
      name: string;
      age: number;
      city: string;

      constructor(name: string, age: number, city: string) {
         this.name = name;
         this.age = age;
         this.city = city;
      }
   }
 */
// object constructor
/*
   let obj = new Object();
   obj.name = "John";
   obj.age = 30;
   obj.city = "New York";
*/
// object interface
/*
interface Person {
      name: string;
      age: number;
      city: string;
   }
   let obj: Person = {
      name: "John",
      age: 30,
      city: "New York"
   }
*/

// optional , readonly
/*
interface Person {
      name: string;
      readonly age: number;
      city?: string;
   }
   let obj: Person = {
      name: "John",
      age: 30,
      city: "New York"
   }
   let obj1: Person = {
      name: "John",
      age: 30
   }
   obj1.age = 31; // error: cannot assign to 'age' because it is a read-only property
   obj1.city = "New York"; // no error: city is optional
 */

// generics
/*
function getData<T>(data: T): T {
   return data;
}
let data = getData<string>("Hello");
let data1 = getData<number>(123);

// generics with interface
interface Person<T> {
   name: string;
   age: number;
   city: string;
   data: T;
}
let obj: Person<string> = {
   name: "John",
   age: 30,
   city: "New York",
   data: "Hello"
}
let obj1: Person<number> = {
   name: "John",
   age: 30,
   city: "New York",
   data: 123
}
// constraint
*/

//OOP
/*
//inheritance
    class extends class
    class implements interface
    interface extends interface
    interface implements class // not possible
// polymorphism
      method overloading
      method overriding
// encapsulation
      private, public, protected
      getter, setter
// abstraction
      abstract class
      interface
      abstract method
*/
// exception handling

// type gurard
// typeof, instanceof, in
/*
funcction setData(data: string | number) {
   console.log(typeof data);
}
setData("Hello");
setData(123);

function executor (value: dog | cat) {
   if (value instanceof Dog) {
      console.log("Dog");
   } else if (value instanceof Cat) {
      console.log("Cat");
   } else {
      console.log("Unknown");
   }
}
executor(new Dog());
executor(new Cat());

function collectData(value:dog | cat) {
   if ("bark" in value) {
      console.log("Dog");
   } else if ("meow" in value) {
      console.log("Cat");
   } else {
      console.log("Unknown");
   }
}
collectData(new Dog());
collectData(new Cat());

// accertions (type casting)
// union types
// keyof,typeof
// type aliases & type literals

*/

/*

// react frameworks
//Common Framework Options You Might See

1. Vanilla – A plain JavaScript project without a specific framework.


2. React – A popular front-end library for building UI components.


3. Vue – A progressive JavaScript framework for building UI.


4. Svelte – A framework that compiles components into efficient JavaScript code.


5. Next.js – A React-based framework optimized for server-side rendering.


6. Nuxt.js – A Vue-based framework optimized for server-side rendering.


7. Solid.js – A reactive JavaScript framework.


8. Lit – A lightweight library for building web components.

How to Choose?

If you're working with React, select the React option.

If you want a simple project, Vanilla might be a good choice.

If you're familiar with Vue, Svelte, or another framework, you can choose accordingly.

If you need server-side rendering, Next.js or Nuxt.js are great options.

//What is Server-Side Rendering (SSR)?

Server-side rendering (SSR) is a technique where a web page is generated on the server and sent as a fully-rendered HTML page to the browser. This improves performance and SEO compared to traditional client-side rendering (CSR).

How SSR Works:

1. A user requests a page (e.g., example.com/home).


2. The server processes the request, fetches data (if needed), and generates the HTML page.


3. The fully-rendered page is sent to the browser.


4. The browser displays the content immediately.


5. If JavaScript is needed for interactivity, the page hydrates (attaches event listeners).

SSR vs. CSR (Client-Side Rendering)

When to Use SSR?

SEO is important (e.g., blogs, e-commerce, news sites).

Faster initial page load is needed.

Content is frequently updated but not highly interactive.

When to Use CSR?

Highly interactive apps (e.g., dashboards, social media).

Single Page Applications (SPA) where JavaScript handles everything.

//Vue vs. React

Vue.js and React are both popular front-end JavaScript frameworks/libraries for building user interfaces, but they have different approaches and ecosystems.

Which to choose?

If you want an easy start with a well-structured framework, go with Vue.

If you prefer flexibility and a larger community, choose React.

//React vs. Next.js

Next.js is a framework built on top of React that adds server-side rendering (SSR), static site generation (SSG), and API routes.

Which to choose?

If you're building an SPA or interactive UI, React alone is enough.

If you need better SEO, performance, and SSR support, use Next.js.

//JavaScript vs. TypeScript

JavaScript (JS)

Dynamically typed (no type definitions).

Errors occur at runtime.

Easier to learn and use.

Faster execution (no compilation step).

Less strict, flexible but prone to bugs.

Used for small projects, quick prototyping, and front-end development.


TypeScript (TS)

Statically typed (defines types for variables, functions, etc.).

Errors are caught at compile-time (before running the code).

Better code readability and maintainability.

Requires compilation to JavaScript (tsc or bundlers like Webpack).

More powerful tooling support (autocomplete, refactoring, debugging).

Ideal for large-scale applications and team projects.


Which One to Use?

JavaScript → Small, simple projects, quick scripting.

TypeScript → Large, complex applications, better maintainability.


///////
// why we use strictmode tag in react <SrcictMode> </StrictMode>
   - ussafe lifecycle methods are detected and give warning
       -component will mount
       -component will update
       -component did update
   -manage system side effects
   -error in rendering detected
// tsx vs jsx
   -tsx is typescript jsx 
   -jsx is javascript xml

*/

// material ui
// npm install @mui/material @emotion/react @emotion/styled - to cmd to install material ui