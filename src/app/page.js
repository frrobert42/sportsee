'use client';
import Home from "@/app/page/home";
import {getUser, getUserActivity, getUserPerformance, getUserSessions} from "@/app/service/api/api";
import {useEffect, useState} from "react";
import {useSearchParams} from 'next/navigation'


export default function Page() {
  console.log('page');
  const userIdParams = useSearchParams();
  let [user, setUser] = useState(null);
  let [activity, setActivity] = useState(null);
  let [sessions, setSessions] = useState(null);
  let [performance, setPerformance] = useState(null);
  let userId = +userIdParams.get('userId');

  if (!userId) {
    userId = 18;
  }

  useEffect(() => {
    getUser(userId).then((response) => setUser(response.data));
    getUserActivity(userId).then((response) => setActivity(response.data));
    getUserSessions(userId).then((response) => setSessions(response.data));
    getUserPerformance(userId).then((response) => setPerformance(response.data));
  }, []);

  if (!user || !activity || !sessions || !performance) return (<></>);

  return (
      <Home User={user} Activity={activity} Session={sessions} Performance={performance} />
  );
}
