/**
 * Description.
 * @param filters - Description.
 * @param formatters - Description.
 */

// type Options = {
//   filters: Object,
//   formatters: Object
// }

const buildFilters = ({ filters = {}, formatters = {} }: any) => {
  const transform = (key: any, value: any) =>
    (formatters[key] || ((value: any) => ({ key, value })))(value);

  return Object.entries(filters)
    .map(([key, value]) => transform(key, value))
    .reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
};

export default buildFilters;
