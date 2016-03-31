import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: Ember.computed.filter('postList', function(post, index, array){
    return index < 3;
  }),
  sortedlist: Ember.computed.sort('filteredList','sorting'),
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
