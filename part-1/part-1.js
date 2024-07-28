const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="💙Giovanny💙" />
  </div>
);
const FirstComponent = () => <h1>My Very First Component</h1>;

const NamedComponent = (props) => <p> My name is {props.name}</p>;

ReactDOM.render(<App />, document.getElementById("root"));
