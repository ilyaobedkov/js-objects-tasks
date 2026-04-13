export default function make(name, additionalProps = {}) {
  return {
    name: name,
    state: 'moderating',
    createdAt: Date.now(),
    ...additionalProps
  };
}
