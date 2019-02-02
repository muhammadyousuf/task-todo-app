import Connect from './api';
export const addFunc = (pageRefProp,callBack)=>{
    const {title, order, completed} = pageRefProp.state;
    let record = {}
    record.title = title;
    record.order = order;
    record.completed = completed;
    Connect(record, "post", "/")
        .then((res) => res.json())
        .then((json) =>{
            console.log(JSON.stringify(json))

            let res = {
                id:json.id,
                title:json.title,
                completed:"Completed",
                order:json.order
            }
            callBack(res)
        })
        .catch((err) => console.log(err))
      
    

}