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
    editPost(currentPost, params){
      console.log(params);
      Object.keys(params).forEach(function (key) {
        if(params[key] !== undefined) {
          currentPost.set(key, params[key]);
        }
      });
      console.log(currentPost.get('title'));
      currentPost.save();
      this.transitionTo('index');
    }
  }
});
