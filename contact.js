document.getElementById('contactform').addEventListener('submit',function(event){
  event.preventDefault();

  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var number=document.getElementById('number').value;
  var message=document.getElementById('message').value;

  if(name.trim()===''||email.trim()===''||number.trim()===''||message.trim()===''){
    alert('Please fill in the fields');
    return;
  }

  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('number').value='';
  document.getElementById('message').value='';

  alert('Message sent successfully !');
});