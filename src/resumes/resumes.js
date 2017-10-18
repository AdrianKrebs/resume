// If you create a new resume, import it here:
import './left-right.vue';
import './oblique.vue';
import './side-bar.vue';
import './purple.vue';
import './page1.vue';
import './page2.vue';
import './side-bar-rtl.vue';

import { PERSON } from '../person';
import { terms } from '../terms';

// Called by templates to decrease redundancy
function getVueOptions (name) {
  let opt = {
    name: name,
    data () {
      return {
        person: PERSON,
        terms: terms
      };
    },
    computed: {
      lang () {
        return this.terms[this.person.lang];
      }
    }
  };
  return opt;
}

export { getVueOptions };
