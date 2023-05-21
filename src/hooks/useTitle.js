import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Classic Toy | ${title}`;
        console.log()
    }, [title])
}
export default useTitle;