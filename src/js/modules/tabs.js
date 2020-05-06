const tabs = (
  headerTabsSelector,
  tabsSelector,
  contentTabSelector,
  activeClassTab,
) => {
  const headerTabs = document.querySelector(headerTabsSelector),
    tabs = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentTabSelector);
  function hidenTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClassTab);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = "block";
    tabs[i].classList.add(activeClassTab);
  }

  hidenTabContent();
  showTabContent();

  headerTabs.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabsSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, index) => {
        if (item == target || item == target.parentNode) {
          hidenTabContent();
          showTabContent(index);
        }
      });
    }
  });
};
export default tabs;
