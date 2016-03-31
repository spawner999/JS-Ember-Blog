import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(currentComment, params){
      this.sendAction('sendUpdate', currentComment, params);
    },
    deleteComment(currentComment){
      if(confirm("are you sure?")){
        this.sendAction('sendDelete', currentComment);        
      }
    }
  }
});
