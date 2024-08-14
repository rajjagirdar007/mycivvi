<template>
  <div class="container mt-5"> 
    <div class="row">
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary" id="column1">
          <h3>Applicants</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrApplicants"
            group="applicants"
          >
            <div
              class="list-group-item"
              v-for="element in arrApplicants"
              :key="element.name"
            >
            <span class="bold">
              {{element.feedback_id}}
              </span>
              {{ element.submittor_username }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary" id="column2">
          <h3>First Round</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrFirstRound"
            group="applicants"
          >
            <div
              class="list-group-item"
              v-for="element in arrFirstRound"
              :key="element.name"
            >
            <span class="bold">
              {{element.feedback_id}}
              </span>
              {{ element.submittor_username }}
                          </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-warning" id="column3">
          <h3>Second Round</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrSecondRound"
            group="applicants"
          >
            <div
              class="list-group-item"
              v-for="element in arrSecondRound"
              :key="element.name"
            >
            <span class="bold">
              {{element.feedback_id}}
              </span>
              {{ element.submittor_username }}            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-success" id="column4">
          <h3>Final Decisions</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrFinal"
            group="applicants"
          >
            <div
              class="list-group-item"
              v-for="element in arrFinal"
              :key="element.name"
            >
            <span class="bold">
              {{element.feedback_id}}
              </span>
              {{ element.submittor_username }}            </div>
          </draggable>
        </div>
      </div>
    </div>
        <pre>
      {{$data}}
    </pre> 
  </div>
</template>

<script>
import draggable from "vuedraggable";
import axios from 'axios'


export default {
  name: "kanban-board",
  components: {
    draggable
  },
  data() {
    return {
      // for new tasks
      Applicants: "",
      // 4 arrays to keep track of our 4 statuses
      arrApplicants: [
        { name: "James Zurita" },

      ],
      arrFirstRound: [],
      arrSecondRound: [],
      arrFinal: [],
      position: []
    };
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.Applicants) {
        this.arrApplicants.push({ name: this.Applicants });
        this.Applicants = "";
      }
    }

  },
   mounted () {
    axios
      .get("https://mycivvi.com/vue123")
      .then(response => (this.arrApplicants = response.data))
      .then(console.log(this.data))
  }
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  min-height: 300px;
}
#column1{
  background-color: #b8d8d8;
}
#column2{
  background-color: #7a9e9f;
}#column3{
  background-color:#4f6367;
}#column4{
  background-color: #fe5f55;
}
h3{
  color:white;
}
.bold{
font-weight: bold;
}
</style>
