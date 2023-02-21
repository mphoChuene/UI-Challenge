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