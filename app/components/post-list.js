import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(currentPost, params){
      console.log(params);
      this.sendAction('sendUpdate', currentPost, params);
    }
  }
});
