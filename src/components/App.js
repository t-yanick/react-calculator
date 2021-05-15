import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Calculator" component={Calculator} />
      <Route exact path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default App;

// import React from 'react';
// import ButtonPanel from './ButtonPanel';
// import Display from './Display';
// import Calculate from '../logic/calculate';

// /* eslint-disable react/destructuring-assignment, react/no-access-state-in-setstate */
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     this.setState(Calculate(this.state, buttonName));
//   }

//   render() {
//     return (
//       <div className="App">
//         <Display result={this.state.next || this.state.total || '0'} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }

// const App = () => {
//   const [total, setTotal] = useState(null);
//   const [next, setNext] = useState(null);
//   const [operation, setOperation] = useState(null);

//   const handleClick = buttonName => {
//     setTotal(Calculate(total, buttonName));
//     setNext(Calculate(next, buttonName));
//     setOperation(Calculate(operation, buttonName));
//   };

//   return (
//     <div className="App">
//       <Display result={next || total || '0'} />
//       <ButtonPanel clickHandler={handleClick} />
//     </div>
//   );
// };

// export default App;
