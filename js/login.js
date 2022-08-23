document.getElementById('btn-login').addEventListener('click',function(){
    
    const emailFiled = document.getElementById('email_user');
    const email = emailFiled.value;


    const passWord = document.getElementById('email_pass');
    const pass = passWord.value;


    if(email == 'dolon@gmail.com' && pass == 'dolon')
    {
        console.log('valid')
    }
    else
    {
        console.log('unvalid')
    }
})