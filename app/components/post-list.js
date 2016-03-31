import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: Ember.computed('filter', 'sortedlist', function() {
    var filter = this.get('filter');
    return this.get('sortedlist').filter(function(post, index) {
      return index < filter;
    });
  }),
  filter: 5,
  sortedlist: Ember.computed.sort('postList','sorting'),
  sorting: ['date:desc'],
  isSelected: true,
  actions: {
    sendUpdate(currentPost, params){
      this.sendAction('sendUpdate', currentPost, params);
    },
    sendDelete(currentPost){
      this.sendAction('sendDelete', currentPost);
    },
    incrementFilter(){
       this.set('filter', 100);
       this.set('isSelected', false);
    },
    decrementFilter(){
       this.set('filter', 5);
       this.set('isSelected', true);
    }
  }
});
