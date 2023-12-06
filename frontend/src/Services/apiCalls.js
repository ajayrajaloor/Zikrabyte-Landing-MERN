import configKeys from "./config";
console.log(configKeys);
const apiCalls = {
    userRegister : `${configKeys?.BASE_URL}/auth/register`,
    userLogin : `${configKeys?.BASE_URL}/auth/login`,
}


export default apiCalls