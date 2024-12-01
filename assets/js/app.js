const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTranstions() {
  //button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //sections active class
  allSections[0].addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      //remove selected ele from the other btns
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      secBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  // toggle theme

  const papaSwitcher = document.getElementById("theme-btn");
  const switcher = document.getElementById("ball-switcher");

  papaSwitcher.addEventListener("click", () => {
    let element = document.body;
    if (switcher) {
      if (papaSwitcher.style.justifyContent == "flex-start") {
        element.classList.toggle("light-mode");
        papaSwitcher.style.setProperty("justify-content", "flex-end");
      } else {
        element.classList.toggle("light-mode");
        papaSwitcher.style.setProperty("justify-content", "flex-start");
      }
    }
  });
}

pageTranstions();

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "service_kvhdwu3";
  const templateID = "template_3u374l8";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      alert("your message sent successfully");
    })
    .catch((err) => {
      alert("something went wrong");
      console.log(err);
    });
}