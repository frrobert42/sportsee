'use client';
import "./home.css";

import PropTypes from 'prop-types';
import ActivityChart from "../component/activity/activity";
import Target from "../component/target/target";
import Rating from "../component/rating/rating";
import Stats from "../component/stats/stats";
import Radar from "../component/radar/radar";
// icons
import caloriesIcon from "../img/calories-icon.svg";
import carbsIcon from "../img/carbs-icon.svg";
import fatIcon from "../img/fat-icon.png";
import proteinIcon from "../img/protein-icon.svg";
import NotFound from "../component/not-found/not-found";


export default function Home(props) {

    let user = props.User;
    let activity = props.Activity;
    let sessions = props.Session;
    let performance = props.Performance;

    if (!user) return (
        <div className={"w-100 text-center"}>
            <NotFound />
        </div>
    );

    return (
        <main className="bg-white text-black mx-auto">
            <div className={"title-main"}>
                <h1>Bonjour
                    {user?.userInfos?.firstName &&
                        <span className={"text-red-600"}>&nbsp;{user.userInfos.firstName}</span>
                    }
                </h1>
                <p className={"congrats"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div id="charts" className={"flex flex-row flex-wrap"}>
                <div className={"flex flex-col gap-y-7"}>
                    <ActivityChart activity={activity} />
                    <div className={"flex flex-row flex-wrap gap-x-5 mt-100"}>
                        <Target sessions={sessions?.sessions} />
                        <Radar performance={performance}/>
                        <Rating score={user?.todayScore || user?.score || 0}/>
                    </div>
                </div>
                <div className={"stats-col"}>

                    <Stats stats={{
                            title: "Calories",
                            icon: caloriesIcon,
                            unit: "kcal" ,
                            value: user?.keyData?.calorieCount || 0
                    }} />

                    <Stats stats={{
                        title: "Proteines",
                        icon: proteinIcon,
                        unit: "g" ,
                        value: user?.keyData?.proteinCount || 0
                    }} />

                    <Stats stats={{
                        title: "Glucides",
                        icon: carbsIcon,
                        unit: "g" ,
                        value: user?.keyData?.carbohydrateCount || 0
                    }} />

                    <Stats stats={{
                        title: "Lipides",
                        icon: fatIcon,
                        unit: "g" ,
                        value: user?.keyData?.lipidCount || 0
                    }} />

                </div>
            </div>
        </main>
    );
}

Home.propTypes = {
    User: PropTypes.object,
    Activity: PropTypes.object,
    Session: PropTypes.object,
    Performance: PropTypes.object,
};
