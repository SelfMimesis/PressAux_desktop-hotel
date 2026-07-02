const modules = [
  "Lobby Check-in",
  "Suites",
  "Concierge",
  "Lounge",
  "Housekeeping",
  "Access Security",
  "Transport",
  "Facility Audit"
];

const homeTasks = [
  ["PressAux arrival lanes open", "PX"],
  ["TranrollinHyfa suites synchronized", "THY"],
  ["Creative facility requests circulating", "LAB"],
  ["Observation lounge pulse active", "LNG"],
  ["Crew service carts routed", "CRW"],
  ["PressAux access verified", "SEC"],
  ["Sky-dock transfer recalculated", "SKY"],
  ["Facility audit channel warm", "AUD"]
];

const homeCopy = [
  "The future hotel of TranrollinHyfa keeps PressAux reception, suite telemetry and team routing connected through a private operations layer.",
  "The desktop receives arrival signals, room status, creative facility requests and sky-dock timing in one glass bus.",
  "Front desk lanes are online. PressAux guest flow, encrypted passes and service queue updates are running in quiet scan mode.",
  "Suites report balanced climate, locked doors, production-ready workspaces and nominal corridor pressure.",
  "Central columns synchronize with the lobby desk, team roster grid and animated movement tabs.",
  "Crew service maintains a rolling route with linen stock, technical amenities and studio-support checks below threshold.",
  "Concierge channels listen for dining, luggage, equipment room access and observation lounge requests across the team mesh.",
  "Security confirms encrypted PressAux access and keeps badge verification in passive observation mode.",
  "Transport is prepared to calculate sky-bay timing, autonomous pickup windows and private transfer availability.",
  "Facility audit stays warm in the background, ready to reconcile occupancy, folios and operational deltas.",
  "All TranrollinHyfa hotel modules are available from the moving upper navigation and the lower operations dock.",
  "Select a module to reveal its animated overlay, PressAux data blocks and capsule popup without breaking the lobby view.",
  "The home state keeps the hotel alive with moving marks, scan columns and a live team service queue.",
  "Returning home clears temporary drawings and restores the PressAux Hotel TranrollinHyfa desktop."
];

const moduleData = {
  "Lobby Check-in": {
    action: "OPEN ARRIVALS",
    subtitle: "PressAux arrival / TranrollinHyfa lobby",
    readout: "PRESSAUX ARRIVAL",
    copy: [
      "PressAux arrival lanes reroute through the illuminated TranrollinHyfa lobby desk.",
      "Reservation pulses show team members, encrypted passes and suite release pressure.",
      "Front desk nodes validate identity, folio status and modern facility assignment."
    ],
    blocks: [["TEAM", "18"], ["PASSES", "LIVE"], ["LANES", "04"], ["FLOW", "94"]],
    fields: [["PressAux Arrivals", "18 members"], ["Access Pass Flow", "Live"], ["Desk Lanes", "04 open"], ["Hyfa Lobby", "Ready"]],
    visual: "trade"
  },
  "Suites": {
    action: "SYNC SUITES",
    subtitle: "Team suites / climate / work pods",
    readout: "PRESSAUX SUITES",
    copy: [
      "PressAux suite plans are staged in glass-outline mode.",
      "Climate, access, minibar and work-pod readiness are synchronized.",
      "Room maps are adapted into the TranrollinHyfa hotel palette."
    ],
    blocks: [["OPEN", "27"], ["TEAM", "73%"], ["READY", "14"], ["PODS", "03"]],
    fields: [["Open Suites", "27"], ["PressAux Occupancy", "73%"], ["Arrival Ready", "14 rooms"], ["Work Pods", "03"]],
    visual: "apartment"
  },
  "Concierge": {
    action: "ROUTE REQUESTS",
    subtitle: "Dining / equipment / team care",
    readout: "TEAM CONCIERGE",
    copy: [
      "Concierge requests cascade through the PressAux service buffer.",
      "Dining, luggage, equipment access and late checkout paths pulse across the team mesh.",
      "Column layers react to request density and TranrollinHyfa route priority."
    ],
    blocks: [["DINING", "06"], ["GEAR", "04"], ["TEAM", "02"], ["CARE", "ON"]],
    fields: [["Dining Requests", "06"], ["Equipment Calls", "04"], ["Team Care", "02 active"], ["PressAux Care", "Online"]],
    visual: "network"
  },
  "Lounge": {
    action: "OPEN SERVICE",
    subtitle: "Observation lounge / ambient flow",
    readout: "PRESSAUX LOUNGE",
    copy: [
      "Observation lounge service rotates between bar, table and team comfort layers.",
      "Ambient load remains stable while the PressAux service cadence is balanced.",
      "Auxiliary glow is locked to the cool cyan TranrollinHyfa hospitality band."
    ],
    blocks: [["TABLES", "11"], ["BAR", "LIVE"], ["MOOD", "COOL"], ["CREW", "64"]],
    fields: [["Open Tables", "11"], ["Bar Status", "Live"], ["Ambient Mood", "Cool"], ["Team Load", "64%"]],
    visual: "energy"
  },
  "Housekeeping": {
    action: "DISPATCH CARTS",
    subtitle: "Suite turns / amenities / crew support",
    readout: "CREW SERVICE",
    copy: [
      "PressAux suite-turn paths are drawn over the service routing layer.",
      "Linen, amenities and equipment-support checks fluctuate in controlled pulses.",
      "Crew service carts are ready for active dispatch across TranrollinHyfa."
    ],
    blocks: [["TURNS", "09"], ["LINEN", "72"], ["CARTS", "05"], ["GEAR", "+3"]],
    fields: [["Suite Turns", "09"], ["Linen Stock", "72%"], ["Active Carts", "05"], ["Support Delta", "+3"]],
    visual: "market"
  },
  "Access Security": {
    action: "VERIFY ACCESS",
    subtitle: "PressAux passes / elevators / perimeter",
    readout: "PRESSAUX SECURITY",
    copy: [
      "Authentication rings verify PressAux passes and staff badges.",
      "Encrypted elevator channels are sealed across the TranrollinHyfa perimeter.",
      "Security confirms a clean pass through the modern lobby gate."
    ],
    blocks: [["PASSES", "PASS"], ["LIFTS", "ON"], ["BADGE", "MATCH"], ["RISK", "00"]],
    fields: [["PressAux Passes", "Passed"], ["Elevators", "Active"], ["Staff Badge", "Match"], ["Risk", "00"]],
    visual: "security"
  },
  "Transport": {
    action: "CALCULATE ROUTE",
    subtitle: "Sky-dock / routes / ETA",
    readout: "SKY TRANSPORT",
    copy: [
      "Sky-dock route lines recalculate across the TranrollinHyfa hotel transport node.",
      "Vehicle traces move through arrivals, luggage and private team corridors.",
      "Estimated arrival is refreshed in the right PressAux service queue."
    ],
    blocks: [["BAY", "03"], ["SKY", "04"], ["ETA", "01:20"], ["DOCK", "READY"]],
    fields: [["Sky Bay", "Dock 03"], ["Vehicles", "04"], ["ETA", "01:20"], ["Dock State", "Ready"]],
    visual: "transport"
  },
  "Facility Audit": {
    action: "RECONCILE",
    subtitle: "Team occupancy / folios / facility audit",
    readout: "FACILITY AUDIT",
    copy: [
      "Distributed PressAux folio nodes pulse through the private audit field.",
      "Facility deltas are low and team occupancy bands remain balanced.",
      "TranrollinHyfa night echoes are mapped through the translucent hotel grid."
    ],
    blocks: [["TEAM", "73%"], ["FOLIO", "18"], ["DELTA", "02"], ["MESH", "ON"]],
    fields: [["Team Occupancy", "73%"], ["Open Folios", "18"], ["Delta", "02"], ["Audit Mesh", "Online"]],
    visual: "stream"
  }
};

const miniMessages = [
  "PressAux team arrival confirmed in TranrollinHyfa",
  "Modern suite wing synchronized for PressAux",
  "Creative facility request routed to concierge",
  "Observation lounge stabilized for team briefing",
  "Crew service recalculated across hotel levels",
  "PressAux access channel verified",
  "Sky-dock transfer refreshed for the team",
  "Facility audit scan complete in TranrollinHyfa",
  "Private studio corridor unlocked for PressAux",
  "Hospitality mesh adapting to team movement"
];

const panelAliases = {
  CORE: "Facility Audit",
  CHECKIN: "Lobby Check-in",
  "CHECK-IN": "Lobby Check-in",
  "LOBBY CHECK-IN": "Lobby Check-in",
  LOBBY: "Lobby Check-in",
  SUITES: "Suites",
  ROOMS: "Suites",
  CONCIERGE: "Concierge",
  LOUNGE: "Lounge",
  HOUSEKEEPING: "Housekeeping",
  "ROOM SERVICE": "Housekeeping",
  SECURITY: "Access Security",
  "ACCESS SECURITY": "Access Security",
  TRANSPORT: "Transport",
  "NIGHT AUDIT": "Facility Audit",
  "FACILITY AUDIT": "Facility Audit",
  AUDIT: "Facility Audit"
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
  return panelAliases[rawName] || panelAliases[upperName] || moduleMatch || "Lobby Check-in";
}

function getModule(name) {
  return moduleData[normalizeModule(name)] || moduleData["Lobby Check-in"];
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
  if (leftKicker) matrixText(leftKicker, "TRANROLLINHYFA / TEAM ARRIVAL", 640);
  if (leftTitle) matrixText(leftTitle, "PRESSAUX FUTURE HOTEL", 780);
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
    "Additional PressAux facility blocks are loaded only after interface selection.",
    "Matrix text transition confirms the active TranrollinHyfa hospitality layer."
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
        <text x="146" y="36">PX</text>
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

function refreshMiniPopupLayer() {
  const hasVisibleNotice = Boolean(topMiniPopups?.querySelector(".mini-popup"));
  topMiniPopups?.classList.toggle("is-visible", hasVisibleNotice);
  futureDevice?.classList.toggle("has-mini-popup", hasVisibleNotice);
}

function showMiniPopup(message) {
  if (!topMiniPopups) return;

  topMiniPopups.querySelectorAll(".mini-popup").forEach((popupItem) => popupItem.remove());

  const note = document.createElement("article");
  note.className = "mini-popup";
  note.innerHTML = `
    <img class="mini-popup-logo" src="assets/hotel/hotel-logo-primary.png" alt="" aria-hidden="true">
    <div class="mini-popup-copy">
      <strong></strong>
      <span></span>
    </div>
  `;
  topMiniPopups.prepend(note);
  refreshMiniPopupLayer();
  matrixText(note.querySelector("strong"), "PRESSAUX / TRANROLLINHYFA", 420);
  matrixText(note.querySelector("span"), message, 680);

  window.setTimeout(() => {
    note.classList.add("is-leaving");
    note.addEventListener("animationend", () => {
      note.remove();
      refreshMiniPopupLayer();
    }, { once: true });
  }, 5200);
}

function scheduleMiniPopups(isInitial = false) {
  window.clearTimeout(miniTimer);
  const delay = isInitial ? 900 : 1600 + Math.random() * 5200;
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
scheduleMiniPopups(true);
