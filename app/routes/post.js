import Ember from 'ember';

export default Ember.Route.extend({
  models(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    editPost(currentPost, params){
      Object.keys(params).forEach(function (key) {
        if(params[key] !== undefined) {
          currentPost.set(key, params[key]);
        }
      });
      currentPost.save();
      this.transitionTo('post');
    },
    addComment(params){
      var newComment = this.store.createRecord('comment', params);
      var currentPost = params.post;
      currentPost.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return currentPost.save();
      });
      this.transitionTo('post');
    },
    editComment(currentPost, params){
        if(params[message] !== undefined){
          currentPost.set('message', params[message]);
        }
        currentPost.save();
        this.transitionTo('post');
      }
  }
});
