import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { attributes, react as HomeContent } from '../content/home.md';


export default function Home() {
  let { title, cats } = attributes;
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  )
}
