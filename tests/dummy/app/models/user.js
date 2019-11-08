import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default class UserModel extends DS.Model {
  info = MF.fragment('info');
  orders = MF.fragmentArray('order');
}
