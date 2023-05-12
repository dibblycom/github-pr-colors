/**
 * Applies the basic styles to the element
 *
 * @param {Element} elem The element to apply the base styles to
 */
function applyBaseStyle(elem) {
  elem.style.padding = "2px 5px";
  elem.style.borderRadius = "5px";
}

/**
 * Sets the styles for PR statuses
 */
function setStyles() {
  for (const elem of document.querySelectorAll("a.Link--muted")) {
    if (elem.textContent.includes("Review required")) {
      applyBaseStyle(elem);
      elem.style.backgroundColor = "#ffe200ad";
      continue;
    }
    if (elem.textContent.includes("Changes requested")) {
      applyBaseStyle(elem);
      elem.style.backgroundColor = "#ff70707a";
      continue;
    }
    if (elem.textContent.includes("Approved")) {
      applyBaseStyle(elem);
      elem.style.backgroundColor = "#76d6307a";
      continue;
    }
    if (elem.textContent.includes("Draft")) {
      applyBaseStyle(elem);
      elem.style.backgroundColor = "#ededed";
      continue;
    }
  }
}

const selector = "a.Link--muted.tooltipped.tooltipped-s";

// Initial run
if (document.querySelector(selector)) {
  setStyles();
}

// Create an observer
const observer = new MutationObserver((mutations) => {
  if (document.querySelector(selector)) {
    setStyles();
  }
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
