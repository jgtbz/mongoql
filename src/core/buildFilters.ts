/**
 * Description.
 * @param filters - Description.
 * @param formatters - Description.
 */

type FiltersFormatters = (key: string, value: string) => ({ key: string, value: string })

const buildFilters = (filters = {}, formatters: FiltersFormatters) => {
  return Object
    .keys(filters)
    .map(([ key, value ]) => formatters(key, value))
    .reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {})
}

export default buildFilters
