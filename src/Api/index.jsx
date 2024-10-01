import axios from "axios";


const api = axios.create({baseURL:'https://api.unsplash.com/', headers:{
    Authorization: 'Client-ID y70U9kBwE3DU_F5aeB-sdSOS3POUA05xeP_ZCXFbEaM'
}})

export default api