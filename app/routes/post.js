import Ember from 'ember';

export default Ember.Route.extend({
  models(params) {
    return this.store.findRecord('rental', params.post_id);
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
    }
  }
});
