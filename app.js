const modules = [
  "FreeCommerce",
  "Apartment A9",
  "Data Stream",
  "Energy System",
  "Market Flow",
  "Security Layer",
  "Transport Node",
  "Network Pulse"
];

const homeTasks = [
  ["FreeCommerce market node online", "MKT"],
  ["Apartment A9 habitat synchronized", "A9"],
  ["Data stream columns scanning", "DATA"],
  ["Energy core stable at 86 percent", "PWR"],
  ["Market flow receiving live pulse", "FLOW"],
  ["Security layer access verified", "SEC"],
  ["Transport node route recalculated", "TRN"],
  ["Network pulse latency nominal", "NET"]
];

const homeCopy = [
  "T?NF UFDJFC/JD C?LL?II, LCNT?C?TN?RA UFC?JCF /F LCC D?VCCC?LT?C?F. CF?NF?LVD FRD, D?VCCC?TEDN V?FNAL T?NF CV?LLF?GT",
  "TLLC?TLL?J?T UFC?VFR?T, D?C?VFR?TT?J?T UFHCJTM V?T?RL",
  "TCTJDF FL?LJ?T?J?T CF?T?J?D D?FLL?FCT?J?T /F",
  "TR?T?JC?T!! UFC?LL?N, C?J?LLC?V?LC FCC?J?T?J?J?T, L?N",
  "JD??CT?J?T, ?NFLL?J?T ?L C?DT? CL?F?JC?T?J!! F?NT?T?N",
  "JTN?CLT?F J?T?T?J?T?FL?F?N, CF?TC?R?T UF?CL?TJ?T",
  "TCT?JC?J?!! L?T? TLC?TJ?FR?T?L?J?R UFC?LL?N, T?ND?T?JC?LC.",
  "TCLL?F?CL?T?J?T T?LJ CF?T UFC?VFR?T?R FL?C LCC",
  "CLL?J?C?TJ?J?S, TCL?J?F?N, ?RC R??HDC?JT?J?T UF?CLL?J?D",
  "T?NF C?J!! LCC CF?F, UF?T?F?D T?F T?D?D T?NF ?F UFDJFC.",
  "D?VCCC?LT?J?D FL?TJ?C?J?T, TL?NF CF?T TLL?TVFFFR?TCR C?J?T",
  "D?LL?V?TT J?C TLC?J?LL?J?T TLL?FT?CT?D FRT?LC?J?TR",
  "V?T?RL J?T?LL?F?C?T?L TLL?JT?J?T L?N D?V?L?F!! D?L?FFC?T?Y,",
  "LCC CLL?J?FN UFC?J?T FCC?J?TJ?TR J?C CL?F?D?R UFC?LL?N,",
  "C?J?CV?JT?C?JT?N, ?F?CVL?T?J!! C?TJ, L?N /C?HL?T?J?T?C",
  "CFRT L?T?L?CT?N FC?L C?D?LC L?T?J?J?N, L?N C?F?ND?V?L?C",
  "T?NF?VC?T, F?VLT?FL UFC?D?RM?T?J?T?N, L?CC CF",
  "J?N?VR F?CC?J?D UFDJFC /F D?VCCC?F?T?L H?J?R?C?R L?N B?J?T??",
  "N?T?F?T?J?LT?R C?C?F?N UFC?LL?R?D J? T?F CL?F?D?T?J?T LCC"
];

const moduleData = {
  "FreeCommerce": {
    action: "INITIALIZE TRADE",
    subtitle: "Market data / exchange flow",
    readout: "FREECOMMERCE",
    copy: [
      "Live market data reroutes through FreeCommerce exchange nodes.",
      "Animated trading lines show bid, ask and transfer pressure.",
      "Commercial nodes are validating flow across Apartment A9."
    ],
    blocks: [["INDEX", "+4.28"], ["TRADE", "LIVE"], ["NODES", "12"], ["FLOW", "91"]],
    fields: [["Market Index", "+4.28"], ["Exchange Flow", "91%"], ["Commercial Nodes", "12 active"], ["Trade Status", "Ready"]],
    visual: "trade"
  },
  "Apartment A9": {
    action: "SYNC HABITAT",
    subtitle: "Habitat state / interior environment",
    readout: "APARTMENT A9",
    copy: [
      "Apartment A9 habitat map is staged in glass-outline mode.",
      "Temperature, access, energy and ambient fields are synchronized.",
      "The house plan is adapted into the local HUD palette."
    ],
    blocks: [["TEMP", "21.8"], ["ACCESS", "LOCK"], ["ENERGY", "86%"], ["AMBIENT", "SOFT"]],
    fields: [["Temperature", "21.8 C"], ["Access", "Private lock"], ["Energy", "86%"], ["Ambient", "Low-noise"]],
    visual: "apartment"
  },
  "Data Stream": {
    action: "SCAN STREAM",
    subtitle: "False code / flow graph",
    readout: "DATA STREAM",
    copy: [
      "False code lines cascade through the vertical data buffer.",
      "Stream graphs are scanning for signal drift and packet noise.",
      "Column layers react to the current code density."
    ],
    blocks: [["RX", "92"], ["TX", "86"], ["SCAN", "ON"], ["DRIFT", "00"]],
    fields: [["Code Buffer", "Active"], ["Flow Graph", "Scrolling"], ["Packet Drift", "00"], ["Scanner", "Enabled"]],
    visual: "stream"
  },
  "Energy System": {
    action: "BALANCE CORE",
    subtitle: "Core percentage / stability / load",
    readout: "ENERGY SYSTEM",
    copy: [
      "Energy core rotates between translucent capacitor layers.",
      "Power draw remains stable while consumption is balanced.",
      "Auxiliary glow is locked to the green operational band."
    ],
    blocks: [["CORE", "86%"], ["STABLE", "99"], ["LOAD", "12.4"], ["HEAT", "COOL"]],
    fields: [["Core Power", "86%"], ["Stability", "99%"], ["Consumption", "12.4 KW"], ["Thermal", "Cool"]],
    visual: "energy"
  },
  "Market Flow": {
    action: "OPEN MARKET",
    subtitle: "Buy / sell routes and fluctuations",
    readout: "MARKET FLOW",
    copy: [
      "Buy and sell paths are drawn over the commerce routing layer.",
      "Indices fluctuate in controlled neon pulses.",
      "Market assets are ready for active exchange."
    ],
    blocks: [["BUY", "7"], ["SELL", "5"], ["ASSETS", "28"], ["DELTA", "+1.8"]],
    fields: [["Buy Routes", "7"], ["Sell Routes", "5"], ["Assets", "28"], ["Fluctuation", "+1.8"]],
    visual: "market"
  },
  "Security Layer": {
    action: "VERIFY ACCESS",
    subtitle: "Authentication / encryption / biometric access",
    readout: "SECURITY LAYER",
    copy: [
      "Authentication rings verify the fictive biometric imprint.",
      "Encrypted access channels are sealed across the perimeter.",
      "Security confirms a clean pass through the local gate."
    ],
    blocks: [["AUTH", "PASS"], ["CRYPT", "ON"], ["BIO", "MATCH"], ["RISK", "00"]],
    fields: [["Authentication", "Passed"], ["Encryption", "Active"], ["Biometric", "Fictive match"], ["Risk", "00"]],
    visual: "security"
  },
  "Transport Node": {
    action: "CALCULATE ROUTE",
    subtitle: "Urban routes / autonomous vehicles / ETA",
    readout: "TRANSPORT NODE",
    copy: [
      "Urban route lines recalculate across the transport node.",
      "Autonomous vehicle traces move through dock corridors.",
      "Estimated arrival is refreshed in the right task layer."
    ],
    blocks: [["ROUTE", "03"], ["AUTO", "4"], ["ETA", "01:20"], ["DOCK", "READY"]],
    fields: [["Urban Route", "Dock 03"], ["Autonomous Vehicles", "4"], ["ETA", "01:20"], ["Dock State", "Ready"]],
    visual: "transport"
  },
  "Network Pulse": {
    action: "REFRESH PULSE",
    subtitle: "Signal / nodes / latency / distributed connection",
    readout: "NETWORK PULSE",
    copy: [
      "Distributed nodes are pulsing through the private signal field.",
      "Latency is low and connection bands remain balanced.",
      "Network echoes are mapped through the translucent grid."
    ],
    blocks: [["SIGNAL", "97%"], ["NODES", "18"], ["LAT", "11"], ["MESH", "ON"]],
    fields: [["Signal", "97%"], ["Nodes", "18"], ["Latency", "11 MS"], ["Distributed Mesh", "Online"]],
    visual: "network"
  }
};

const miniMessages = [
  "Apartment A9 sync complete",
  "FreeCommerce node updated",
  "Energy layer stabilized",
  "Market pulse received",
  "Security channel verified",
  "Transport route recalculated",
  "Network pulse refreshed",
  "Data stream scan complete"
];

const panelAliases = {
  CORE: "Network Pulse",
  MARKET: "Market Flow",
  DATA: "Data Stream",
  "APARTMENT A9": "Apartment A9",
  FREECOMMERCE: "FreeCommerce",
  SECURITY: "Security Layer",
  "SECURITY LAYER": "Security Layer",
  "DATA STREAM": "Data Stream",
  ENERGY: "Energy System",
  "ENERGY SYSTEM": "Energy System",
  "MARKET FLOW": "Market Flow",
  TRANSPORT: "Transport Node",
  "TRANSPORT NODE": "Transport Node",
  NETWORK: "Network Pulse",
  "NETWORK PULSE": "Network Pulse"
};

const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ/?<>[]{}+=-_:;".split("");
const futureDevice = document.querySelector(".future-device");
const popup = document.getElementById("futurePopup");
const popupCard = popup?.querySelector(".popup-card");
const popupClose = document.getElementById("popupClose");
const popupTitle = document.getElementById("popupTitle");
const popupSubtitle = document.getElementById("popupSubtitle");
const popupFields = document.getElementById("popupFields");
const popupAction = document.getElementById("popupAction");
const popupVisualStage = document.getElementById("popupVisualStage");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const moduleBlockGrid = document.getElementById("moduleBlockGrid");
const technicalCopy = document.querySelector(".technical-copy");
const leftTitle = document.querySelector(".left-data-panel h1");
const leftKicker = document.querySelector(".left-data-panel header p");
const visualReadoutLabel = document.querySelector(".visual-readout p");
const visualReadoutTitle = document.querySelector(".visual-readout strong");
const topMiniPopups = document.getElementById("topMiniPopups");
const homeButton = document.getElementById("homeButton");

let activeModule = "";
let miniIndex = 0;
let miniTimer = 0;
let parallaxX = 0;
let parallaxY = 0;
let targetParallaxX = 0;
let targetParallaxY = 0;
let swipeStartX = 0;
let swipeStartY = 0;
let swipeCurrentX = 0;
let isDraggingPopup = false;
let activePopupPointerId = null;
let popupCloseFallback = 0;
let popupCloseAnimationHandler = null;

function normalizeModule(name) {
  const rawName = String(name || "").trim();
  const upperName = rawName.toUpperCase();
  const moduleMatch = Object.keys(moduleData).find((moduleName) => moduleName.toLowerCase() === rawName.toLowerCase());
  return panelAliases[rawName] || panelAliases[upperName] || moduleMatch || "FreeCommerce";
}

function getModule(name) {
  return moduleData[normalizeModule(name)] || moduleData.FreeCommerce;
}

function matrixText(element, finalText, duration = 760) {
  if (!element) return;

  const text = String(finalText);
  const start = performance.now();
  const length = text.length;

  function frame(now) {
    const progress = Math.min(1, (now - start) / duration);
    const reveal = Math.floor(progress * length);
    let output = "";

    for (let index = 0; index < length; index += 1) {
      if (index < reveal || text[index] === " ") {
        output += text[index];
      } else {
        output += matrixChars[Math.floor(Math.random() * matrixChars.length)];
      }
    }

    element.textContent = output;

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      element.textContent = text;
    }
  }

  requestAnimationFrame(frame);
}

function matrixValue(input, finalValue, duration = 720) {
  if (!input) return;
  const text = String(finalValue);
  const start = performance.now();

  function frame(now) {
    const progress = Math.min(1, (now - start) / duration);
    const reveal = Math.floor(progress * text.length);
    input.value = text.split("").map((char, index) => {
      if (index < reveal || char === " ") return char;
      return matrixChars[Math.floor(Math.random() * matrixChars.length)];
    }).join("");

    if (progress < 1) requestAnimationFrame(frame);
    else input.value = text;
  }

  requestAnimationFrame(frame);
}

function buildTaskList() {
  if (!taskList) return;

  taskList.innerHTML = homeTasks.map(([label, tag], index) => {
    const moduleName = modules[index] || modules[0];
    return `
    <article class="task-item" data-module="${moduleName}">
      <strong>${label}</strong>
      <span>${tag}</span>
    </article>
    `;
  }).join("");

  if (taskCount) taskCount.textContent = String(modules.length).padStart(2, "0");
}

function setActiveButtons(moduleName) {
  document.querySelectorAll("[data-panel]").forEach((button) => {
    button.classList.toggle("is-active", normalizeModule(button.dataset.panel) === moduleName);
  });

  document.querySelectorAll(".task-item").forEach((item) => {
    item.classList.toggle("is-hot", item.dataset.module === moduleName);
  });
}

function createBlocks(data) {
  if (!moduleBlockGrid) return;
  moduleBlockGrid.innerHTML = data.blocks.map(([label, value], index) => `
    <article class="module-block" style="--delay: ${index * 80}ms">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  moduleBlockGrid.querySelectorAll("span").forEach((el, index) => matrixText(el, data.blocks[index][0], 520));
  moduleBlockGrid.querySelectorAll("strong").forEach((el, index) => matrixText(el, data.blocks[index][1], 640));
}

function setCopy(lines) {
  if (!technicalCopy) return;
  technicalCopy.innerHTML = lines.map(() => "<p></p>").join("");
  technicalCopy.querySelectorAll("p").forEach((paragraph, index) => {
    matrixText(paragraph, lines[index], 900 + index * 35);
  });
}

function resetHome() {
  activeModule = "";
  futureDevice.classList.add("home-state");
  futureDevice.classList.remove("module-state");
  closePopup({ immediate: true });
  setActiveButtons("");
  if (leftKicker) matrixText(leftKicker, "NODE REPORT / A9", 640);
  if (leftTitle) matrixText(leftTitle, "FREECOMMERCE PROTOCOL", 780);
  setCopy(homeCopy);
  if (visualReadoutLabel) visualReadoutLabel.textContent = "";
  if (visualReadoutTitle) visualReadoutTitle.textContent = "";
  if (moduleBlockGrid) moduleBlockGrid.innerHTML = "";
}

function renderModuleScreen(moduleName) {
  const normalized = normalizeModule(moduleName);
  const data = getModule(normalized);
  activeModule = normalized;

  futureDevice.classList.remove("home-state");
  futureDevice.classList.add("module-state");
  setActiveButtons(normalized);
  if (leftKicker) matrixText(leftKicker, `${data.readout} / LIVE`, 640);
  if (leftTitle) matrixText(leftTitle, `${data.readout} PROTOCOL`, 780);
  setCopy(data.copy.concat([
    "Additional visual blocks are loaded only after interface selection.",
    "Matrix text transition confirms the active system layer."
  ]));
  if (visualReadoutLabel) matrixText(visualReadoutLabel, `${data.readout} / ACTIVE MODULE`, 640);
  if (visualReadoutTitle) matrixText(visualReadoutTitle, data.readout, 860);
  createBlocks(data);
}

function popupVisual(type) {
  const visuals = {
    trade: `
      <svg class="trade-graph" viewBox="0 0 260 150" aria-hidden="true">
        <polyline points="8,112 34,96 58,104 82,63 108,78 132,42 160,58 190,26 224,44 252,18"></polyline>
        <g class="graph-bars">
          <rect x="20" y="106" width="10" height="30"></rect><rect x="54" y="92" width="10" height="44"></rect>
          <rect x="88" y="70" width="10" height="66"></rect><rect x="122" y="82" width="10" height="54"></rect>
          <rect x="156" y="52" width="10" height="84"></rect><rect x="190" y="62" width="10" height="74"></rect>
          <rect x="224" y="38" width="10" height="98"></rect>
        </g>
      </svg>`,
    apartment: `
      <svg class="apartment-plan" viewBox="0 0 260 180" aria-hidden="true">
        <path d="M45 74 L82 38 L123 52 L148 84 L190 70 L212 126 L160 142 L122 132 L95 160 L62 130 Z"></path>
        <path d="M95 76 L132 76 L154 102 L132 128 L96 128 L74 102 Z"></path>
        <path d="M160 90 L232 112 L216 164 L148 140 Z"></path>
        <path d="M166 108 L218 124 M158 124 L210 142 M154 138 L202 156"></path>
        <text x="164" y="36">A9</text>
      </svg>`,
    stream: `<div class="code-stream">${Array.from({ length: 10 }, (_, i) => `<span style="--i:${i}">0x${(4417 + i * 37).toString(16)} / STREAM_PACKET_${i}</span>`).join("")}</div>`,
    energy: `<div class="energy-core"><span></span><span></span><span></span><strong>86%</strong></div>`,
    market: `<div class="route-map"><span></span><span></span><span></span><i></i><i></i><i></i><i></i></div>`,
    security: `<div class="bio-scan"><span></span><span></span><span></span><strong>PASS</strong></div>`,
    transport: `<div class="transport-map"><span></span><span></span><span></span><i></i><i></i><i></i></div>`,
    network: `<div class="network-nodes"><span></span><span></span><span></span><span></span><span></span><i></i><i></i><i></i></div>`
  };

  return visuals[type] || visuals.stream;
}

function renderPopup(moduleName) {
  const normalized = normalizeModule(moduleName);
  const data = getModule(normalized);

  popupTitle.textContent = "";
  popupSubtitle.textContent = "";
  popupFields.innerHTML = data.fields.map(([label], index) => `
    <div class="popup-field">
      <label for="popup-field-${index}">${label}</label>
      <input id="popup-field-${index}" value="" aria-label="${label}" readonly>
    </div>
  `).join("");
  popupAction.textContent = data.action;
  popupVisualStage.innerHTML = popupVisual(data.visual);

  matrixText(popupTitle, data.readout, 820);
  matrixText(popupSubtitle, data.subtitle, 700);
  popupFields.querySelectorAll("label").forEach((label, index) => matrixText(label, data.fields[index][0], 540));
  popupFields.querySelectorAll("input").forEach((input, index) => matrixValue(input, data.fields[index][1], 720));
}

function openPopup(moduleName) {
  window.clearTimeout(popupCloseFallback);
  renderPopup(moduleName);
  popup.classList.remove("is-closing", "is-dismissing", "is-dragging");
  popupCard?.style.removeProperty("--drag-x");
  popupCard?.style.removeProperty("--drag-opacity");
  popup.classList.add("is-open");
  popup.setAttribute("aria-hidden", "false");
}

function finishPopupClose() {
  window.clearTimeout(popupCloseFallback);
  if (popupCloseAnimationHandler) {
    popupCard?.removeEventListener("animationend", popupCloseAnimationHandler);
    popupCloseAnimationHandler = null;
  }
  isDraggingPopup = false;
  activePopupPointerId = null;
  popup.classList.remove("is-open", "is-closing", "is-dismissing", "is-dragging", "is-settling");
  popup.setAttribute("aria-hidden", "true");
  popupCard?.style.removeProperty("--drag-x");
  popupCard?.style.removeProperty("--drag-opacity");
}

function closePopup(options = {}) {
  const isVisible = popup.classList.contains("is-open");
  const isClosing = popup.classList.contains("is-closing") || popup.classList.contains("is-dismissing");

  if (!isVisible && !isClosing) return;

  if (options.immediate) {
    finishPopupClose();
    return;
  }

  window.clearTimeout(popupCloseFallback);
  isDraggingPopup = false;
  popup.classList.remove("is-dragging", "is-settling");
  popup.classList.add(options.direction === "right" ? "is-dismissing" : "is-closing");
  popup.setAttribute("aria-hidden", "true");

  if (popupCloseAnimationHandler) {
    popupCard?.removeEventListener("animationend", popupCloseAnimationHandler);
  }

  popupCloseAnimationHandler = (event) => {
    if (event.target !== popupCard) return;
    finishPopupClose();
  };

  popupCard?.addEventListener("animationend", popupCloseAnimationHandler);
  popupCloseFallback = window.setTimeout(finishPopupClose, 720);
}

function dismissPopupToRight() {
  closePopup({ direction: "right" });
}

function selectModule(moduleName) {
  const normalized = normalizeModule(moduleName);
  renderModuleScreen(normalized);
  openPopup(normalized);
}

function showMiniPopup(message) {
  if (!topMiniPopups) return;

  const note = document.createElement("article");
  note.className = "mini-popup";
  note.innerHTML = `<strong></strong><span></span>`;
  topMiniPopups.prepend(note);
  matrixText(note.querySelector("strong"), "A9 NOTICE", 420);
  matrixText(note.querySelector("span"), message, 680);

  while (topMiniPopups.children.length > 2) {
    topMiniPopups.lastElementChild.remove();
  }

  window.setTimeout(() => {
    note.classList.add("is-leaving");
    note.addEventListener("animationend", () => note.remove(), { once: true });
  }, 5200);
}

function scheduleMiniPopups() {
  window.clearTimeout(miniTimer);
  const delay = 3000 + Math.random() * 57000;
  miniTimer = window.setTimeout(() => {
    showMiniPopup(miniMessages[miniIndex % miniMessages.length]);
    miniIndex += 1;
    scheduleMiniPopups();
  }, delay);
}

function handlePointerMove(event) {
  if (!futureDevice || window.matchMedia("(pointer: coarse)").matches) return;
  const rect = futureDevice.getBoundingClientRect();
  targetParallaxX = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
  targetParallaxY = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
}

function animateParallax() {
  parallaxX += (targetParallaxX - parallaxX) * 0.08;
  parallaxY += (targetParallaxY - parallaxY) * 0.08;
  futureDevice?.style.setProperty("--parallax-x", `${parallaxX.toFixed(2)}px`);
  futureDevice?.style.setProperty("--parallax-y", `${parallaxY.toFixed(2)}px`);
  requestAnimationFrame(animateParallax);
}

function requestFullscreenOnce() {
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function startPopupDrag(event) {
  if (!popup.classList.contains("is-open") || popup.classList.contains("is-closing") || popup.classList.contains("is-dismissing")) return;
  isDraggingPopup = true;
  activePopupPointerId = event.pointerId;
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
  swipeCurrentX = 0;
  popup.classList.add("is-dragging");
  popupCard?.setPointerCapture?.(event.pointerId);
}

function movePopupDrag(event) {
  if (!isDraggingPopup || !popupCard || event.pointerId !== activePopupPointerId) return;
  const deltaX = Math.max(0, event.clientX - swipeStartX);
  const deltaY = Math.abs(event.clientY - swipeStartY);
  swipeCurrentX = deltaX;
  if (deltaX > 4 && deltaX > deltaY * 0.7) event.preventDefault();
  popupCard.style.setProperty("--drag-x", `${deltaX}px`);
  popupCard.style.setProperty("--drag-opacity", `${Math.max(0.18, 1 - deltaX / 360)}`);
}

function endPopupDrag(event) {
  if (!isDraggingPopup || event.pointerId !== activePopupPointerId) return;
  popupCard?.releasePointerCapture?.(event.pointerId);
  isDraggingPopup = false;
  activePopupPointerId = null;
  if (swipeCurrentX > 130) {
    dismissPopupToRight();
    return;
  }
  popup.classList.remove("is-dragging");
  popup.classList.add("is-settling");
  popupCard?.style.setProperty("--drag-x", "0px");
  popupCard?.style.setProperty("--drag-opacity", "1");
  window.setTimeout(() => {
    popup.classList.remove("is-settling");
    popupCard?.style.removeProperty("--drag-x");
    popupCard?.style.removeProperty("--drag-opacity");
  }, 260);
}

function bindEvents() {
  document.addEventListener("pointerdown", requestFullscreenOnce);

  document.querySelectorAll("[data-panel]").forEach((button) => {
    button.addEventListener("click", () => selectModule(button.dataset.panel));
  });

  homeButton?.addEventListener("click", resetHome);

  taskList?.addEventListener("click", (event) => {
    const item = event.target.closest(".task-item");
    if (item) selectModule(item.dataset.module);
  });

  popupClose.addEventListener("click", closePopup);
  popup.addEventListener("click", (event) => {
    if (event.target === popup) closePopup();
  });
  popupAction.addEventListener("click", closePopup);

  popupCard?.addEventListener("pointerdown", startPopupDrag);
  popupCard?.addEventListener("pointermove", movePopupDrag);
  popupCard?.addEventListener("pointerup", endPopupDrag);
  popupCard?.addEventListener("pointercancel", endPopupDrag);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePopup();
  });

  futureDevice?.addEventListener("pointermove", handlePointerMove);
  futureDevice?.addEventListener("pointerleave", () => {
    targetParallaxX = 0;
    targetParallaxY = 0;
  });
}

function openInitialPanelFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const requestedPanel = params.get("panel") || decodeURIComponent(window.location.hash.replace("#", ""));
  if (requestedPanel) selectModule(requestedPanel);
}

buildTaskList();
bindEvents();
resetHome();
openInitialPanelFromUrl();
animateParallax();
scheduleMiniPopups();
