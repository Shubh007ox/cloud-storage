function savedata(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pwd =   document.getElementById('pwd').value;

    const object = {
        email,
        pwd
    }
    axios.post('https://crudcrud.com/api/b97b66ee59104978ac25db9eb521d877/appData',object)
        .then((response) => {
            showNAmeandPass(response,data)
        })
        .catch((err) => {
            console.log(err)
        })


    //localStorage.setItem(object.email,JSON.stringify(object));
    //localStorage.getItem('shubham14apr@gmail.com');
    showNAmeandPass(object); 

}
function showNAmeandPass(user){

    const parentnode = document.getElementById('list of user');
    const childnode = `<li id=${user.email}> ${user.email} -- ${user.pwd} -- 
    <button onclick=deletecredentials('${user.email}')> Delete user
    <button onclick=edituser('${user.email}','${user.pwd}')> edit user </li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode

}
function deletecredentials(email){
    console.log(email);
    localStorage.removeItem(email)
    removeUserFromScreen(email)
}
function removeUserFromScreen(email){
    const parentnode = document.getElementById('list of user');
    const childToDelete = document.getElementById(email)
    parentnode.removeChild(childToDelete);
}
function edituser(email,pwd){
    console.log(email);
    document.getElementById('email').value = email
    document.getElementById('pwd').value = pwd
    deletecredentials(email)
}