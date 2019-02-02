const baseURL = 'https://todo-backend-rails.herokuapp.com';
export default async function Connect(payload,methods, url) {
  try {
     if(methods === "get"){
      let response = await fetch(
        baseURL + `${url}`,
        {
          method: methods,
        })
      
      return response

    }
  }
  catch (error) {
    console.error(error);
  }
}