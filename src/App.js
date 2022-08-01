import logo from './logo.svg';
import './App.css';
import { CustomButton } from './components/counter'
import { CustomButton2 } from './components/counter'
import { MainPage } from './components/counter'
import React from 'react';

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}










// function App() {
//   return (
//     <div className="App">
//       <CustomButton buttonType="red" buttonText="КНОПОЧКА" />
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.buttonColors = ['red', 'green', 'blue', 'yellow'];
//     this.state = {
//       currentColorIndex: 0,
//     }
//   }

//   colorToggle = () => {
//     if (this.state.currentColorIndex + 1 === this.buttonColors.length) {
//       this.setState({ currentColorIndex: 0 })

//       return;
//     }

//     this.setState({ currentColorIndex: this.state.currentColorIndex + 1 })
//   }

//   render() {

//     return (
//       <div className="App">
//         <CustomButton buttonType="red" buttonText="КНОПОЧКА" />
//         <CustomButton2 color={this.buttonColors[this.state.currentColorIndex]} onClick={this.colorToggle}>
//           Кнопипулечка
//         </CustomButton2>
//       </div>
//     )
//   }
// }



export default App;
