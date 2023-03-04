import TaskList from './TaskList.js';
import TaskCreate from './TaskCreate.js'
export default {
  components: { TaskList, TaskCreate },

  template: `
    <section>
      <task-list :tasks="filters.inProgress" title="In Progress"></task-list>
      <task-list :tasks="filters.completed" title="Completed"></task-list>
      
      <task-create @addTask="addTask"></task-create>
      
      <div class="w-full grid place-tasks-center">
        <form class="w-full" @submit.prevent="removeTask">
          <div class="border border-red-700 text-white bg-red-900">
            <button class="px-6 py-2 w-full" type="submit">Remove Recently Added</button>
          </div>
        </form>
      </div>
    </section>
  `,

  data() {
    return {
      tasks: [],
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.tasks.filter(task => ! task.complete),
        completed: this.tasks.filter(task => task.complete)
      };
    }
  },

  methods: {
    addTask(name, tag) {
      this.tasks.push({
        name: name,
        completed: false,
        id: this.tasks.length+1,
        tag: tag
      });
    },

    removeTask() {
      this.tasks.pop();
    }
  }
};