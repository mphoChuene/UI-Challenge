         /*     navigation menu of the webpage */
         const navigation =  '<table style="width: 100%">'+
         '          <tr>'+
         '            <td> '+
         '              <a href="#">'+
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
         '                <a href="#">Home</a>'+
         '                <a href="about_us.html" style="margin: 16px">About Us</a>'+
         '                <a href="contact_us.html">Contact Us</a>'+
         '              </nav>'+
         '            </td>'+
         '          </tr>'+
         '        </table>';
    document.getElementById("nav-container").innerHTML = navigation;
      
      /*  the main section of the home page which includes the slideshow */
      const mainContent =  '<table style="width: 100%; height: 300px">'+
      '        <tr>'+
      '          <td colspan="2" >'+
      '            <div class="slideshow-container" style="object-fit:cover">'+
      ''+
      '              <div class="mySlides fade">'+
      '                <div class="numbertext">1 / 3</div>'+
      '                <img src="assets/imgs/ict.jpeg" style="width:100%;">'+
      '                <div class="text">junior Ict assistant</div>'+
      '              </div>'+
      '              '+
      '              <div class="mySlides fade">'+
      '                <div class="numbertext">2 / 3</div>'+
      '                <img src="assets/imgs/ict2.jpeg" style="width:100%;">'+
      '                <div class="text">junior Ict assistant</div>'+
      '              </div>'+
      '              '+
      '              <div class="mySlides fade">'+
      '                <div class="numbertext">3 / 3</div>'+
      '                <img src="assets/imgs/molepo.jpeg" style="width:100%;">'+
      '                <div class="text">volunteer</div>'+
      '              </div>'+
      '              '+
      '              </div>'+
      '              <br>'+
      '              '+
      '              <div style="text-align:center">'+
      '                <span class="dot"></span> '+
      '                <span class="dot"></span> '+
      '                <span class="dot"></span> '+
      '              </div>'+
      '          </td>'+
      '        </tr>'+
      '        <tr>'+
      '          <td style="padding-left: 20vh; padding-top: 50px">'+
      '            <h1>Mpho Chuene</h1> <br>'+
      '            <p style="width: 85vh">'+
      '              Hi there, i am  a Bachelor of Information Technology in Business System graduate from Rosebank College Polokwane.'+
      '              Throughtout my journey at Rosebank College Polokwane, I have managed to achieve the 2022 CLC Deputy President position, volunteer in '+
      '              as an junior ICT assistant and also volunteer to assist in the information centre. '+
      '            </p>'+
      '          </td>'+
      '          <td align="right" style="padding-right: 20vh; padding-top: 30px; padding-bottom: 30px">'+
      '            <img'+
      '              src="assets/imgs/me.jpeg"'+
      '              alt=""'+
      '              width="300px"'+
      '              height="300px"'+
      '              style="border-radius: 50%; object-fit: cover; border: 5px solid lightblue;"'+
      '            />'+
      '          </td>'+
      '        </tr>'+
      '      </table>';

document.getElementById("main-section").innerHTML = mainContent;

        /* the functionality of the slideshow */
  
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

        /* address section of the webpage */

        const address =  '<table >'+
'        <tr>'+
'          <td style="padding-left: 20vh;"></td>'+
'          <td style="padding-left: 70vh;padding-top: 10vh;" colspan="2"> Address:  Limpopo, Polokwane, Lebowakgomo Unit A <br>'+
'            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.339458586997!2d29.537982212879186!3d-24.299952041198157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1245d233f3531%3A0xf85f8e73a7f266b2!2sLebowakgomo-A%2C%20Lebowakgomo%2C%200737!5e0!3m2!1sen!2sza!4v1675751502274!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" '+
'            loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="50px" height="50px"></iframe></td>'+
'        </tr>'+
'        <tr colspan="2">'+
'          <td  style="padding-left: 15vh;" colspan="2"> <h4>social media links:</h4> <br>'+
'            <a href="https://www.linkedin.com/in/mpho-chuene-b1a919216/" class="fa fa-linkedin"></a>'+
'            <a href="Mailto:mphochuene42@gmail.com" class="fa fa-google"></a>'+
'          </td>'+
'        </tr>'+
'      </table><br';

document.getElementById('address-container').innerHTML = address;




      /*       the footer section of the webpage */
      const footer =  '<footer style="width: 100%; height: 100px; background-color: lightblue; text-align: center;">'+
      '        <h5 style="padding-top: 25px;"><bold style="margin-right: 5px;">Email: </bold><a href="mailto: Mphochuene42@gmail.com">Mphochuene42@gmail.com</a> <br><br> Created by Mpho Chuene, Copyright &copy; 2023</h5>'+
      '      </footer>';

 document.getElementById("footer-container").innerHTML = footer;
