import { useEffect, useState } from "react";

function useHasMouse() {
    const [hasMouse, setHasMouse] = useState(false);

    useEffect(() => {
        setHasMouse(window.matchMedia("(pointer: fine)").matches);
    }, []);

    return hasMouse;
}

export default useHasMouse;
