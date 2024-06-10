import './App.css';
import Home from "./page/home";
import {useEffect, useState} from "react";
import {getUser, getUserActivity, getUserPerformance, getUserSessions} from "./service/api/api";
import Header from "./component/header/header";
import Navbar from "./component/navbar/navbar";

function App() {
  let [user, setUser] = useState(null);
  let [activity, setActivity] = useState(null);
  let [sessions, setSessions] = useState(null);
  let [performance, setPerformance] = useState(null);
  let userId = 12;

  useEffect(() => {
    getUser(userId).then((response) => setUser(response.data));
    getUserActivity(userId).then((response) => setActivity(response.data));
    getUserSessions(userId).then((response) => setSessions(response.data));
    getUserPerformance(userId).then((response) => setPerformance(response.data));
  }, [userId]);

  if (!user || !activity || !sessions || !performance) return (<></>);

    return (
        <>
            <Header />
            <div className={"main-container"}>
                <Navbar />
                <Home User={user} Activity={activity} Session={sessions} Performance={performance} />
            </div>
        </>
  );
}

export default App;
