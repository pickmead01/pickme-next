import { useRef, useEffect } from "react";

export default function useModalRootRef() {
    const modalRootRef = useRef()

    useEffect(() => {
        modalRootRef.current = document.querySelector('#modal-root')
        if (modalRootRef.current === null) return
    }, [modalRootRef]);

    return modalRootRef.current;
}
