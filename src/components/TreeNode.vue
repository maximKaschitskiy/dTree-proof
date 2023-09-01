<template>
  <div class="node" :class="{ 'node_selected': selected }">
    <div class="node_header">
      <button class="node_button">
        <img class="node_buttonIcon" :src="selected ? icons.person_active : icons.person">
      </button>
      <button class="node_button">
        <img class="node_buttonIcon" :src="selected ? icons.doc_active : icons.doc">
      </button>
    </div>
    <div class="node_content">
      <div class="node_userpic">
        <img class="node_userpicFile" :src="familyImg[`${userpic}`]">
      </div>
      <div class="node_titles">
        <p class="title" :class="{ 'title_selected': selected }">{{ name }}</p>
        <p class="subtitle" :class="{ 'subtitle_selected': selected }">{{ birth }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import { familyImg } from "../utils/familyImg.js"

const icons = {
  person: require("../assets/buttons/person.svg"),
  person_active: require("../assets/buttons/person_active.svg"),
  doc: require("../assets/buttons/doc.svg"),
  doc_active: require("../assets/buttons/doc_active.svg"),
}

export default {
  props: {
    name: String,
    birth: String,
    userpic: String,
    selected: Boolean
  },
  data() {
    return {
      familyImg: familyImg,
      icons: icons
    };
  },
};
</script>
  
<style>
.linage {
  fill: none;
  stroke: #8796d0;
  stroke-width: 2;
}

.marriage {
  fill: none;
  stroke: #8796d0;
  stroke-width: 2;
}

.node {
  background-color: #e8ebf6;
  box-sizing: border-box;
  width: 100%;
  height: 130px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  gap: 10px;
}

.node_selected {
  background-color: #576CBE;
}

.node_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.node_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}

.node_userpic {
  width: 64px;
  height: 64px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
}

.node_userpicFile {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.node_titles {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
}

.title {
  color: #011761;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  padding: 0;
  margin: 0;
}

.subtitle {
  color: #011761;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding: 0;
  margin: 0;
}

.title_selected {
  color: #FFF;
}

.subtitle_selected {
  color: #FFF;
}

.node_button {
  background: none;
  border: none;
  outline: none;
  padding: 0;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.node_buttonIcon {
  width: 24px;
  height: auto;
}
</style>