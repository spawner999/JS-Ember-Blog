import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(currentPost, params){
      this.sendAction('sendUpdate', currentPost, params);
    },
    sendDelete(currentPost){
      this.sendAction('sendDelete', currentPost);
    }
  }
});
