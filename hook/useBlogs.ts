import { db } from "firebaseConfig";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  imageUrl: string;
  title: string;
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const loadData = () => {
    return db.collection("blogs").onSnapshot((snapshot) => {
      const docs: any = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(docs);
    });
  };

  useEffect(() => {
    const unsubscribe = loadData();
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    blogs,
    loadData,
  };
};
