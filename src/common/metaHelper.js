import { config as CONFIG } from "config/";

const changeMeta = (metaName, newContent) => {
  const allMetaElements = document.getElementsByTagName("meta");
  for (var i = 0; i < allMetaElements.length; i++) {
    if (allMetaElements[i].getAttribute("name") === metaName) {
      allMetaElements[i].setAttribute("content", newContent);
    }
  }
};

const changeOg = (ogName, newContent) => {
  const allMetaElements = document.getElementsByTagName("meta");
  for (var i = 0; i < allMetaElements.length; i++) {
    if (allMetaElements[i].getAttribute("property") === ogName) {
      allMetaElements[i].setAttribute("content", newContent);
    }
  }
};

class meta {
  static reset() {
    document.title = CONFIG.META_TITLE;
    changeOg("og:title", CONFIG.META_TITLE);
    changeMeta("description", CONFIG.META_DESCRIPTION);
    changeOg("og:description", CONFIG.META_DESCRIPTION);
    changeOg("og:image", CONFIG.META_IMAGE);
  }

  static set({ title, description, image }) {
    if (title) {
      document.title = title;
      changeOg("og:title", title);
    }
    if (description) {
      changeMeta("description", description);
      changeOg("og:description", description);
    }
    if (image) {
      changeOg("og:image", image);
    }
  }
}

export default meta;
