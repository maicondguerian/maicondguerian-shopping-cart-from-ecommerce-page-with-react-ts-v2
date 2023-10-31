import { useLocation } from "react-router-dom";

export default function usePath() {
    const { pathname } = useLocation();

    function isCurrentPath(path: string) {
        if (pathname === path) return true;
        return false;
    }
    return {
        isCurrentPath
    };
}
