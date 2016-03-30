import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    toggleForm(){
      this.set('showForm', true);
    },
    edit(currentPost){
      this.set('showForm', false);
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        text: this.get('text'),
      };
      this.sendAction('edit', currentPost, params);
    }
  }
});
