import("./bootstrap");
import("../public/index.html");
import("./styles/index.css");

if (module.hot) {
  module.hot.accept("./bootstrap", () => {
    console.clear();
  });
}
