function validation(){
      var user = document.getElementById('user').value;
      var email = document.getElementById('email').value;
      var mobile = document.getElementById('mobile').value;
          if(email == "")
          {
            document.getElementById('emaill').innerHTML="**Please write EmailId**";
            return false;
          }
          if(email.indexOf('@')<=0)
          {
            document.getElementById('emaill').innerHTML="**Invalid position of @**";
            return false;
          }
          if(email.charAt(email.length-4)!='.')
          {
            document.getElementById('emaill').innerHTML="**Invalid position of .**";
            return false;
          }
          else
          {
            document.getElementById('emaill').innerHTML="";
          }
          if(user == "")
          {
            document.getElementById('userr').innerHTML="**Please write username**";
            return false;
          }
          if(user.length<2)
          {
            document.getElementById('userr').innerHTML="**Please write more than one char**";
            return false;
          }
          if(!isNaN(user))
            {
              document.getElementById('userr').innerHTML="**please write alphabets only**";
              return false;
            }
          else
          {
            document.getElementById('userr').innerHTML="";
          }
          if(mobile == "")
          {
            var mobile = document.getElementById('mobilee').innerHTML="**Please write mobileno**";
            return false;
          }
          if(isNaN(mobile))
            {
              document.getElementById('mobilee').innerHTML="**please write only numbers**";
              return false;
            }
            if(mobile.length<10 || mobile.length>10)
            {
              document.getElementById('mobilee').innerHTML="**please write 10 digit number only**";
              return false;
            }
            else
          {
            document.getElementById('mobilee').innerHTML="";
          }
    }