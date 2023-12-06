import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEgU9yUqBuZnZAxvZdqZkLnb_k0mGAJD8",
  authDomain: "myapp-97124.firebaseapp.com",
  projectId: "myapp-97124",
  storageBucket: "myapp-97124.appspot.com",
  messagingSenderId: "754703536866",
  appId: "1:754703536866:web:7bc0a475fda5b86b40c4bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  const products = productsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return products;
};

export const getProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  const productSnapshot = await getDoc(productDoc);
  return { ...productSnapshot.data(), id: productSnapshot.id };
};

export const createOrder = async (orderData) => {
  const ordersCollection = collection(db, "orders");
  const newOrderRef = await addDoc(ordersCollection, orderData);
  return newOrderRef.id;
};

export const updateProductStock = async (productId, newStock) => {
  const productDoc = doc(db, "products", productId);
  try {
    await updateDoc(productDoc, {
      stock: newStock,
    });
    console.log(`Stock actualizado en Firebase para el producto ${productId} a ${newStock}`);
  } catch (error) {
    console.error(`Error al actualizar el stock para el producto ${productId}:`, error);
  }
};
