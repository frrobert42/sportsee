import './App.css';
import Home from "./page/home";
import {useEffect, useState} from "react";
import ApiService from "./service/api/api";
import Header from "./component/header/header";
import Navbar from "./component/navbar/navbar";
import NotFound from "./component/not-found/not-found";

function App() {
    let [user, setUser] = useState(null);
    let [activity, setActivity] = useState(null);
    let [sessions, setSessions] = useState(null);
    let [performance, setPerformance] = useState(null);
    let userId  = 12;

    // Get url parameter userId
    const userIdParam = new URLSearchParams(window.location.search).get('userId');
    if (!userIdParam) window.location.href = "/?userId=12";
    else if(userId !== +userIdParam)  userId = +userIdParam;

    useEffect(() => {
        const apiService = new ApiService();
        apiService.getUser(userId).then((response) => setUser(response.data));
        apiService.getUserActivity(userId).then((response) => setActivity(response.data));
        apiService.getUserSessions(userId).then((response) => setSessions(response.data));
        apiService.getUserPerformance(userId).then((response) => setPerformance(response.data));
    }, [userId]);

    return (
        <>
            <Header />
            <div className={"main-container"}>
                <Navbar />
                { user && activity && sessions && performance &&
                    <Home User={user} Activity={activity} Session={sessions} Performance={performance} />
                }
                {
                    (!user || !activity || !sessions || !performance) &&
                    <NotFound />
                }
            </div>
        </>
    );
}

export default App;
