import axios from "axios";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../mockData/data";

// classe de modélisation de l'api : ApiService
export default class ApiService {
    async getUser (userId)  {
        if (process.env.REACT_APP_PRODUCTION === "true") {
            let data = await axios.get(`http://localhost:3000/user/${userId}`)
                .catch(function (error) {});
            if (!data) {
                console.log("No user found for user with id: ", userId);
                return null;
            }
            else if (data?.data) return data?.data;
        }
        return await getMockUser(userId);
    }

    async getUserActivity  (userId)  {
        if (process.env.REACT_APP_PRODUCTION === "true") {
            let data =  await axios.get(`http://localhost:3000/user/${userId}/activity`)
                .catch(function (error) {});
            if (!data) return null;
            else if (data?.data) return data?.data;
        }
        return await getMockUserActivity(userId);
    }

    async getUserSessions (userId)  {
        if (process.env.REACT_APP_PRODUCTION === "true") {
            let data =  await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
                .catch(function (error) {});
            if (!data) return null;
            else if (data?.data) return data?.data;
        }
        return await getMockUserSessions(userId);
    }

    async getUserPerformance (userId)  {
        if (process.env.REACT_APP_PRODUCTION === "true") {
            let data = await axios.get(`http://localhost:3000/user/${userId}/performance`)
                .catch(function (error) {});
            if (!data) return null;
            else if (data?.data) return data?.data;
        }
        return await getMockUserPerformance(userId);
    }
}

const getMockUser = async (userId) => {
    return {
        data: USER_MAIN_DATA.find(user => user.id === userId)
    };
}

const getMockUserActivity = async (userId) => {
    return {
        data: USER_ACTIVITY.find(user => user.userId === userId)
    };
}

const getMockUserSessions = async (userId) => {
    return {
        data: USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
    };
}

const getMockUserPerformance = async (userId) => {
    return {
        data: USER_PERFORMANCE.find(user => user.userId === userId)
    };
}
