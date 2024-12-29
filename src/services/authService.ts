// services/authService.ts
import axios from 'axios';

export const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/auth/signin',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,  // If tokens or cookies are used
        }
      );
      return response.data;
    } catch (error) {
      console.log(`Login error:${error}`)
      throw new Error('Login failed. Please try again.');
    }
  };

  export const register = async (firstname:string, lastname:string, email:string, password:string ) => {

    const data = {
        firstname,
        lastname ,
        email,
        password }
    

    try {
      const response = await axios.post('http://localhost:4000/api/v1/auth/signup', data, {
        
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(`Registration error: ${error}`)
      throw new Error('Registration failed. Please try again.');
    }
  }