export const getData=(key)=>{
    const res=localStorage.getItem(key)

    return res ? JSON.parse(res) : []
}

export const setData=(key,arr)=>{
    try{
        localStorage.setItem(key,JSON.stringify(arr))
        console.log('item añadido')
    }catch(error){
        console.log(error)
    }
}

export const deleteData=(key)=>{
    localStorage.removeItem(key)
}