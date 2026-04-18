const root = document.getElementById("root");

// UI
root.innerHTML = `
  <div class="loader">
    <h2>RBR CDN Loader</h2>
    <p>Connecting to asset repository...</p>
    <button id="load">Load Assets</button>
    <div id="status"></div>
  </div>
`;

const status = document.getElementById("status");

document.getElementById("load").onclick = async () => {
  status.textContent = "Loading scripts from jsDelivr...";

  // Try loading main asset bundle (if it exists)
  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://cdn.jsdelivr.net/gh/FloodPolo/rbr-assets/assets/index.js";

  script.onload = () => {
    status.textContent = "Assets loaded successfully ✔";
  };

  script.onerror = () => {
    status.textContent = "No app bundle found — running fallback UI";
  };

  document.body.appendChild(script);
};

// Auto-check on load
status.textContent = "Ready to load CDN assets";
