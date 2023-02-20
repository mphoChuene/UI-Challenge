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
      listUl +=
        "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 10px;'><tr><td rowspan='3' style='width:150px'><img src='" +
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