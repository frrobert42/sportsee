'use client';
import "./home.css";

import PropTypes from 'prop-types';
import ActivityChart from "../component/activity/activity";
import Target from "../component/target/target";
import Rating from "../component/rating/rating";
import Stats from "../component/stats/stats";
import Radar from "../component/radar/radar";


export default function Home(props) {
    if (!props) return (<></>);
    let user = props.User;
    let activity = props.Activity;
    let sessions = props.Session.sessions;
    console.log(props);
    let performance = props.Performance;
    if (!user?.keyData || !activity || !sessions || !performance) return (<></>);

    return (
        <main className="bg-white text-black">
            <h1>Bonjour
                {user?.userInfos?.firstName &&
                    <span className={"text-red-600"}>&nbsp;{user.userInfos.firstName}</span>
                }
            </h1>
            <p className={"congrats"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div id="charts" className={"flex flex-row flex-wrap"}>
                <div className={"flex flex-col gap-y-7"}>
                    {activity && <ActivityChart activity={activity} />}
                    <div className={"flex flex-row flex-wrap gap-x-5 mt-100"}>
                        {sessions && <Target sessions={sessions} />}
                        {performance && <Radar performance={performance}/>}
                        {user && <Rating score={user.todayScore}/>}
                    </div>
                </div>
                <div className={"stats-col"}>
                    <Stats stats={{title: "Calories", icon: '', unit: "kcal" , value: user.keyData.calorieCount}} />
                    <Stats stats={{title: "Proteines", icon: '', unit: "g" , value: user.keyData.proteinCount}} />
                    <Stats stats={{title: "Glucides", icon: '', unit: "g" , value: user.keyData.carbohydrateCount}} />
                    <Stats stats={{title: "Lipides", icon: '', unit: "g" , value: user.keyData.lipidCount}} />
                </div>
            </div>
        </main>
    );
}

Home.propTypes = {
    User: PropTypes.object.isRequired,
    Activity: PropTypes.object.isRequired,
    Session: PropTypes.object.isRequired,
    Performance: PropTypes.object.isRequired,
};
