import Component from '@ember/component';
import layout from '../templates/components/delete';

export default Component.extend({
  layout,
  tagName: 'span',
    store: Ember.inject.service(),
    actions: {
        confirmation() {
            this.set('confirmation', true);
        },
        delete(id) {
            this.store.findRecord('info', id).then((record) => record.destroyRecord())
        },
        cancel(){
            this.set('confirmation', false);
        }
    }
});