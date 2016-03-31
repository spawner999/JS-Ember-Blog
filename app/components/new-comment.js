import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    toggleForm(){
      this.set('showForm', true);
    },
    sendComment(){
      var params = {
        user: this.get('user'),
        message: this.get('message'),
        post: this.get('currentPost')
      }
      this.sendAction('sendComment', params);
    }
  }
});
