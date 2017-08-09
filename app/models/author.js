import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import Publisher from './publisher';

export default Publisher.extend({
	books: hasMany('book', { async: true }),

	loadedAt: Ember.on('didLoad', function() {
		this.set('loadedAt', new Date());
	})

});