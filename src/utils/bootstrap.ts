export const loadBootstrap = async (direction: "ltr" | "rtl") => {
  const css =
    direction === "rtl"
      ? (await import("bootstrap/dist/css/bootstrap.rtl.min.css?inline"))
          .default
      : (await import("bootstrap/dist/css/bootstrap.min.css?inline")).default;

  const oldStyle = document.getElementById("bootstrap-css");

  const newStyle = document.createElement("style");
  newStyle.textContent = css;
  newStyle.id = "bootstrap-css";

  document.head.appendChild(newStyle);

  requestAnimationFrame(() => {
    if (oldStyle) {
      oldStyle.remove();
    }
  });
};
