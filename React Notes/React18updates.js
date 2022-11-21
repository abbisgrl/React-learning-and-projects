//Major Updates in react 18

//1.Change in index js file in root api
//In earlier version ReactDOM.render was used to render the app but now it is change and there is new function createRoot is come which create the root and it has a render method

// //Earlier version

// import * as ReactDOM from 'react-dom';
// import App from 'App';

// const container = document.getElementById('root');

// // Initial render.
// ReactDOM.render(<App tab="home" />, container);

// // During an update, React would access
// // the root of the DOM element.
// ReactDOM.render(<App tab="profile" />, container);


// //Newer version

// import * as ReactDOMClient from 'react-dom/client';
// import App from 'App';

// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// // Initial render: Render an element to the root.
// root.render(<App tab="home" />);

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);


//Why this change -
//1.In earlier version ,the readablity was not good and you have to pass the container to every render but now it is change and you can create root which have a render method and then you pass your component to that
//2.hdydrate is also change into hydrateRoot


//2.Automatic Batching
//It is not any syntatical change but it is a internal working change .Earlier on every state update the component Re-render itself and sometimes there was lot of unnecessary Re-render.To stop this ,react come with automatic batching in which when two or more state are update in sequence then it does not Re-render on every state update but instead ones after all state update and in this way it stop unnecessary update.

// const handleClick = () => {
//     setCounter();
//     setActive();
//     setValue();
//     }


//3.Introduction of USE ID hook
// const id = useId()
//In html and form ,we commonly have to join the two html element and for that we commonly use id but react comes with a new hook which can solve that problem and now we can use useId which will give unique identier and using this we can join the two html element.It cannot be used as css selector


//4.Concurrent rendering
//Concurrent rendering allows react to prepare multiple version of the ui at the same time.
//With the concurrent rendering ,now rendering can be interruptible and react guarantees the ui will appear consistent even if a render is interrupted
//In concurrent rendering ,react will process multiple things and render that ui which is more urgent at that particular time


//Transition update are those update for which you don't mind to wait.On the other hand the urgent update are those update which instanly update
//There are two new hooks which are introduced whichc are useDeffered and useTransition hook

//5. useTransition Hook
//It is used when we want to priortize any update before other .We use this hook to delay the other update which we want update later

import { startTransition, Suspense } from 'react';

// Urgent: Show what was currently typed
setSearchCurrentValue(input);


startTransition(() => {
    // Not-urgent: Show what was finally typed
    setSearchFinalValue(input);
});

//6.Suspense Component
//It is used to show some type of information if something is not fully loaded 
<Suspense fallback={<p>Loading...</p>}>
    <MyComponent/>
</Suspense>




//7.Hydration 
// //Earlier Version
// import * as ReactDOM from 'react-dom';
// import App from 'App';

// const app = document.getElementById('app');

// // Render with hydration.
// ReactDOM.hydrate(<App tab="home" />, app);

// //New Version
// import { hydrateRoot } from 'react-dom/client';

// import App from 'App';

// const app = document.getElementById('app');

// const root = hydrateRoot(app, <App tab="home" />);


//Libraries Updates and changes
// 1.fullcalendar/core
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// import './main.scss' // webpack must be configured to do this

// export default class DemoApp extends React.Component {

//   render() {
//     return (
//       <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
//     )
//   }
// }

// import React from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// export default class DemoApp extends React.Component {
//   render() {
//     return (
//       <FullCalendar
//         plugins={[ dayGridPlugin ]}
//         initialView="dayGridMonth"
//       />
//     )
//   }
// }

