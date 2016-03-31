import Ember from 'ember';

export default Ember.Component.extend({
  sortedlist: Ember.computed.sort('postList','sorting'),
  sorting: ['date:desc'],
  actions: {
    sendUpdate(currentPost, params){
      this.sendAction('sendUpdate', currentPost, params);
    },
    sendDelete(currentPost){
      this.sendAction('sendDelete', currentPost);
      console.log(this.get('sortedlist'));
    }
  }
});
