const vm = new Vue({
  el: '#root',
  data() {
    return {
      isShowingButton: true
    }
  },
  methods: {
    hideButton() {
      this.isShowingButton = false;
    },
    hideDropdown() {
      this.isShowingButton = true;
    }
  },
  template: `
    <div style="margin: 20px">
      <a v-if="isShowingButton" class="dropdown-button btn" href="#" @click="hideButton">Open</a>
      <ul v-else class="dropdown-content">
        <li><a href="#!" @click="hideDropdown">one</a></li>
        <li><a href="#!" @click="hideDropdown">two</a></li>
        <li class="divider" ></li>
        <li><a href="#!" @click="hideDropdown">three</a></li>
      </ul>
    </div>
  `
});

