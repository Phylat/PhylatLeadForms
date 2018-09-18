<template>
  <div>
    {{currentTagline}} {{currentStep}}
    <step-form-generator v-model="formData" @sdataup="sdataupz" :schema="currentSchema" :foo.sync="totScore" :stepButtons="stepButtons" :curStep="currentStep" @nextStep="next" @prevStep="prev" @submitForm="submit" @clickAction="clickAction" @saveAction="subForm" @updateSelected="selectFormSearch" :currentOptions="currentOptions">
    </step-form-generator>

    <p style="display:none;">{{stepReturn}}</p>
  </div>
</template>

<script>
  import StepFormGenerator from "@/components/forms/Includes/StepFormGenerator.vue";
  import { uuid } from "vue-uuid";
  export default {
    name: "StepForm",
    components: { StepFormGenerator },
    data() {
      return {
        totScore: [
          {
            initialS: 0
          }
        ],
        formData: {
          firstName: ""
        },
        currentStep: 1,
        stepButtons: true,
        currentTagline: null,
        currentSchema: null,
        trackVisId: uuid.v1(),
        currentOptions: null,
        curVal: 0,
        leadCategories: [
          {
            name: "Low",
            targetScore: 5,
            description: "Low value"
          },
          {
            name: "Medium",
            targetScore: 10,
            description: "Medium"
          },
          {
            name: "High",
            targetScore: 5,
            description: "High Value call right away"
          }
        ],
        stepSchema: [
          {
            step: 1,
            TagLine: "Tell us about your project",
            buttonOptions: [
              { text: "Previous", action: "prev" },
              { text: "Next", action: "next" }
            ],
            schema: [
              {
                fieldType: "TextInput",
                placeholder: "Name",
                label: "What should we call you?",
                name: "firstName"
              }
            ]
          },
          {
            step: 2,
            //Todo
            TagLine: "Thanks now some details about your project",
            buttonOptions: [
              { text: "Previous", action: "prev" },
              { text: "Next", action: "next" }
            ],
            schema: [
              {
                fieldType: "SelectList",
                name: "platform",
                multi: false,
                label: "What platform would you like your software to supports",
                options: [
                  "",
                  "Web",
                  "Mobile",
                  "IOT",
                  "Multiple Platforms",
                  "Other",
                  "Not Sure"
                ],
                optionsValues: [0, 2, 2, 3, 4, 2, 0]
              },
              {
                fieldType: "SelectList",
                name: "preexistingSoftware",
                multi: false,
                label: "Do you have any preexisting software?",
                options: ["", "Yes", "No"],
                optionsValues: [0, 1, 2]
              }
            ]
          },
          {
            step: 3,
            TagLine: "",
            buttonOptions: [
              { text: "Previous", action: "prev" },
              { text: "next", action: "next" }
            ],
            schema: [
              {
                fieldType: "SelectList",
                name: "timeline",
                multi: false,
                label: "Do you have a timeline in mind?",
                options: ["", "ASAP", "0-6 Months", "1-2 Years", "Not Sure"],
                optionsValues: [0, 4, 3, 3, 4, 2, 1]
              },
              {
                fieldType: "SelectList",
                name: "budget",
                multi: false,
                label: "What is your budget?",
                options: ["", "0-5k", "5-20k", "10-50k", "50k+", "Not Sure"],
                optionsValues: [0, 1, 2, 3, 4, 5, 0]
              }
            ]
          },
          {
            step: 4,
            buttonOptions: [
              { text: "Previous", action: "prev" },
              { text: "Save", action: "save" }
            ],
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
      selectFormSearch() {
        //console.log(event.target.value);
        // alert(event.target.selectedIndex);
      },
      clickAction(i) {
        //TODO Change to terrinary
        var actionTaken = i;
        if (actionTaken === "prev") {
          return this.currentStep--;
        } else {
          return this.currentStep++;
        }
      },
      sdataupz(u) {
        console.log(u);
        this.totScore = u;
      },
      subForm(i) {
        let totVal = this.totScore;
        console.log(this.totScore);

        //return this.currentStep++;
        alert(totVal);
      },
      prev() {
        this.currentStep--;
      },
      next() {
        this.currentStep++;
      },
      submit() {
        console.log(this.formData);
        console.log(event.target.data);
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
        let curStep = this.currentStep;
        let formprocess = this.stepSchema;
        let processedForm = formprocess
          .filter(forminputs => {
            return forminputs.step === curStep;
          })
          .map(function(formins) {
            return formins;
          });
        console.log(processedForm);
        this.currentSchema = processedForm[0].schema;
        this.currentTagline = processedForm[0].TagLine;
        this.currentOptions = processedForm[0].buttonOptions;
        return processedForm[0];
      },
      stepsRemaining() {
        var currentLength = this.currentStep;
        var totalLength = this.stepSchema.length;
        const stepCounter = false;
        if (totalLength > currentLength) {
          stepCounter === true;
          this.stepButtons = true;
          console.log("nomoresteps");
        } else {
          this.stepButtons = false;
          stepCounter == false;
          console.log("moresteps");
        }
        return stepCounter;
      }
    }
  };
</script>