import { useLayoutEffect, useState } from "react";

const useMediaQuery = (query: string) => {

  const [matchValue, setMatchValue] = useState(false)

  useLayoutEffect(()=> {

    const media = window.matchMedia(query)
    
    media.addEventListener('change', (ev) => {
        setMatchValue(ev.matches)
    })

    if (media.matches !== matchValue) {
      setMatchValue(media.matches)
    }

  }, [matchValue, query])

  return matchValue;
}

export default useMediaQuery;