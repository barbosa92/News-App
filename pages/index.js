import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@components/styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "@components/components/PageLayout";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({articles}) {
  // Se utilizaba antes de emplear el getServerSAideProps
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e866e07121524185a9b2fb05d35568e0"
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       const {articles} = result;
  //       setArticles(articles);
  //       console.log(result.articles);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  return (
    <PageLayout title="News App - Home">
      <div className={styles.container}>
        {articles.length == 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <Image
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
                width={500}
                height={300}
              ></Image>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}
// Este método se ejecuta en el servidor...
// N ejecuciones -> n repeticiones
// Usar solamente para datos muy live, o cuando tiene muchos datos dinámicos
// 
export async function getServerSideProps () {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e866e07121524185a9b2fb05d35568e0"
  ) 
    const {articles} = await response.json();
    return {
      props: {articles}
    }
}
