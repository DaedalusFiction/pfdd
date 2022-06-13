import { useState, useEffect } from "react";
import {
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    where,
    startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

function useGetPhotos(city, lastVisible, updateCounter) {
    const [photos, setPhotos] = useState(null);
    const [last, setLast] = useState(null);

    useEffect(() => {
        async function getPhotos() {
            let q;
            if (lastVisible === false) {
                if (city === "All") {
                    q = query(
                        collection(db, "photos"),
                        orderBy("createdAt", "desc"),
                        limit(25)
                    );
                } else {
                    q = query(
                        collection(db, "photos"),
                        orderBy("createdAt", "desc"),
                        where("city", "==", city),
                        limit(25)
                    );
                }
            } else {
                if (city === "All") {
                    q = query(
                        collection(db, "photos"),
                        orderBy("createdAt", "desc"),
                        startAfter(lastVisible),
                        limit(25)
                    );
                } else {
                    q = query(
                        collection(db, "photos"),
                        where("city", "==", city),
                        orderBy("createdAt", "desc"),
                        startAfter(lastVisible),
                        limit(25)
                    );
                }
            }

            const docsSnap = await getDocs(q);
            let newPhotos = [];
            docsSnap.docs.forEach((doc, index) => {
                newPhotos = [...newPhotos, doc];
                // console.log(doc.data());
            });
            setLast(docsSnap.docs[docsSnap.docs.length - 1]);
            setPhotos(newPhotos);
        }

        getPhotos();
    }, [city, lastVisible, updateCounter]);
    return [photos, last];
}

export default useGetPhotos;
