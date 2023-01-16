const Boxlayout = (() => {
    const wrapper = document.body,
      sections = [...document.querySelectorAll(".section")],
      expandedClass = "is-expanded",
      hasExpandedClass = "has-expanded-item";
  
    const initEvents = () => {
      sections.forEach((element) => {
        element.addEventListener("click", () => openSection(element));
      });
    };
  
    const openSection = (element) => {
      if (!element.classList.contains(expandedClass)) {
        element.classList.add(expandedClass);
        wrapper.classList.add(hasExpandedClass);
      }
    };
  
    const closeSection = (element) => {
      if (element.classList.contains(expandedClass)) {
        element.classList.remove(expandedClass);
        wrapper.classList.remove(hasExpandedClass);
      }
    };
  
    return { init: initEvents };
  })();
  
  Boxlayout.init();
  