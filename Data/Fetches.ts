// import axios from "axios"


// const BASE_URL = "http://localhost:8000/"

// const instanceAxios = axios.create({baseURL: BASE_URL})

// export const GetData = async () => {
//     return await instanceAxios.get("blogs")
// }

const url = "http://localhost:8000/blogs";

export const GetData = async () => {
  const res = await fetch(url, {cache: 'no-store'});
  try{

      if(!res.ok){
        throw new Error(`Response status: ${res.status}`);
      }else {
        const json = await res.json()
        return json
        
      }
    }
    catch(error) {
        console.log(error);
        
    }
};
