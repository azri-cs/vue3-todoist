export default {
  template: `
    <li>
        <label class="p-4 flex justify-between items-center">
            {{ task.name }}
            
            <input type="checkbox" v-model="task.complete" class="ml-4">
        </label>
    </li>
  `,

  props: {
    task: Object
  }
}