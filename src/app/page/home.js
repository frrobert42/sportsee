'use client';
import "./home.css";
import ActivityChart from "@/app/component/activity/activity";
import Target from "@/app/component/target/target";
import Radar from "@/app/component/radar/radar";
import Rating from "@/app/component/rating/rating";
import Stats from "@/app/component/stats/stats";

import caloriesIcon from "/public/img/calories-icon.svg";
import carbsIcon from "/public/img/carbs-icon.svg";
import fatIcon from "/public/img/fat-icon.png";
import proteinIcon from "/public/img/protein-icon.svg";
import PropTypes from 'prop-types';


export default function Home(props) {
    if (!props) return (<></>);
    let user = props.User;
    let activity = props.Activity;
    let sessions = props.Session;
    let performance = props.Performance;
    if (!user?.keyData || !activity || !sessions || !performance) return (<></>);

    return (
        <main className="min-h-screen h-max bg-white text-black pt-32 pb-32">
            <h1 className="text-4xl font-bold">Bonjour
                {user?.userInfos?.firstName &&
                    <span className={"text-red-600"}>&nbsp;{user.userInfos.firstName}</span>
                }
            </h1>
            <p className={"mt-5"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div id="charts" className={"flex flex-row flex-wrap"}>
                <div className={"flex flex-col gap-y-7 w-100"}>
                    {activity && <ActivityChart activity={activity} />}
                    <div className={"flex flex-row flex-wrap gap-x-5 mt-100"}>
                        {sessions && <Target sessions={sessions} />}
                        {performance && <Radar performance={performance}/>}
                        {user && <Rating score={user.todayScore}/>}
                    </div>
                </div>
                <div className={"stats-col"}>
                    <Stats stats={{title: "Calories", icon: caloriesIcon, unit: "kcal" , value: user.keyData.calorieCount}} />
                    <Stats stats={{title: "Proteines", icon: proteinIcon, unit: "g" , value: user.keyData.proteinCount}} />
                    <Stats stats={{title: "Glucides", icon: carbsIcon, unit: "g" , value: user.keyData.carbohydrateCount}} />
                    <Stats stats={{title: "Lipides", icon: fatIcon, unit: "g" , value: user.keyData.lipidCount}} />
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
