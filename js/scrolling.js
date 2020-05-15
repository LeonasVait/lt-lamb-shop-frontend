const container = document.getElementsByClassName("container")[0];
const sections = htmlCollectionToArray(container.children);

function htmlCollectionToArray(collection) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(collection.item(i));
  }
  return result;
}

function updateOpacity(element) {
  const height = window.innerHeight;
  const { top, bottom } = element.getBoundingClientRect();

  if (top > -height && top < 0) {
    element.style.opacity = (1 - Math.abs(top / height)) ** 0.5;
  }

  if (bottom > height && bottom < height * 2) {
    element.style.opacity = (2 - Math.abs(bottom / height)) ** 0.5;
  }
}

container.addEventListener(
  "scroll",
  () => {
    sections.forEach(section => {
      updateOpacity(section);
    });
  },
  16
);
