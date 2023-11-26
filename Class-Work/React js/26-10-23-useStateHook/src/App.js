import logo from './logo.svg';
import './App.css';
import Test from './StateClass';
import UsestateNum from './UsestateNum';
import UsestateStr from './UsestateStr';
import UsestateFormText from './UsestateFormText';
import UsestateFormChkBoxBoolean from './UsestateFormChkBoxBoolean';
import UsestateObj from './UsestateObj';
import UsestateObj1 from './UsestateObj1';
import UsestateNestedObj from './UsestateNestedObj';

function App() {
  return (
    <div className="App">
      <Test/>
      <UsestateNestedObj/>
      <UsestateNum/>
      <UsestateStr/>
      <UsestateFormText/>
      <UsestateFormChkBoxBoolean/>
      <UsestateObj/>
      <UsestateObj1/>
    </div>
  );
}

export default App;
