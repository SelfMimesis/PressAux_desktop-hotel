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

const moduleData = {
  "FreeCommerce": {
    alias: "FREECOMMERCE",
    subtitle: "Commerce exchange node",
    readout: "FREECOMMERCE",
    copy: [
      "Vendor gate rerouted through domestic exchange.",
      "Soft goods queue accepted by Apartment A9 mesh.",
      "Commerce packet bridge is ready for local market flow."
    ],
    blocks: [
      ["VENDOR", "ONLINE"],
      ["TOKEN", "VALID"],
      ["QUEUE", "SOFT"],
      ["INDEX", "74"]
    ],
    fields: [
      ["Node", "FreeCommerce"],
      ["Vendor Gate", "Domestic mesh"],
      ["Packet Queue", "Soft goods"],
      ["Token State", "Verified"]
    ]
  },
  "Apartment A9": {
    alias: "APARTMENT A9",
    subtitle: "Private habitat channel",
    readout: "APARTMENT A9",
    copy: [
      "Habitat layer synchronized with resident channel.",
      "Interior glass bus keeps a low-noise comfort pulse.",
      "Access vectors remain private to Apartment A9."
    ],
    blocks: [
      ["HABITAT", "A9"],
      ["COMFORT", "21.8"],
      ["ACCESS", "PRIVATE"],
      ["AIR", "88"]
    ],
    fields: [
      ["Habitat", "Apartment A9"],
      ["Resident Link", "Online"],
      ["Comfort Layer", "21.8 C"],
      ["Access Mode", "Private"]
    ]
  },
  "Data Stream": {
    alias: "DATA STREAM",
    subtitle: "Vertical glass bus",
    readout: "DATA STREAM",
    copy: [
      "Vertical columns are indexing transparent data bands.",
      "RX and TX pulses are balanced across the center bus.",
      "Stream fragments are filtered before task dispatch."
    ],
    blocks: [
      ["RX", "92"],
      ["TX", "86"],
      ["FILTER", "ON"],
      ["DRIFT", "00"]
    ],
    fields: [
      ["Stream", "Column relay"],
      ["RX", "92"],
      ["TX", "86"],
      ["Noise Filter", "Enabled"]
    ]
  },
  "Energy System": {
    alias: "ENERGY",
    subtitle: "Auxiliary power cell",
    readout: "ENERGY SYSTEM",
    copy: [
      "Auxiliary cells are stabilized in the green band.",
      "Thermal draw remains below alert threshold.",
      "Signal layer receives a steady power handshake."
    ],
    blocks: [
      ["ENERGY", "86%"],
      ["LOAD", "12.4"],
      ["CELL", "STABLE"],
      ["HEAT", "COOL"]
    ],
    fields: [
      ["Energy", "86%"],
      ["Aux Load", "12.4 KW"],
      ["Thermal", "Cool"],
      ["Cell State", "Stable"]
    ]
  },
  "Market Flow": {
    alias: "MARKET FLOW",
    subtitle: "Live market pulse",
    readout: "MARKET FLOW",
    copy: [
      "Market pulse received from FreeCommerce exchange.",
      "Offer count is open and prepared for local routing.",
      "Bid and ask values are updating through the right panel."
    ],
    blocks: [
      ["OPEN", "YES"],
      ["ASK", "14"],
      ["BID", "12"],
      ["FLOW", "GREEN"]
    ],
    fields: [
      ["Market", "Open"],
      ["Offers", "14 active"],
      ["Ask", "14"],
      ["Bid", "12"]
    ]
  },
  "Security Layer": {
    alias: "SECURITY",
    subtitle: "Encrypted perimeter",
    readout: "SECURITY LAYER",
    copy: [
      "Perimeter channel verified by encrypted audit loop.",
      "Threat map remains clear across all visible gates.",
      "Apartment A9 lock state is armed and sealed."
    ],
    blocks: [
      ["LOCK", "ARMED"],
      ["THREAT", "CLEAR"],
      ["AUDIT", "LOOP"],
      ["CAM", "08"]
    ],
    fields: [
      ["Perimeter", "Closed"],
      ["Threat Map", "Clear"],
      ["Audit Trail", "Looping"],
      ["Lock", "Armed"]
    ]
  },
  "Transport Node": {
    alias: "TRANSPORT",
    subtitle: "Route recalculation",
    readout: "TRANSPORT NODE",
    copy: [
      "Transport route recalculated for vertical dock three.",
      "Lift corridor is reserved for market ring transfer.",
      "Route nodes are waiting for the next resident signal."
    ],
    blocks: [
      ["DOCK", "03"],
      ["ETA", "01:20"],
      ["LANE", "READY"],
      ["ROUTE", "MKT"]
    ],
    fields: [
      ["Dock", "Vertical three"],
      ["ETA", "01:20"],
      ["Lane", "03"],
      ["Route", "Market ring"]
    ]
  },
  "Network Pulse": {
    alias: "NETWORK",
    subtitle: "Private signal field",
    readout: "NETWORK PULSE",
    copy: [
      "Private channel is online with low signal latency.",
      "Pulse packets are balanced between center layers.",
      "Network rim rotation is synced to glass bus phase."
    ],
    blocks: [
      ["SIGNAL", "97%"],
      ["LAT", "11"],
      ["VPN", "ON"],
      ["PING", "LOW"]
    ],
    fields: [
      ["Network", "Online"],
      ["Latency", "11 MS"],
      ["Signal", "97%"],
      ["Channel", "Private"]
    ]
  }
};

const automaticPopupMessages = [
  "Apartment A9 sync complete",
  "FreeCommerce node updated",
  "Energy layer stabilized",
  "Market pulse received",
  "Security channel verified",
  "Transport route recalculated"
];

const panelAliases = {
  CORE: "Network Pulse",
  MARKET: "Market Flow",
  DATA: "Data Stream",
  "APARTMENT A9": "Apartment A9",
  FREECOMMERCE: "FreeCommerce",
  SECURITY: "Security Layer",
  "DATA STREAM": "Data Stream",
  "ENERGY SYSTEM": "Energy System",
  "MARKET FLOW": "Market Flow"
};

const futureDevice = document.querySelector(".future-device");
const popup = document.getElementById("futurePopup");
const popupCard = popup?.querySelector(".popup-card");
const popupClose = document.getElementById("popupClose");
const popupTitle = document.getElementById("popupTitle");
const popupSubtitle = document.getElementById("popupSubtitle");
const popupFields = document.getElementById("popupFields");
const popupAction = document.getElementById("popupAction");
const notificationStack = document.getElementById("notificationStack");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const moduleBlockGrid = document.getElementById("moduleBlockGrid");
const technicalCopy = document.querySelector(".technical-copy");
const leftTitle = document.querySelector(".left-data-panel h1");
const visualReadoutLabel = document.querySelector(".visual-readout p");
const visualReadoutTitle = document.querySelector(".visual-readout strong");

let notificationIndex = 0;
let activeModule = "FreeCommerce";
let parallaxX = 0;
let parallaxY = 0;
let targetParallaxX = 0;
let targetParallaxY = 0;
let popupTimer = 0;
let swipeStartX = 0;
let swipeStartY = 0;
let swipeCurrentX = 0;
let isDraggingPopup = false;

function normalizeModule(name) {
  const rawName = String(name || "").trim();
  const upperName = rawName.toUpperCase();
  const moduleMatch = modules.find((moduleName) => moduleName.toLowerCase() === rawName.toLowerCase());

  return panelAliases[rawName] || panelAliases[upperName] || moduleMatch || "FreeCommerce";
}

function getModule(name) {
  return moduleData[normalizeModule(name)] || moduleData.FreeCommerce;
}

function buildTaskList() {
  if (!taskList) return;

  taskList.innerHTML = modules.map((moduleName, index) => `
    <article class="task-item${index === 0 ? " is-hot" : ""}" data-module="${moduleName}">
      <strong>${moduleName}</strong>
      <span>INFO</span>
    </article>
  `).join("");

  if (taskCount) {
    taskCount.textContent = String(modules.length).padStart(2, "0");
  }
}

function setActiveButtons(moduleName) {
  document.querySelectorAll("[data-panel]").forEach((button) => {
    const buttonModule = normalizeModule(button.dataset.panel);
    button.classList.toggle("is-active", buttonModule === moduleName);
  });

  document.querySelectorAll(".task-item").forEach((item) => {
    item.classList.toggle("is-hot", item.dataset.module === moduleName);
  });
}

function renderModuleBlocks(moduleName) {
  const data = getModule(moduleName);
  if (!moduleBlockGrid) return;

  moduleBlockGrid.innerHTML = data.blocks.map(([label, value], index) => `
    <article class="module-block" style="--delay: ${index * 70}ms">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function renderModuleText(moduleName) {
  const data = getModule(moduleName);

  if (leftTitle) {
    leftTitle.textContent = `${data.alias} PROTOCOL`;
  }

  if (technicalCopy) {
    technicalCopy.innerHTML = data.copy.concat([
      "Glass HUD layers are recalibrating around the active module.",
      "Dynamic blocks are staged in the central viewport for operator review.",
      "The rotating rim graphic simulates mechanical phase alignment."
    ]).map((line) => `<p>${line}</p>`).join("");
  }

  if (visualReadoutLabel) {
    visualReadoutLabel.textContent = `${data.alias} / ACTIVE LAYER`;
  }

  if (visualReadoutTitle) {
    visualReadoutTitle.textContent = data.readout;
  }
}

function selectModule(moduleName) {
  activeModule = normalizeModule(moduleName);
  setActiveButtons(activeModule);
  renderModuleText(activeModule);
  renderModuleBlocks(activeModule);
}

function renderPopup(moduleName, message) {
  const data = getModule(moduleName);

  popupTitle.textContent = message || data.readout;
  popupSubtitle.textContent = data.subtitle;
  popupFields.innerHTML = data.fields.map(([label, value], index) => `
    <div class="popup-field">
      <label for="popup-field-${index}">${label}</label>
      <input id="popup-field-${index}" value="${value}" aria-label="${label}" readonly>
    </div>
  `).join("");
}

function openPopup(moduleName, message) {
  const normalizedModule = normalizeModule(moduleName);
  renderPopup(normalizedModule, message);
  popup.classList.remove("is-dismissing");
  popup.classList.add("is-open");
  popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
  popup.classList.remove("is-open", "is-dismissing", "is-dragging");
  popup.setAttribute("aria-hidden", "true");

  if (popupCard) {
    popupCard.style.removeProperty("--drag-x");
    popupCard.style.removeProperty("--drag-opacity");
  }
}

function dismissPopupToRight() {
  popup.classList.remove("is-dragging");
  popup.classList.add("is-dismissing");
  popupCard?.style.removeProperty("--drag-x");
  popupCard?.style.removeProperty("--drag-opacity");
  window.setTimeout(closePopup, 420);
}

function scheduleRandomPopup() {
  window.clearTimeout(popupTimer);
  const delay = 6500 + Math.random() * 6500;

  popupTimer = window.setTimeout(() => {
    if (!popup.classList.contains("is-open")) {
      const moduleName = modules[Math.floor(Math.random() * modules.length)];
      const message = automaticPopupMessages[notificationIndex % automaticPopupMessages.length];
      openPopup(moduleName, message);
      notificationIndex += 1;
    }
    scheduleRandomPopup();
  }, delay);
}

function showNotification(message) {
  const toast = document.createElement("article");
  toast.className = "toast";
  toast.innerHTML = `<strong>SYSTEM NOTICE</strong><span>${message}</span>`;

  notificationStack.prepend(toast);

  while (notificationStack.children.length > 4) {
    notificationStack.lastElementChild.remove();
  }

  window.setTimeout(() => {
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  }, 4200);
}

function loopNotifications() {
  showNotification(automaticPopupMessages[notificationIndex % automaticPopupMessages.length]);
  notificationIndex += 1;
}

function handlePointerMove(event) {
  if (!futureDevice || window.matchMedia("(pointer: coarse)").matches) return;

  const rect = futureDevice.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  targetParallaxX = x * 24;
  targetParallaxY = y * 18;
}

function animateParallax() {
  parallaxX += (targetParallaxX - parallaxX) * 0.08;
  parallaxY += (targetParallaxY - parallaxY) * 0.08;

  if (futureDevice) {
    futureDevice.style.setProperty("--parallax-x", `${parallaxX.toFixed(2)}px`);
    futureDevice.style.setProperty("--parallax-y", `${parallaxY.toFixed(2)}px`);
  }

  requestAnimationFrame(animateParallax);
}

function requestFullscreenOnce() {
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function startPopupDrag(event) {
  if (!popup.classList.contains("is-open")) return;

  isDraggingPopup = true;
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
  swipeCurrentX = 0;
  popup.classList.add("is-dragging");
  popupCard?.setPointerCapture?.(event.pointerId);
}

function movePopupDrag(event) {
  if (!isDraggingPopup || !popupCard) return;

  const deltaX = Math.max(0, event.clientX - swipeStartX);
  const deltaY = Math.abs(event.clientY - swipeStartY);
  swipeCurrentX = deltaX;

  if (deltaX > 4 && deltaX > deltaY * 0.7) {
    event.preventDefault();
  }

  popupCard.style.setProperty("--drag-x", `${deltaX}px`);
  popupCard.style.setProperty("--drag-opacity", `${Math.max(0.18, 1 - deltaX / 360)}`);
}

function endPopupDrag(event) {
  if (!isDraggingPopup) return;

  popupCard?.releasePointerCapture?.(event.pointerId);
  isDraggingPopup = false;

  if (swipeCurrentX > 130) {
    dismissPopupToRight();
    return;
  }

  popup.classList.remove("is-dragging");
  popupCard?.style.removeProperty("--drag-x");
  popupCard?.style.removeProperty("--drag-opacity");
}

function bindEvents() {
  document.addEventListener("pointerdown", requestFullscreenOnce);

  document.querySelectorAll("[data-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      selectModule(button.dataset.panel);
    });
  });

  taskList?.addEventListener("click", (event) => {
    const item = event.target.closest(".task-item");
    if (item) {
      selectModule(item.dataset.module);
    }
  });

  popupClose.addEventListener("click", closePopup);

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup();
    }
  });

  popupAction.addEventListener("click", () => {
    closePopup();
  });

  popupCard?.addEventListener("pointerdown", startPopupDrag);
  popupCard?.addEventListener("pointermove", movePopupDrag);
  popupCard?.addEventListener("pointerup", endPopupDrag);
  popupCard?.addEventListener("pointercancel", endPopupDrag);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
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

  if (requestedPanel) {
    selectModule(requestedPanel);
  }
}

buildTaskList();
bindEvents();
selectModule(activeModule);
loopNotifications();
openInitialPanelFromUrl();
animateParallax();
scheduleRandomPopup();

window.setInterval(loopNotifications, 5600);
