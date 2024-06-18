import axios from "axios";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../mockData/data";

export default class ApiService {
    async getUser (userId)  {
        if (process.env.REACT_APP_PRODUCTION === "true") {
            let data = await axios.get(`http://localhost:3000/user/${userId}`)
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
        return await getMockUser(userId);
    }

    async getUserActivity  (userId)  {
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

    async getUserSessions (userId)  {
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

    async getUserPerformance (userId)  {
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
