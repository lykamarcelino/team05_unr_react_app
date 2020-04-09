function Logout() {
    var x = window.location.href;
    if(x){
        window.location.href = "/"
    }
}
export default Logout;