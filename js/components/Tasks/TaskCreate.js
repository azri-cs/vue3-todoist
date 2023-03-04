export default {
  template: `
    <form class="mb-6" @submit.prevent="addTask">
      <div class="border border-gray-600 text-black my-4">
        <input class="w-full px-6 py-2" v-model="newTask" placeholder="New task...">
      </div>
      <div class="border border-gray-600 text-black my-4">
        <input class="w-full px-6 py-2" v-model="newTag" placeholder="New tag...">
      </div>
      <div class="border border-emerald-700 bg-emerald-900">
          <button class="px-6 py-2 w-full text-white" type="submit">Add New</button>
        </div>
    </form>
  `,

  props: {
    tasks: Array
  },

  data() {
    return {
      newTask: '',
      newTag: ''
    }
  },

  methods: {
    addTask() {
      if (!this.newTask || !this.newTag) {
        swal.fire({
          title: 'Error!',
          text: 'Please enter both task and tag',
          icon: 'error',
          confirmButtonText: 'OK',
          heightAuto: false
        });
        return;
      }

      this.$emit('addTask', this.newTask, this.newTag);

      this.newTask = '';
      this.newTag = '';
    }
  }
}