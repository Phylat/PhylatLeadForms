<template>
  <div>
    <h1>Form Generator</h1>
     <step-form-generator :schema="stepReturn"
   
                    v-model="formData">
    </step-form-generator>
    <p>



        
        {{stepReturn}}
        {{currentStep}}
     <!--Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}}, {{formData.position}} I hear you are {{formData.age}} years old.-->
    </p>
  </div>
</template>

<script>
import StepFormGenerator from "@/components/forms/Includes/StepFormGenerator.vue";

export default {
  name: "StepForm",
  components: { StepFormGenerator },
  data() {
    return {
      formData: {
        firstName: "as"
      },
      currentStep: 1,
      stepSchema: [
        {
          step: 1,
          schema: [
            {
              fieldType: "SelectList",
              name: "title",
              multi: false,
              label: "Title",
              options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
            },
            {
              fieldType: "TextInput",
              placeholder: "First Name",
              label: "First Name",
              name: "firstName"
            },
            {
              fieldType: "TextInput",
              placeholder: "Last Name",
              label: "Last Name",
              name: "lastName"
            },
            {
              fieldType: "NumberInput",
              placeholder: "Age",
              name: "age",
              label: "Age",
              minValue: 0
            }
          ]
        },
        {
          step: 2,
          schema: [
            {
              fieldType: "SelectList",
              name: "job",
              multi: false,
              label: "job",
              options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
            },
            {
              fieldType: "TextInput",
              placeholder: "position",
              label: "position",
              name: "position"
            }
          ]
        }
      ]
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    }
  },
  computed: {
    stepReturn() {
      /*const officersIds = this.stepSchema.map(officer => officer.schema).filter(officersIds => {
        return officersIds.step === 1;
      });
      console.log(formprocess);*/
      let curStep = this.currentStep;
      let formprocess = this.stepSchema;

      let ages = formprocess
        .filter(forminputs => {
          return forminputs.step === curStep;
        })
        .map(function(formins) {
          return formins.schema;
        });
      console.log(ages);
      return ages[0];

      //console.log(formprocess);
    }
  }
};
</script>
