Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    <div>
    `,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
});

Vue.component('tab', {
  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
    `,

  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
     isActive: false
    };
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
});

Vue.component('modal', {
  template: `
          <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                  <p>
                    <img src="http://i.imgur.com/MKW6NEA.png">
                    <br>
                    We got to interview @dave_malloy about how #thelegendofzelda influenced the writing of @greatcometbway! https://youtu.be/G5VTIgjw2V8
                  </p>
                <div>
              </div>

              <button class="modal-close" @click="$emit('close')"></button>
            </div>
    `
});

new Vue({
  el: '#root',

  data: {
    newestTweet: false,
    newInput: '',
    submittedText: []
  },

  methods: {
    addMessage() {
      this.submittedText.push(this.newInput);
      this.newInput = '';
      alert('Message submitted!')
    }
  }
});
