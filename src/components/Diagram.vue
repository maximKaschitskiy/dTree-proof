<template>
  <div class="tree" id="tree" ref="tree"></div>
</template>

<script>
import * as d3 from "d3";
window.d3 = d3;
import lodash from "lodash";
import dTree from "d3-dtree";

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const treeData = [
        {
          name: "Mother",
          extra: {
            userpic: "https://robohash.org/Mother",
            birth: "23/05/1999"
          },
          marriages: [
            {
              spouse: {
                name: "Father",
                extra: {
                  userpic: "https://robohash.org/Father",
                  birth: "23/05/1999"
                },
              },
              children: [
                {
                  name: "Child",
                  extra: {
                    userpic: "https://robohash.org/Child",
                    birth: "23/05/1999"
                  },
                },
              ],
            },
          ],
        },
      ];

      dTree.init(treeData, {
        target: "#tree",
        debug: true,
        height: 800,
        width: 1200,
        nodeWidth: 330,
        callbacks: {
          nodeRenderer: (
            name,
            x,
            y,
            height,
            width,
            extra,
            id,
            nodeClass,
            textClass,
            textRenderer
          ) => {
            const birth = extra ? extra.birth : '';
            const userpic = extra ? extra.userpic : '';
            return `
              <div class="node">
                <div class="node_header">
                  <button class="node_button">
                    <img src="">
                  </button>
                  <button class="node_button">
                    <img src="">
                  </button>
                </div>
                <div class="node_content">
                  <div class="node_userpic">
                    <img class="node_imgfile" src=${userpic}>
                  </div>
                  <div class="node_titles">
                    <p class="title">${name}</p>
                    <p class="title">${birth}</p>
                  </div>
                </div>
              </div>
            `;
          },
        },
      });
    },
  },
};
</script>

<style>
body {
  font: 10px sans-serif;
}

.linage {
  fill: none;
  stroke: #8796d0;
}

.marriage {
  fill: none;
  stroke: #8796d0;
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
  padding: 20px;
  gap: 10px;
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
  gap: 20px;
}

.node_userpic {
  width: max-content;
  height: max-content;
  display: flex;
}

.node_imgfile {
  width: 50px;
  height: 50px;
}

.node_titles {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
}

.title {
  color: #011761;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}

p {
  padding: 0;
  margin: 0;
}

svg {
  border-style: solid;
  border-width: 1px;
}
</style>
