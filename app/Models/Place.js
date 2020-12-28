'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Place extends Model {
    campus() {
        return this.belongsTo('App/Models/Campus');
    }
    schedule() {
        return this.hasOne('App/Models/Schedule');
    }
}

module.exports = Place
