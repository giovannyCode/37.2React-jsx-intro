const App = () => (
  <div>
    <Person
      name="💙Giovanny Bejarano💙"
      age={37}
      hobbies={["bridge", "reading", "tea"]}
    />
    <br></br>
    <Person
      name="💙Mario💙"
      age={37}
      hobbies={["bridge", "reading", "running"]}
    />

    <br></br>
    <Person
      name="💙Salomon💙"
      age={6}
      hobbies={["bridge", "biking", "running"]}
    />
  </div>
);

const Person = (props) => {
  return (
    <div>
      <p>{getName(props.name)}: Learn some information about this person</p>;
      {props.age > 18 ? <h3>please go vote!</h3> : <h3>You must be 18</h3>}
      <ol>
        {props.hobbies.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ol>
      ;
    </div>
  );
};

function getName(name) {
  if (name.length > 6) {
    return name.substring(0, 6);
  } else {
    return name;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
