/**
 * Description.
 * @param fields - Description.
 */

const buildProject = (fields = '_id') => fields
  .split(',')
  .reduce((acc, field) => ({ ...acc, [field]: 1 }), {})

export default buildProject
