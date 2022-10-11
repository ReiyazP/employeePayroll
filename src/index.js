import("./bootstrap");
import("../public/index.html");

if (module.hot) {
  module.hot.accept("./bootstrap", () => {
    console.clear();
  });
}
