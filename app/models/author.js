import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import Publisher from './publisher';
import DS from 'ember-data';


export default Publisher.extend({
	books: hasMany('book', { async: true }),
	profileImage: DS.attr('string'),
	loadedAt: Ember.on('didLoad', function() {
		this.set('loadedAt', new Date());
	})

});