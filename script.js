//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Function to get cookie value by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }

  // Apply stored preferences (if any)
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }

  // Save preferences when the form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Store values in cookies
    document.cookie = `fontsize=${encodeURIComponent(fontSize)}; path=/`;
    document.cookie = `fontcolor=${encodeURIComponent(fontColor)}; path=/`;

    // Apply styles immediately
    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  });
});
