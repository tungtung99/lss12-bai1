function xuly(){
    let ipnhap=document.getElementById("ipnhap").value
    console.log(ipnhap)
    if(ipnhap == ''){
        alert("Mời bạn nhập đáp án!!")
    }
    else if(ipnhap == 'ECMAScript'){
        alert("Right")
    }
    else{
        alert("Didn’t know? ECMAScript!")
    }
}