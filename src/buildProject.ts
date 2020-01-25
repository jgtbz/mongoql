/**
 * Description.
 * @param fields - Description.
 */

type Options = {
  fields: String;
};

const buildProject = ({ fields = '_id' }: Options) =>
  fields.split(',').reduce((acc, field) => ({ ...acc, [field]: 1 }), {});

export default buildProject;
