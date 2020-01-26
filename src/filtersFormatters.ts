const same = (key: string) => (value: string) => ({
  key,
  value
});

const string = (key: string) => (value: string) => ({
  key,
  value: new RegExp(value, 'gi')
});

const array = (key: string, type = String) => (value: string) => ({
  key,
  value: { $in: value.split(',').map(type) }
});

const period = (key: string) => (value: string) => {
  const [start, end] = value.split(',');
  return {
    key,
    value: {
      $gte: new Date(start),
      $lte: new Date(end)
    }
  };
};

export default {
  same,
  string,
  array,
  period
};
