import { useEffect,useState } from "react";

export function useScrollSpy(sectionIds, rootMargin = '-40% 0px -55% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, { rootMargin })

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}