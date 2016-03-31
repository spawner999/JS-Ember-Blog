import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    toggleForm(){
      this.set('showForm', true);
    },
    editComment(currentComment){
      this.set('showForm', false);
      var params = {
        message: this.get('text'),
      };
      this.sendAction('edit', currentComment, params);
    }
  }
});
