import React from "react";
import styles from "./product.module.css";
import {
  Box,
  Text,
  Stack,
  TagLabel,
  Heading,
  Image,
  Tag,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
const Product = () => {
 
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${3}`)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      });
  }, [page, limit]);

  return (
    <>
      <AddProduct />

      <div className={styles.product}>
        {productData.map((data) => (
          <Stack data-cy="product">
            <Image
              data-cy="product-image"
              src={data.imageSrc}
              className={styles.img}
            />
            <Text data-cy="product-category">{data.category}</Text>
            <Tag>
              <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
            </Tag>
            <Heading data-cy="product-title" className={styles.text}>
              {data.title}
            </Heading>
            <Box data-cy="product-price" className={styles.text}>
              {data.price}
            </Box>
          </Stack>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} limit={limit}/>
    </>
  );
};

export default Product;
