document.addEventListener("DOMContentLoaded", () =>{
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML = `
    <a class="logo" href="/">Since 1989</a>
    <nav>
      <a href="/">Home</a>
      <a href="elements.html">Services</a>
      <a href="/Contact.html">Contact Us</a>
    </nav>
  `;
  
  // Insert at the top of body or in a placeholder
      document.getElementById("header-placeholder").appendChild(header);

});




    //   <header id="header">
    //     <a class="logo" href="index.html">Since 1989</a>
    //     <nav>
    //       <a href="/">Home</a>
    //       <a href="Contact.html">Contact Us</a>
    //       <a href="elements.html">Elements</a>
    //     </nav>