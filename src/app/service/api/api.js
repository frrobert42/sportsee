import axios from "axios";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "@/app/service/mockData/data";

export const getUser = async (userId) => {
    return await axios.get(`http://localhost:3000/user/${userId}`);
}

export const getUserActivity = async (userId) => {
    return await axios.get(`http://localhost:3000/user/${userId}/activity`);
}

export const getUserSessions = async (userId) => {
    return await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
}

export const getUserPerformance = async (userId) => {
    return await axios.get(`http://localhost:3000/user/${userId}/performance`);
}

export const getMockGetUser = async (userId) => {
    let user = USER_MAIN_DATA.find(user => user.id === userId);
    return user || {};
}

export const getMockGetUserActivity = async (userId) => {
    let activity = USER_ACTIVITY.find(user => user.userId === userId);
    return activity || {};
}

export const getMockGetUserSessions = async (userId) => {
    let sessions = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
    return sessions || {};
}

export const getMockUserPerformance = async (userId) => {
    let performance = USER_PERFORMANCE.find(user => user.userId === userId);
    return performance || {};
}
