const expect = require('chai').expect;
const mongoose = require('mongoose');
import Goods from '../../handlers/goods/goods.model'

describe('test Goods model', function() {
    before(function(done) {
        mongoose.connect('mongodb://localhost:27017/flea_market_dev', {useNewUrlParser: true}, function(err) {
            if (err) throw new Error(err);
            else console.log('connection established');
            done();
        })
    });

    after(function(done) {
        mongoose.disconnect(done);
    })

    it('test save model', function(done) {
        let goods = {
            owner: {
                user_id: 'test_id',
                userName: 'kv',
                email: 'kv@sample.com'
            },
            name: 'Camera',
            description: 'A second hand Camera',
            category: 'digital',
            price: 666,
            pictures: ['A', 'B', 'C'],
            status: 'on_sale'
        }
        new Goods(goods).save(function(err, result) {
            console.log(result)
            expect(err).to.be.null;
            done();
        })
    })
})