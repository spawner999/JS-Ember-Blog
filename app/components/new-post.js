import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    toggleForm(){
      this.set('showForm', true);
    },
    create(){
      this.set('showForm', false);
      console.log(this.get('title'));
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        text: this.get('text'),
        date: new Date(),
        image: 'http://lorempixel.com/400/400/sports/1/'
      };
      this.set('user', '');
      this.set('title', '');
      this.set('text', '');
      this.sendAction('create', params);
    }
  }
});
