/**
 * Description.
 * @param props - Description.
 * @param pipeline - Description.
 */

import relationship, { Relationship } from './relationship';

const hasOne = (props: Relationship) => (pipeline: Relationship[]) => [
  relationship({ ...props, pipeline }),
  {
    $unwind: {
      path: `$${props.as}`,
      preserveNullAndEmptyArrays: true
    }
  }
];

export default hasOne;
