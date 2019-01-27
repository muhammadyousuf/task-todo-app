export const addFunc = (pageRef,callBack)=>{

    const {todo} = pageRef.state;
    console.log(todo)
    if(todo === ""){
      alert("Please Fill Todo");
    }else{
        callBack();
    }

}