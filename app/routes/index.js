import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },
  actions: {
    addPost(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    deletePost(currentPost){
      console.log('hello');
      currentPost.destroyRecord();
      this.transitionTo('index');
    }
  }
});
