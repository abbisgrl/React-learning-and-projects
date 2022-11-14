//Browser is not able to run the jsx file .Babel transpile that into javascript file which browser further understood
//Babel and Webpack is create a bundle file which further requested by the browser 
//React does not know how to render the boolean,undefined,null,obj,array of javascript through jsx
//Class component have lifecycle method and it have state .On the other hand function component does not have lifecycle methods and state system.But now using hooks ,we can used all the methods of class component in function component


//component life cycle methods
//constructor ,component will mount ,render ,component did mount for mount phase 
//In update phase ,should component update,component did update

//component did mount is only invoked only one time and so it can be a good place to get data loading


//Life Cycle Methods
//1.Constructor- It is the first method which is called when component is created and it is the best place to create the state of the application
//Example - constructor(){
// super();
// this.state={}
// }

//2.getDerivedStateFromProps is a method in which just called before render function and it is used when the state of component is depend on the props of the other component

//3.componentDidMount is a method which is just called after the render function and this is best place for api calling or loading the data.It called only once in whole life of the component 
//      componentDidMount(){}

//4.shouldComponentUpdate() it is a method which is very usefull when you want that the permission to re render the component after changing the state should be given through a method.It will return a boolean value
//      shouldComponentUpdate(nextProps, nextState) {
//              console.log("should component update is called here!");
//              return nextState.cars.length < this.state.cars.length;
//      }    

//5. getSnapshotBeforeUpdate it is a method which is very usefull and run just before the render after any update.It takes the snapshot of the previous state 
// getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("getSnapshotBeforeUpdate was called here!");
//         if (prevState.cars.length < this.state.cars.length) {
//         return { lastVehicle };
//         }
//         return null;
// }

//6.componentDidUpdate() it is a method which always run after shouldComponentUpdate() and when any component is update .It takes three parameter prevProps,prevState and snapshot .
        // componentDidUpdate(prevProps, prevState, snapshot) {
        //         console.log("componentDidUpdate was called here!");
        //         if (snapshot.lastVehicle) {
        //                 return <div> No cars left! </div>
        //         }
        // }
        
//7.componentWillUnmount() is the method which is used when you want to clean up the dom after completion of work of the component .It is run just after componentDidUpdate and it is very important for clean unnecesary element after using it
        // componentWillUnmount(){
        //         console.log("componentWillUnmount was called here!");
        //         window.removeEventListener("restart");
        // }

//States in react js class component
//for creating the state in class component the syntax which is used for -  this.state = {} inside object we can write the state initial values
//for setting the state ,this.setState({}) is used which have two variations one is this.setState({}) and other is this.setState((prevState)=>{newstate object define })
//You can create state of component at any place inside the class but the most prefer place is inside the constructor of the component because constructor is method which automatically called

//There are two ways of handling the input .One way is called controlled way and other is called uncontrolled way 

    // updateState(value) {
    //     this.setState({
    //         value: value
    //     })
    // }

    //if you want to set the value of props into the state the you have to do it inside the component did update section
    // componentDidUpdate(prevProps) {
    //     const { value } = this.props;
    //     if (prevProps.value !== value) {
    //         this.updateState(value)
    //     }
    // }
    
//axios is normally used over fetch because it is to used and it require less coding 

//axios -
//axios will get two arguments.One is the url and other is some methods and things
// axios(url[, config])
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

//Link for different config files
// https://axios-http.com/docs/req_config


//the second argument is used to configure the api request
//inside the second object ,there are lot of things we can give to the api 


//Farword ref 
//When you want to give a ref for the element of child component in parent component then you can used the farward ref feature.
//First create the ref with this.createRef = React.createRef()  and then you just passed that ref to the child component
//after that create the child component with function const FRInput = React.forwardRef((props, ref) => {} and then pass the ref to the element who you want to set the ref


//Error boundary 
//In error if any error happen and we didn't handle it in a proper way then it will crash the website and show the error to the user
//To handle the error in a gracefully manner then we will use the Error boundary concept
//We wrap the component for which we want to handle the error from Error boundary Component and when ever there is any error throw Error boundary will catch it and then we can handle it 
//There are two life cycle methods are used to handle those which getDerivedStateFromError() which will take the error and according to that we will give a fallback ui 
//On the other hand to print the error ,componentDidCatch() is used  and it takes two parameter which are error and error info


// Doubts  
// issue in api fetch