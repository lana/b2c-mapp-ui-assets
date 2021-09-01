import { ref } from 'vue';

import * as Icons from '.';

const App = {
  components: Icons,
  setup() {
    const icons = ref(Object.keys(Icons));
    return { icons };
  },
};
export default App;
