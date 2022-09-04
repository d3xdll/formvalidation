const password=document.getElementById('pswd');
const passwordConf=document.getElementById('pswdConf');
const errorMessage=document.getElementById('errorMsg')

passwordConf.addEventListener('keyup', ()=>{
  if(password.value!==passwordConf.value){
    errorMessage.style="visibility:visible"
  }else{
    errorMessage.style="visibility:hidden"
  }
})

password.addEventListener('keyup', ()=>{
  if(password.value!==passwordConf.value){
    errorMessage.style="visibility:visible"
  }else{
    errorMessage.style="visibility:hidden"
  }
})