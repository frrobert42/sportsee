import axios from "axios";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../mockData/data";

export const getUser = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data = await axios.get(`http://localhost:3000/user/${userId}`).catch(async function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
        if (data?.data) return data?.data;
    }
    return await getMockUser(userId);
}

export const getUserActivity = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data =  await axios.get(`http://localhost:3000/user/${userId}/activity`)
            .catch(async function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        if (data?.data) return data?.data;
    }
    return await getMockUserActivity(userId);
}

export const getUserSessions = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data =  await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
            .catch(async function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        if (data?.data) return data?.data;
    }
    return await getMockUserSessions(userId);
}

export const getUserPerformance = async (userId) => {
    if (process.env.REACT_APP_PRODUCTION === "true") {
        let data = await axios.get(`http://localhost:3000/user/${userId}/performance`)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        if (data?.data) return data?.data;
    }
    return await getMockUserPerformance(userId);
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
