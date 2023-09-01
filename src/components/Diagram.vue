<template>
  <div class="tree" id="tree" ref="tree"></div>
</template>

<script>
import Vue from "vue";
import * as d3 from "d3";
window.d3 = d3;
import lodash from "lodash";
import dTree from "../libs/d3-dtree/src/dtree.js";
import TreeNode from "./TreeNode.vue";
import { familyData } from "../mock/familyData.js";

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      // console.log(d3.zoom());

      dTree.init(familyData, {
        target: "#tree",
        debug: true,
        height: 800,
        width: 1000,
        nodeWidth: 330,
        hSpacing: 590,
        vSpacing: 150,
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
            const birth = extra ? extra.birth : "";
            const userpic = extra ? extra.userpic : "";
            const selected = extra ? extra.selected : false;

            const TreeNodeComponent = Vue.extend({
              render: (h) =>
                h(TreeNode, {
                  props: {
                    name,
                    birth,
                    userpic,
                    selected
                  },
                }),
            });

            const componentInstance = new TreeNodeComponent().$mount();
            return componentInstance.$el.outerHTML;
          },
        },
      });
    },
  },
};
</script>

<style>
.tree {
  display: flex;
  width: 100%;
  height: 100%;
  border: 3px solid red;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
</style>
