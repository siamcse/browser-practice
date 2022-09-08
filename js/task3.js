const $ = (id) => document.getElementById(id);
const getValueById = (id) =>{
    const inputField = $(id);
    const input = inputField.value;
    inputField.value = '';
    return input;
}
//save to local storage
const saveToLS = (id,key) =>{
    const value = getValueById(id);
    localStorage.setItem(key,value);
}
$('btn-send-name').addEventListener('click',function(){
    saveToLS('name','name');
})
$('btn-send-email').addEventListener('click',function(){
    saveToLS('email','email');
})
$('btn-send-message').addEventListener('click',function(){
    saveToLS('message','message');
})
//delete from local storage
const deleteFromLS = (key) =>{
    localStorage.removeItem(key);
}
$('btn-delete-name').addEventListener('click',function(){
    deleteFromLS('name');
})
$('btn-delete-email').addEventListener('click',function(){
    deleteFromLS('email');
})
$('btn-delete-message').addEventListener('click',function(){
    deleteFromLS('message');
})
$('btn-clear-all').addEventListener('click',function(){
    localStorage.clear();
})
$('btn-send-all').addEventListener('click',function(){
    saveToLS('name','name');
    saveToLS('email','email');
    saveToLS('message','message');
})