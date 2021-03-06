/**
 * Description.
 * @param props - Description.
 * @param pipeline - Description.
 */

import relationship, { Relationship } from './relationship';

const hasMany = (props: Relationship) => (pipeline: Relationship[]) => [
  relationship({ ...props, pipeline })
];

export default hasMany;
