import Ember from 'ember';

export function getPropertyInputType(property) {
  if(property.validValues && Array.isArray(property.validValues)) {
    return 'select';
  }

  switch(property.type) {
    case 'boolean':
      return 'radio';
    case 'string':
      return 'text';
    case 'number':
      return 'number';
    case 'integer':
      return 'number';
  }
}

export default Ember.Component.extend({
  propertyCollection: Ember.computed('properties.[]', function() {
    let propertyHash = this.get('properties');
    let propertyKeys = Object.keys(propertyHash);

    return propertyKeys.map((key) => {
      let property = propertyHash[key];
      return { key: key, property: property, type: getPropertyInputType(property) }
    });
  })
});