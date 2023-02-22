             /*     navigation menu of the webpage */

             const navigation =  '<table style="width: 100%">'+
             '          <tr>'+
             '            <td> '+
             '              <a href="index.html">'+
             '                <img src="assets/imgs/avataaars (1).svg" width="100px" alt="" style="padding-bottom: 15px;"/>'+
             '              </a> welcome to my Portfolio page '+
             '            </td>'+
             '            <td align="right">'+
             '              <nav'+
             '                style="'+
             '                  margin-right: 50px;'+
             '                  margin-top: 16px;'+
             '                  margin-bottom: 16px;'+
             '                  margin-left: 50px;'+
             '                "'+
             '              >'+
             '                <a href="index.html">Home</a>'+
             '                <a href="about_us.html" style="margin: 16px">About Us</a>'+
             '                <a href="contact_us.html">Contact Us</a>'+
             '              </nav>'+
             '            </td>'+
             '          </tr>'+
             '        </table>';
        document.getElementById("nav-container").innerHTML = navigation;
    
    
    /*                 this is the contact us form of the webpage */

    const form =  '<form id="form-inputs" action="https://formspree.io/f/moqzdeel" method="post">'+
    '    '+
    '        <label for="fname">First Name</label>'+
    '        <input type="text" id="fname" name="firstname" placeholder="Your name..">'+
    '    '+
    '        <label for="lname">Last Name</label>'+
    '        <input type="text" id="lname" name="lastname" placeholder="Your last name..">'+
    '    '+
    '        <label for="lname">Email</label>'+
    '        <input type="email" id="lname" name="lastname" placeholder="someone@mail.com."> <br>'+
    '    '+
    '        <label for="subject">Subject</label>'+
    '        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>'+
    '    '+
    '        <input type="submit" value="Submit">'+
    '    '+
    '      </form>';
 document.getElementById("form-container").innerHTML = form;
     
     
     
     /*       the footer section of the webpage */

      const footer =  '<footer style="width: 100%; height: 100px; background-color: lightblue; text-align: center;">'+
      '        <h5 style="padding-top: 25px;"><bold style="margin-right: 5px;">Email: </bold><a href="mailto: Mphochuene42@gmail.com">Mphochuene42@gmail.com</a> <br><br> Created by Mpho Chuene, Copyright &copy; 2023</h5>'+
      '      </footer>';

 document.getElementById("footer-container").innerHTML = footer;