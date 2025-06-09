document.addEventListener("DOMContentLoaded", function() {

  const footer = document.getElementById("footer");


  // Create the new footer content
  const inner = document.createElement("div");
  inner.className = "inner";

  const content = document.createElement("div");
  content.className = "content";

  const section = document.createElement("section");
  section.innerHTML = 
  `
    <h3>Contact Us</h3>
    <p>
      <strong>Phone:</strong> <a href="tel:+917305072288">+91 73050 72288</a><br>
      <strong>Address:</strong> <a href="https://www.google.com/maps/place/OMEGA+INSPECTION+%26+ANALYTICAL+LABORATORY+PVT.+LTD.,/@13.0154325,80.2130594,17z/data=!4m6!3m5!1s0x3a52676aeaaaaaab:0xeae8e8defb20762f!8m2!3d13.0135091!4d80.2127375!16s%2Fg%2F1ts3jn0f?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">T.S.No 35,36 & 57,58,60, Industrial Estate, Guindy, Chennai 600032, Tamil Nadu, India</a><br>
      <strong>Email:</strong> <a href="mailto:omega_ial@outlook.com">omega_ial@outlook.com</a>
    </p>
    <p style="margin-top:1.5rem;">
      Omega Lab Private Limited<br />
      Trusted Testing &amp; Inspection Since 1989
    </p>
  `
  ;

  content.appendChild(section);
  inner.appendChild(content);
  footer.appendChild(inner);
});
