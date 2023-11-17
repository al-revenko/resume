const matchMediaQuery = (query: string, match_cb: () => void) => {
  const media = window.matchMedia(query)

  media.addEventListener('change', (ev) =>  {
    if (ev.matches) {
      match_cb();
    }
  })
}

export default matchMediaQuery;