import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    addPost(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    deletePost(currentPost){
      var commentDeletions = currentPost.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(commentDeletions).then(function(){
        return currentPost.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
