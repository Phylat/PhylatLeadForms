<template>
  <div>
    <label>{{label}}</label>
    <select :multiple="multi"
            :value="value"
            @input="selectInput($event.target)"
         >
      <option ref="theOption" v-for="option in options"
     
              :key="option.option" 
              
              
              >
        {{option}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "SelectList",
  props: ["multi", "options", "name", "label", "value"],
  methods: {
    selectInput(i) {
      console.log(this.i);
      this.$emit("input", i.value.text);
    }
  }
};
</script>