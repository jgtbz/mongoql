import buildPipeline from './buildPipeline';
import buildFilters from './buildFilters';
import buildProject from './buildProject';
import filtersFormatters from './filtersFormatters';
import hasMany from './hasMany';
import hasOne from './hasOne';

const pipeline = ({ relationships, filtersFormatters }: any) => ({
  fields,
  filters
}: any) => {
  const $project = buildProject({ fields });
  const $match = buildFilters({ filters, formatters: filtersFormatters });
  const $pipeline = buildPipeline({
    relationships,
    project: $project,
    filters,
    filtersFormatters
  });

  return [{ $match }, ...$pipeline, { $project }];
};

const middleware = () => () => {
  console.log('middleware');
};

const prepare = ({ relationships, filtersFormatters }: any) => ({
  pipeline: pipeline({ relationships, filtersFormatters }),
  middleware: middleware()
});

export { prepare, hasOne, hasMany, filtersFormatters };

export default {
  prepare,
  hasOne,
  hasMany,
  filtersFormatters
};
