<template>
  <div>
    <label>{{label}}</label>
    <select :multiple="multi" :value="value" @input="$emit('selectedInput',
           $event.target.selectedIndex)">

      <option v-for="option in options" :key="option">
        {{option}}
      </option>
    </select>

  </div>
</template>
<script>
  export default {
    name: "SelectList",
    props: ["multi", "options", "name", "label", "value"]
  };
</script>