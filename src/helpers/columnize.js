const columnize = (links, numberPerColumn) => (
  links.reduce((ar, it, i) => {
    const ix = Math.floor(i / numberPerColumn)
    if (!ar[ix]) {
      ar[ix] = []
    }
    ar[ix].push(it)
    return ar
  }, [])
)

export default columnize
