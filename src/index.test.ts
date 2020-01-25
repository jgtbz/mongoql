// import MongoQL from './';

// describe('Core', () => {
//   it('Users', () => {
//     const relationships = {
//       address: [
//         [
//           'address',
//           MongoQL.hasOne({
//             from: 'addresses',
//             localField: '_id',
//             foreignField: 'user',
//             as: 'address'
//           })
//         ]
//       ],
//       products: [
//         [
//           'products',
//           MongoQL.hasMany({
//             from: 'products',
//             localField: '_id',
//             foreignField: 'user',
//             as: 'products'
//           })
//         ]
//       ]
//     };

//     const formatters = {
//       name: MongoQL.filtersFormatters.string('name')
//     };

//     const UsersQL = MongoQL.prepare({
//       relationships,
//       filtersFormatters: formatters
//     });

//     const fields = 'name,address.zipcode,products.name';
//     const filters = {
//       name: 'João'
//     };

//     const pipeline = UsersQL.pipeline({ fields, filters });

//     console.log(JSON.stringify(pipeline, null, 2));

//     expect(2).toBe(2);
//   });
// });

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
