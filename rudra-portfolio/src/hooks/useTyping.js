import { useEffect, useState } from 'react'

export default function useTyping(
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  pause = 1500
) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}