import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: Ember.computed.filter('sortedlist', function(post, index, array){
    return index < 5;
  }),
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
