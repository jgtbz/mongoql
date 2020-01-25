import MongoQL from './';

describe('Core', () => {
  it('Users', () => {
    const relationships = {
      address: [
        [
          'address',
          MongoQL.hasOne({
            from: 'addresses',
            localField: '_id',
            foreignField: 'user',
            as: 'address'
          })
        ]
      ],
      products: [
        [
          'products',
          MongoQL.hasMany({
            from: 'products',
            localField: '_id',
            foreignField: 'user',
            as: 'products'
          })
        ]
      ]
    };

    const UsersQL = MongoQL.prepare({
      relationships
    });

    const fields = 'name';

    const pipeline = UsersQL.pipeline({ fields });

    console.log(JSON.stringify(pipeline, null, 2));

    expect(2).toBe(2);
  });
});

// describe('buildProject', () => {

// });

// describe('buildFilters', () => {

// });

// describe('buildProject', () => {

// });

// describe('buildRelationshipsProjectFields', () => {

// });

// describe('buildRelationshipsFiltersFields', () => {

// });

// describe('filtersFormatters', () => {

// });

// describe('hasMany', () => {

// });

// describe('hasOne', () => {

// });

// describe('relationship', () => {

// });
