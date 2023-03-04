import Task from './Task.js';
import TaskTags from './TaskTags.js'
export default {
  components: { Task, TaskTags },

  template: `
    <section v-show="tasks.length" class="mb-8">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>({{ tasks.length }})</span>
        </h2>
        
        <task-tags
          v-model:currentTag="currentTag"
          :initial-tags="tasks.map(a => a.tag)"
        ></task-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <task
                v-for="task in filteredTasks"
                :key="task.id"
                :task="task"
            ></task>
        </ul>
    </section>
  `,

  props: {
    tasks: Array,
    title: String
  },

  data() {
    return {
      currentTag: 'all'
    };
  },

  computed: {
    filteredTasks() {
      if (this.currentTag === 'all') {
        return this.tasks;
      }

      return this.tasks.filter(a => a.tag === this.currentTag);
    }
  }
}