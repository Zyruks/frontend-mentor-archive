function featureAnimationMobile(
  firstPosition = undefined,
  secondPosition = undefined
) {
  const featureControlCustomProp = document.querySelector(".feature-controls");

  if (
    (featureControls[0].getAttribute("data-state") === "active" &&
      featureControls[1].getAttribute("data-state") === "willBeActive") ||
    featureControls[2].getAttribute("data-state") === "willBeActive"
  ) {
    firstPosition = "200%";
    secondPosition = "-200%";
  } else {
    firstPosition = "-200%";
    secondPosition = "200% ";
  }

  featureControlCustomProp.style.setProperty(
    "--active-position-x",
    firstPosition
  );

  setTimeout(() => {
    featureControlCustomProp.style.setProperty("--opacity", "0");
    featureControlCustomProp.style.setProperty(
      "--active-position-x",
      secondPosition
    );
  }, 150);

  setTimeout(() => {
    featureControlCustomProp.style.setProperty("--opacity", "1");
  }, 350);

  setTimeout(() => {
    featureControlCustomProp.style.setProperty("--active-position-x", "0");
    featureControlCustomProp.style.setProperty("--active-position-y", "0");
  }, 375);
}

function featureAnimationDesktop() {
  const featureControlCustomProp = document.querySelector(".feature-controls");
  if (
    (featureControls[0].getAttribute("data-state") === "active" &&
      featureControls[1].getAttribute("data-state") === "willBeActive") ||
    (featureControls[1].getAttribute("data-state") === "active" &&
      featureControls[2].getAttribute("data-state") === "willBeActive")
  ) {
    featureControlCustomProp.style.setProperty("--active-position-x", "200%");
  } else if (
    (featureControls[1].getAttribute("data-state") === "active" &&
      featureControls[0].getAttribute("data-state") === "willBeActive") ||
    (featureControls[2].getAttribute("data-state") === "active" &&
      featureControls[1].getAttribute("data-state") === "willBeActive")
  ) {
    featureControlCustomProp.style.setProperty("--active-position-x", "-200%");
  } else if (
    featureControls[2].getAttribute("data-state") === "active" &&
    featureControls[0].getAttribute("data-state") === "willBeActive"
  ) {
    featureControlCustomProp.style.setProperty("--active-position-x", "-400%");
  } else if (
    featureControls[0].getAttribute("data-state") === "active" &&
    featureControls[2].getAttribute("data-state") === "willBeActive"
  ) {
    featureControlCustomProp.style.setProperty("--active-position-x", "400%");
  }

  setTimeout(() => {
    featureControlCustomProp.style.setProperty("--active-position-x", "0");
  }, 350);
}
