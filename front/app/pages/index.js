import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const Home = (props) => {
  return (
    <div>
      <h2>
        POSTの一覧
      </h2>
      <table>
        <tbody>
          {props.posts.map((post) =>
            <tr key={post.id}>
              <td>{post.id}.</td>
              <td>{post.title}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;