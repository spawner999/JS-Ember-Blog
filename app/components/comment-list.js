import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(currentComment, params){
      this.sendAction('sendUpdate', currentComment, params);
    },
    sendDelete(currentComment){
      this.sendAction('sendDelete', currentComment);
    }
  }
});
