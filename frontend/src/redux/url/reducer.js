const initialState={
    isLoading:false,
    isError:false,
    errorMessage:null,
    urls:[],
    visitors:[],
    urlDetails:null
}
export const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    console.log(type,payload)
    switch (type) {
        default:
          return state;
      }
}