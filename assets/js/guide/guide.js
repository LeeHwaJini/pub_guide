if (typeof GUIDE === "undefined") GUIDE = {};

(function (namespace) {
  const htmlBtn = document.querySelectorAll(".html-btn");
  const cssBtn = document.querySelectorAll(".css-btn");

  /**
   * @param {"선택 할 button class명"} btnClass
   * @param {"선택해서 보여질 영역 id명"} codeId
   */
  namespace.toggleFooter = (btnClass, codeId) => {
    const codeBtn = document.querySelectorAll(btnClass);
    codeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const exampleContainer = btn.parentElement.parentElement.parentElement;
        const codeElement = exampleContainer.querySelector(codeId);

        const otherCodeElementId =
          codeId === "#htmlCode" ? "#cssCode" : "#htmlCode";
        const otherCodeElement =
          exampleContainer.querySelector(otherCodeElementId);

        const otherBtnClass =
          btnClass === ".html-btn" ? ".css-btn" : ".html-btn";
        const otherBtn = exampleContainer.querySelector(otherBtnClass);

        if (!otherCodeElement.classList.contains("hidden")) {
          otherCodeElement.classList.add("hidden");
        }
        if (otherBtn.classList.contains("active")) {
          otherBtn.classList.remove("active");
        }

        if (codeElement) {
          codeElement.classList.remove("hidden");
          btn.classList.add("active");
        }
      });
    });
  };
})(GUIDE);

GUIDE.toggleFooter(".html-btn", "#htmlCode");
GUIDE.toggleFooter(".css-btn", "#cssCode");
