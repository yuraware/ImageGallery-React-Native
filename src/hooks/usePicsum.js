import { useState, useCallback, useEffect } from "react";
import picsum from "../api/picsum";

const usePicsumPhotos = () => {

    const [page, setPage] = useState(1);
    
    const [shouldFetch, setShouldFetch] = useState(true);
    const [photos, setPhotos] = useState([]);

    const fetchMore = useCallback(() => setShouldFetch(true), []);

    async function fetchPhotos(page) {
        try {
            const photoResult = await picsum.get("/list?page=" + page, { })

            if (!Array.isArray(photoResult.data)) {
                return [];
            }

            return photoResult.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (!shouldFetch) {
            return;
        }

        const fetch = async () => {
            const newPhotos = await fetchPhotos(page);
            
            setShouldFetch(false);
            setPhotos(oldPhotos => [...oldPhotos, ...newPhotos]);

            setPage(page + 1);
        };

        fetch();
    },

        [page, shouldFetch],
    );

    return [photos, fetchMore];
}

export default usePicsumPhotos;

