'use client';
import "./page.css";
import ActivityChart from "@/app/component/activity/activity";
import {getMockGetUser, getMockGetUserActivity, getMockGetUserSessions, getMockUserPerformance} from "@/app/service/api/api";
import {useState} from "react";
import Target from "@/app/component/target/target";
import Radar from "@/app/component/radar/radar";
import Rating from "@/app/component/rating/rating";

export default function Home() {
    let [user, setUser] = useState(null);
    let [activity, setActivity] = useState(null);
    let [sessions, setSessions] = useState(null);
    let [performance, setPerformance] = useState(null);
    let [userId, setUserId] = useState(12);

    if (!userId) {
        const urlParams = new URLSearchParams(window.location.search);
        setUserId(urlParams.get('userId') || 12);
    }

    if (!user) {
        getMockGetUser(userId).then((response) => {
            setUser(response);
        });
    }

    if (!activity) {
        getMockGetUserActivity(userId).then((response) => {
            setActivity(response.sessions);
        });
    }

    if (!sessions) {
        getMockGetUserSessions(userId).then((response) => {
            setSessions(response.sessions);
        });
    }

    if (!performance) {
        getMockUserPerformance(userId).then((response) => {
            setPerformance(response);
        });
    }

    if (!user || !activity || !sessions || !performance) return (<></>);

  return (
    <main className="min-h-screen h-max bg-white text-black pt-32 pb-32">
        <h1 className="text-4xl font-bold">Bonjour
            {user?.userInfos?.firstName &&
                <span className={"text-red-600"}>&nbsp;{user.userInfos.firstName}</span>
            }
        </h1>
        <p className={"mt-5"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div id="charts" className={"flex flex-row"}>
            <div className={"flex flex-col gap-y-20 w-100"}>
                {activity && <ActivityChart activity={activity} />}
                <div className={"flex flex-row flex-wrap gap-14 mt-100"}>
                    {sessions && <Target sessions={sessions} />}
                    {performance && <Radar performance={performance}/>}
                    {user && <Rating score={user.todayScore}/>}
                </div>
            </div>
            <div className={"mt-100 w-3/12"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </main>
  );
}
