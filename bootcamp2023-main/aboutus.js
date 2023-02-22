     /*     navigation menu of the webpage */
     const navigation =  '<table style="width: 100%">'+
     '          <tr>'+
     '            <td> '+
     '              <a href="index.html">'+
     '                <img src="assets/imgs/avataaars (1).svg" width="100px" alt="" />'+
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

    /*   the aboutMe section of my website */

const aboutMe =  '<table>'+
'      <tr>'+
'        <td style="padding-left: 12vh; padding-top: 50px">'+
'          <h1>Mpho Chuene</h1>'+
'          <p style="width: 85vh;">'+
'            <h5 style="font-weight: lighter;">Hi there, i am  a Bachelor of Information Technology in Business System graduate from Rosebank College Polokwane.'+
'            Throughtout my journey at Rosebank College Polokwane, I have managed to achieve the 2022 CLC Deputy President position, volunteer in '+
'            as an junior ICT assistant and also volunteer to assist in the information centre. </h5>'+
'          </p>'+
'        </td>'+
'        <td align="right" style="padding-right: 10vh; padding-top: 30px; padding-bottom: 30px; padding-left: 40vh;">'+
'          <img'+
'            src="assets/imgs/me.jpeg"'+
'            alt=""'+
'            width="300px"'+
'            height="300px"'+
'            style="border-radius: 50%; object-fit: cover; border: 5px solid lightblue;"'+
'          />'+
'        </td>'+
'      </tr>'+
'      <tr>'+
'        <td>';

document.getElementById("description").innerHTML = aboutMe;
         


          /*  certification section of my website  */
const mycert =  '<h3 style="padding-left: 12vh;">'+
'            Certifications:'+
'          </h3>'+
'          <ul style="padding-left: 15vh;">'+
'            <li>HTML</li>'+
'            <li>JavaScript Basics</li>'+
'            <li>SQL</li>'+
'            <li>MongoDB</li>'+
'            <li>Introduction to Front-End development </li>'+
'          </ul>'+
'        </td>'+
'      </tr>'+
'</table>';

document.getElementById("certifications").innerHTML = mycert;

            /* programming-language skills arrays  */

let skills = new Array (
    {img:"assets/logo/HTML5_logo.svg", skill:"HTML", level: "9/10"},
    {img:"assets/logo/css-3-logo-png-transparent.png", skill:"CSS", level: "7/10"},
    {img:"assets/logo/js.png", skill:"JavaScript", level: "6/10"},
    {img:"assets/logo/bootstrap5.png" , skill:"Bootstrap", level: "6/10"},
    {img:"assets/logo/MongoDB_logo_PNG1.png", skill:"MongoDB", level: "6/10"},
    {img:"assets/logo/SQL.png", skill:"SQL", level: "9/10"},
    );
  
  let listUl = "<div style='width:500px'>";
    for (let i = 0; i < skills.length; i++) {
      console.log(skills[i].item);


            /* table structure concatination and element-incrementation */
      listUl +=
        "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 50px;'><tr><td rowspan='3' style='width:150px'><img src='" +
        skills[i].img +
        "' alt='' style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' />" +
        "</td></tr> <tr><td>Skill: " +
        skills[i].skill +
        "</td></tr> <tr><td>level: " +
        skills[i].level +
        "</td></tr></table>";
    }
    listUl += "</div>";
    document.getElementById("skillsList").innerHTML = listUl;

            
    /*      project section in javaScript */

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild
}
/*  container to store all the  html elements in javaScript using a
 multi-line string */

const myproject = elementFromHtml(`
  <div>
  <table>
    <tr>
      <td style="padding-left: 12vh;">
        <div class="card" style="width: 18rem; margin-left: 12vh;" >
          <img src="assets/imgs/portfolio1.PNG" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">personal Portfolio</h5>
            <p class="card-text">This is a Portfolio website, i created in my second year of studying to showcase my skills.The <strong> Tech stack </strong> used include: HTML5, CSS3, JavaScript</p>
            <a href="https://wilportfolio19340485.000webhostapp.com/" class="btn btn-primary">Visit Page</a>
          </div>
        </div>
      </td>
      <td style="padding-left: 25vh;">
        <div class="card" style="width: 18rem; margin-left: 12vh;">
          <img src="assets/imgs/mural.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Graphic Design</h5>
            <p class="card-text">This is a mural, i created to showcase my Design and Creativity skills, the <strong> application </strong> used include: Adobe photoshop and Adobe Illustrator </p>
            <a href="assets/imgs/mural.png" class="btn btn-primary">View Image</a>
          </div>
        </div>
      </td>
    </tr>
  </table>
  </div>
  `)

  document.getElementById('my-proj').appendChild(myproject)

            /*   the footer section of the webpage */

  const footer =  '<footer style="width: 100%; height: 100px; background-color: lightblue; text-align: center;">'+
  '  <h5 style="padding-top: 25px;"><bold style="margin-right: 5px;">Email: </bold><a href="mailto: Mphochuene42@gmail.com">Mphochuene42@gmail.com</a> <br><br> Created by Mpho Chuene, Copyright &copy; 2023</h5>'+
  '</footer>';

  document.getElementById("footer-container").innerHTML = footer;