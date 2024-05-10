


const baseURL = 'https://randomuser.me';
const urlGetAll = '/api/?results=20';
//const urlGetById = `/posts/${id}`;




export const fetchData = async () => {
    const response = await fetch(baseURL+urlGetAll);
    const data = await response.json();
    console.log(data);
     return data;
 }
