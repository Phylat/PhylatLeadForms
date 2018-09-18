<template>
  <div>
    <label>{{label}}</label>
    <select :multiple="multi" :value="value" @input="selectInput">
      <option ref="theOption" v-for="option in options" :key="option.option" :title="options.score">
        {{option.score}}
      </option>
    </select>
  </div>
</template>
<script>
  export default {
    name: "SelectList",
    props: ["multi", "options", "name", "label", "value"],
    methods: {
      selectInput() {
        console.log(event.target);
        alert(event.target.id);
        // this.$emit("input", i);
      }
    }
  };
</script>