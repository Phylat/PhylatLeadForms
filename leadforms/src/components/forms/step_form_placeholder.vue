<template>
  <div>
    
    <step-form-generator 
    v-model="formData" 
    :schema="stepReturn" 
    :stepButtons="stepButtons" 
    :curStep="currentStep"
    @nextStep="next"
    @prevStep="prev"
    @submitForm="submit">
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
        firstName: ""
      },
      currentStep: 1,
      stepButtons: false,
      stepSchema: [
        {
          step: 1,
          schema: [
            {
              fieldType: "TextInput",
              placeholder: "Name",
              label: "What should we call you?",
              name: "firstName"
            }
            /*{
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
            {
              fieldType: "SelectList",
              name: "title",
              multi: false,
              label: "Title",
              options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
            },*/
          ]
        },
        {
          step: 2,
          schema: [
            {
              fieldType: "SelectList",
              name: "platform",
              multi: true,
              label: "What platform would you like your software to supports",
              options: [
                "Web",
                "Mobile",
                "IOT",
                "Multiple Platforms",
                "Other",
                "Not Sure"
              ]
            },
            {
              fieldType: "SelectList",
              name: "preexistingSoftware",
              multi: false,
              label: "Do you have any preexisting software?",
              options: ["Yes", "No"]
            }
          ]
        },
        {
          step: 3,
          schema: [
            {
              fieldType: "SelectList",
              name: "timeline",
              multi: false,
              label: "Do you have a timeline in mind?",
              options: ["ASAP", "0-6 Months", "1-2 Years", "Not Sure"]
            },
            {
              fieldType: "SelectList",
              name: "budget",
              multi: false,
              label: "Do you have a budget for this project?",
              options: ["0-5k", "5-20k", "10-25k", "Not Sure"]
            }
          ]
        },
        {
          step: 4,
          schema: [
            {
              fieldType: "TextInput",
              placeholder: "Email Address",
              label: "What is the best way to contact you?",
              name: "email"
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
    },

    submit() {
      let visSessionId = this.trackVisId;
      if (this.name && this.name && !this.hpotval) {
        const timeCreated = Date.now();

        fb.contactCollection
          .doc()
          .set({
            session_id: visSessionId,
            name: this.name,
            email: this.email,
            addDate: timeCreated
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
        this.errormsg = "You have to fill out all of the inputs";
        return;
      }
      alert("Submit to blah and show blah and etc.");
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

      let processedForm = formprocess
        .filter(forminputs => {
          return forminputs.step === curStep;
        })
        .map(function(formins) {
          return formins.schema;
        });
      console.log(processedForm);
      return processedForm[0];

      //console.log(formprocess);
    }
  }
};
</script>
