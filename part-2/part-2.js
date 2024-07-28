const App = () => (
  <div>
    <Tweet
      username="@💙Giovanny💙"
      authorname="Giovanny Bejarano"
      date="07/28/2024"
      message="Can't contain my excitement for the Olympics! 🌟 Ready to cheer on the incredible athletes and witness history in the making. Let's go! 🥇🔥 #Olympics #Excitement #GoTeam"
    />
    <br></br>
    <Tweet
      username="@Bonilla 💙"
      authorname="Samira Smith"
      date="07/28/2024"
      message="Very extited as well 🌟 Ready to cheer! 🥇🔥 #Olympics "
    />
    <br></br>
    <Tweet
      username="@COPF 💙"
      authorname="Jackelin Fotnite"
      date="07/2/2024"
      message=" Someone thinks about the kids"
    />
  </div>
);

const Tweet = (props) => (
  <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{props.authorname}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">
        {props.username}
      </h6>
      <p className="card-text bg-primary">{props.message}</p>
      <a href="#" className="card-link">
        {props.date}
      </a>
    </div>
  </div>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
