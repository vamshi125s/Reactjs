// import React from "react";
// function App() {
//   let ele = React.createElement("div",{className:"App"},
//     React.createElement("h1",null,"Header")
//   )
//   let Username="Vamshi";
//   return (
//     // <div className="App">
//     //   <h1>Header</h1>
//     // </div>
//     // ele
//     // <section>
//     //   <h1>One jsx element</h1>
//     //   <p>dvew</p>
//     // </section>
//     <div>
//       <h1>{Username}</h1>
//     </div>

//   );
// }

// export default App;

// **** component composition
//rafcc
// import React from 'react'
// import Footer from './components/Footer'
// import Main from './components/Main'
// import Navbar from './components/Navbar'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import './global.css'

// const App = () => {
//   return (
//     <div lclassName="app">
//         <Navbar/>
//         <Main/>
//         <div className='Sidebar'>
//             <Sidebar1/>
//             <Sidebar2/>
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default App


// props
//**********
// import React, { Component } from 'react'
// import FBCPropEx from './props/FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username="Vamshi"
//         age={20}
//         hobbies={["Playing","Reading books","Stock-Marketing"]}
//         address={{city:"Sircilla",area:"Gandhinagar"}}
//         sendFun={function(){alert("Hi i am vamshi")}}
//         /> */}
//         <FBCPropEx
//         username="Raju"
//         isMarried={true}
//         hobbies={["Reading","Eating","Sleeping"]}
//         />
//       </div>
//     )
//   }
// }

//props children

// import React from "react";
// import Child1 from "./props/Child1";

// const App = () => {
//   return (
//     <div>
//       App
//       {/*App
//       <PropChildEx num={1000}>
//         <h1>this is data coming from props children</h1>
//         <SubChild />
//       </PropChildEx>*/}
//       <Child1 university="Malla Reddy University" />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import FBCStateEx from './stateexample/FBCStateEx';
// // import CBCStateEx from './stateexample/CBCStateEx';
// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }
// export default App

//Hooks example**********


import React from 'react';
// import MyForm from './MyForm';
// import UseEffectEx from './hookexample/UseEffectEx';
import RefExamples from './hookexample/RefExamples';
function App() {
  return (
    <div className="App">
     {/* <MyForm></MyForm> */}
        {/* <UseEffectEx/> */}
      <RefExamples/>
     </div>
  );
}

export default App;