import axios from "axios";
import apiCalls from "./apiCalls.js";


export const postRegister = async (data) => {
    console.log(data,'daatttaaaaaaaaaaa');
    try {
      const config = {
        url: `${apiCalls.userRegister}`,
        method: "post",
        data: data,
      };
      console.log(config);
  
      // Make the POST request using axios
      const response = await axios(config);
  
      // Log the response or handle it as needed
      console.log(response, "Response from server");
      return response.data;
    } catch (error) {
      console.log(error,'okayyy');
      throw error;
    }
  };
  


  export const postLogin = async (data) =>{
    try {
      const config = {
        url: `${apiCalls.userLogin}`,
        method: "post",
        data: data,
      };
      console.log(config,'conifiiiiiiggggggg');
      // Make the POST request using axios
      const response = await axios(config);
      // Log the response or handle it as needed
      console.log(response, "Response from serverrrrrr");
      return response.data
    } catch (error) {
      console.log(error,'haaaaa');
      throw error;
    }
  }
  