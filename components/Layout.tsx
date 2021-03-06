import { useRouter } from "next/router";
import Head from "next/head";
import meta from "../staticData/siteMetaData.json";
import { MetaDataProps } from "types/metaData";
import { FC } from "react";
import Header from "./Header";
import UpperHeader from "./UpperHeader";
import Footer from "./Footer";
// import HeaderForPolicy from "./HeaderForPolicy";
// import Footer from "./Footer";
// import FooterForPolicy from "./FooterForPolicy";

const Layout: FC<MetaDataProps> = ({
    title,
    description,
    keywords,
    ogImage,
    ogUrl,
    children,
}) => {
    const cipherOgImage =
        "";
    const router = useRouter();
    const checkPolicyPage =
        router.pathname !== "/privacy-policy" &&
        router.pathname !== "/terms-and-conditions" &&
        router.pathname !== "/cookies-policy";
        "";
    return(
        <>
        <Head>
            <title>{!title ? meta.title : title}</title>
            <meta 
                name="description"
                content={!description ? meta.description : description}
            />
            <meta
                property="og:title"
                content={!title ? meta.title : title}
            />
            <meta
                    property="og:description"
                    content={!description ? meta.description : description}
                />
                <meta
                    property="og:url"
                    content={
                        !ogUrl
                            ? ""
                            : ``
                    }
                />
                <meta
                    property="og:image"
                    content={!ogImage ? cipherOgImage : ogImage}
                />
                <meta
                    name="twitter:url"
                    content={
                        !ogUrl
                        ? ""
                        : ``
                    }
                />
                <meta
                    name="twitter:title"
                    content={!title ? meta.title : title}
                />
                <meta
                    name="twitter:description"
                    content={!description ? meta.description : description}
                />
                <meta
                    name="keywords"
                    content={!keywords ? meta.keywords : keywords}
                />
                <meta name="robots" content="index, follow" />
        </Head>
        <UpperHeader/>
        {checkPolicyPage ? <Header /> : "hello"}
            {children}
        {checkPolicyPage ? <Footer/> : "hello"}
        </>
    )
}

export default Layout;