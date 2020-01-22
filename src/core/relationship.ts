/**
 * Description.
 * @param from - Description.
 * @param localField - Description.
 * @param foreignField - Description.
 * @param as - Description.
 * @param op - Description.
 * @param pipeline - Description.
 */

export type Relationship = {
  from: String,
  localField: String,
  foreignField: String,
  as: String,
  op: String,
  pipeline: Array<Relationship>
}

const relationship = ({ from, localField = '_id', foreignField = '_id', as, op = 'eq', pipeline }: Relationship) => ({
  $lookup: {
    from,
    let: { value: `$${localField}` },
    pipeline: [
      {
        $match: {
          $expr: {
            [`$${op}`]: [
              `$${foreignField}`,
              '$$value'
            ]
          }
        }
      },
      ...pipeline
    ],
    as
  }
})

export default relationship
