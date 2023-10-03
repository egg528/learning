import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "@site/src/components/SocialLink";

function Home() {
    const context = useDocusaurusContext();

    const mainRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)
    const [headerHeight, setHeaderHeight] = useState(1536);
    const [bannerHeight, setBannerHeight] = useState(256);

    useEffect(() => {
        const tempHeaderHeight = Math.max(384, window.innerHeight);
        setHeaderHeight(tempHeaderHeight);
        setBannerHeight(Math.max(256, tempHeaderHeight / 2));
        setIsLoading(false);
        mainRef.current.hidden = false;
    }, []);

    return (
        <Layout title="Home">
            <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
                <div
                    className={styles.heroBannerWrapper}
                    style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
                >
                    <p>Hi, my name is</p>
                    <h1 className="text-success">Woosuk Kwon</h1>
                    <p>
                        I am a <span className="text-warning">Software Engineer</span>{" "}
                        passionate about
                        solving meaningful <span className="text-danger">problems</span>.
                    </p>
                    <SocialLinks />
                    <p>
                        <Link to={useBaseUrl("#main")}>
                            <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                                whoami<span className="pl-1 animate-pulse">▎</span>
                            </button>
                        </Link>
                    </p>
                </div>
            </header>
            <main id="main" ref={mainRef} hidden={true}>
                <div className={styles.aboutHeader}>
                    <h2 className="border-0 border-b-4 border-solid border-success">Who am I</h2>
                </div>
                <div className={styles.about}>

                </div>
                <section className={styles.directory}>
                    <div className="container">
                        <h3>Continue exploring?</h3>
                        <nav className="pagination-nav">
                            <div className="pagination-nav__item">
                                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                                    <div className="pagination-nav__sublabel">Read</div>
                                    <div className="pagination-nav__label">My blog</div>
                                </Link>
                            </div>
                            <div className="pagination-nav__item pagination-nav__item--next">
                                <Link className="pagination-nav__link" to={useBaseUrl("docs/intro")}>
                                    <div className="pagination-nav__sublabel">Refer to</div>
                                    <div className="pagination-nav__label">My docs</div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;