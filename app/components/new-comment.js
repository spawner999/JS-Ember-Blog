import Ember from 'ember';
import moment from 'moment';

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
        post: this.get('currentPost'),
        date: moment().format('LLLL')
      };
      this.set('showForm', false);
      this.set('user', '');
      this.set('message', '');
      this.sendAction('sendComment', params);
    }
  }
});
