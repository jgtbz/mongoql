import buildFilters from './buildFilters';
import buildRelationshipsFiltersFields from './buildRelationshipsFiltersFields';
import buildRelationshipsProjectFields from './buildRelationshipsProjectFields';

/**
 * Description.
 * @param  - Description.
 * @param  - Description.
 * @param  - Description.
 */

const buildPipeline = ({
  relationships = {},
  filters = {},
  project = {},
  filtersFormatters = []
}: any) => {
  const relationshipsKeys = Object.keys({ ...filters, ...project });
  const projectKeys = Object.keys(project);

  console.log({
    filters,
    project
  });

  const onlyRelationshipsRequireds = ([key]: String) =>
    relationshipsKeys.some(field => field.includes(key));
  const joinRelationships = (
    defaultPipelines: any,
    [module, relationship]: any
  ) => {
    const fieldByModule = (key: String) => key.includes(module);
    const projectFields = projectKeys.filter(fieldByModule);
    const filtersFields = buildRelationshipsFiltersFields({
      module,
      fields: filters
    });

    const customFilters = buildFilters({
      filters: filtersFields,
      filtersFormatters
    });

    const customPipelines = [];

    customFilters && customPipelines.push({ $match: customFilters });

    const $project = buildRelationshipsProjectFields({
      module,
      moduleFields: projectFields
    });

    return relationship([
      ...customPipelines,
      ...defaultPipelines,
      { $project }
    ]);
  };

  return Object.entries(relationships).reduce(
    (acc: any, [, pipelines]: any) => [
      ...acc,
      ...pipelines
        .filter(onlyRelationshipsRequireds)
        .reduce(joinRelationships, [])
    ],
    []
  );
};

export default buildPipeline;
