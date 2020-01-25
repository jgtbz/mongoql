import buildProject from './buildProject';

const buildRelationshipsProject = ({ module, moduleFields }: any) => {
  const baseModuleFields = (fields: any) => fields.split(module);
  const flat = (acc: any, field: any) => acc.concat(field);
  const isNotNull = (field: any) => !!field;
  const removeInitialDot = (field: any) => field.substr(1);
  const onlyOnModule = (field: any) => field.split('.').length <= 2;
  const fieldToProject = (field: any) => field.split('.')[0];

  const fields = moduleFields
    .map(baseModuleFields)
    .reduce(flat, [])
    .filter(isNotNull)
    .map(removeInitialDot)
    .filter(onlyOnModule)
    .map(fieldToProject)
    .join(',');

  return buildProject({ fields });
};

export default buildRelationshipsProject;
