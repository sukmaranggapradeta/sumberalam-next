import SEO from "../SEO";
// import Navigation from "../components/Navigation";
import NavBar from "components/header";
import Footer from "components/footer";

// import styles from "./Layout.module.css";
import styles from "styles/Home.module.css";

export default function Layout({ children, pageMeta }) {
  return (
    <div className={styles.container}>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        url={pageMeta.url}
        image={pageMeta.image}
        creator={pageMeta.creator}
      />
      <NavBar />

      <main
        className={`${styles.main} max-w-screen-xl w-full p-4 md:py-12 md:px-4`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
