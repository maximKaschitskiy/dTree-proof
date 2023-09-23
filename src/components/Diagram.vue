<template>
  <svg class="tree" id="tree" ref="tree"></svg>
</template>

<script>
import Vue from "vue";
import * as Snap from 'snapsvg-cjs'

import svgPanZoom from 'svg-pan-zoom'
import init from '../libs/geneticTree'

import { initialMock3 } from "../mock/familyData";
import TreeNode from "./TreeNode.vue";

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {

      const config = {
        placeholder: "#tree",
        nodeXSize: 330,
        nodeYSize: 130,
        nodeXSpace: 40,
        nodeYSpace: 40,
        strokeWidth: 2,
        strokeColor: "#8796D0",
        lineClassName: "node",
      };

      var s = Snap(config.placeholder);
      setTimeout(() => {
        svgPanZoom(config.placeholder);
      }, 2500);

      init(s, initialMock3, (item) => {
        const birth = "1.1.1111";
        const userpic = item.picture.url;
        const selected = false;
        const name = item.name + " " + item.surname;

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
        config
      )


      setTimeout(() => {
        svgPanZoom('#tree')
      }, 1000);
    },



    // const birth = extra ? extra.birth : "";
    // const userpic = extra ? extra.userpic : "";
    // const selected = extra ? extra.selected : false;

    // const TreeNodeComponent = Vue.extend({
    //   render: (h) =>
    //     h(TreeNode, {
    //       props: {
    //         name,
    //         birth,
    //         userpic,
    //         selected
    //       },
    //     }),
    // });

    // const componentInstance = new TreeNodeComponent().$mount();
    // return componentInstance.$el.outerHTML;
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
