import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(currentPost){
      if(confirm('are you sure?')){
        this.sendAction('sendDelete', currentPost);
      }
    }
  }
});
