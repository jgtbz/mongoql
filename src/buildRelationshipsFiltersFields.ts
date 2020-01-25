const buildRelationshipsFiltersFields = ({ module, fields }: any) => {
  const transform = ([key, value]: any) => {
    const [field, ...MODULE] = key.split('.').reverse();

    return {
      filtersModule: MODULE.reverse().join('.'),
      key: field,
      value
    };
  };
  const onlyOnModule = ({ filtersModule }: any) => filtersModule === module;
  const join = (acc: any, { key, value }: any) => ({ ...acc, [key]: value });

  const filtersFields = Object.entries(fields)
    .map(transform)
    .filter(onlyOnModule)
    .reduce(join, undefined);

  return filtersFields;
};

export default buildRelationshipsFiltersFields;
