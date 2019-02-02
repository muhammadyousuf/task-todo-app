import Connect from './api';
export const addFunc = (pageRef,callBack)=>{
    const {title, order, completed} = pageRef.state;
    let record = {}
    record.title = title;
    record.order = order;
    record.completed = completed;
    Connect(record, "post", "/")
        .then((res) => res.json())
        .then((json) =>{

        })
        .catch((err) => console.log(err))
      
    

}