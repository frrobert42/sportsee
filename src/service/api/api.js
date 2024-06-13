import axios from "axios";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../mockData/data";

export const getUser = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data = await axios.get(`http://localhost:3000/user/${userId}`);
        return data?.data;
    } else {
        return await getMockUser(userId);
    }
}

export const getUserActivity = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data =  await axios.get(`http://localhost:3000/user/${userId}/activity`);
        return data?.data;
    } else {
        return await getMockUserActivity(userId);
    }
}

export const getUserSessions = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data =  await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        return data?.data;
    } else {
        return await getMockUserSessions(userId);
    }
}

export const getUserPerformance = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data =  await axios.get(`http://localhost:3000/user/${userId}/performance`);
        return data?.data;
    } else {
        return await getMockUserPerformance(userId);
    }
}

export const getMockUser = async (userId) => {
    return {
        data: USER_MAIN_DATA.find(user => user.id === userId)
    };
}

export const getMockUserActivity = async (userId) => {
    return {
        data: USER_ACTIVITY.find(user => user.userId === userId)
    };
}

export const getMockUserSessions = async (userId) => {
    return {
        data: USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
    };
}

export const getMockUserPerformance = async (userId) => {
    return {
        data: USER_PERFORMANCE.find(user => user.userId === userId)
    };
}
