import { useEffect } from 'react'

/**
 * @param cb must use `useCallback` to for this function
 * @param threshold how far from bottom edge that `cb` will be invoked. Default is `50`px
 */
export const useIsBottom = ({
  cb,
  threshold = 50,
}: {
  cb: () => void
  threshold?: number
}) => {
  useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight
      const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo
      if (isReachBottom) cb()
    }
    window.addEventListener('scroll', onscroll)
    return () => {
      window.removeEventListener('scroll', onscroll)
    }
  }, [cb, threshold])
}
