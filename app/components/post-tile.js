import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(currentPost, params){
      this.sendAction('sendUpdate', currentPost, params);
    }
  }
});
