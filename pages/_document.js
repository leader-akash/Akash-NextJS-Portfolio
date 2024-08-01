import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en" className="notranslate">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.png" />
                    {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
                    <meta name="apple-mobile-web-app-title" content="Akash" />
                    <meta name="application-name" content="Akash" />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2c2f33" />
                    <meta name="google" content="notranslate" />
                    <meta name="google-site-verification" content="2-WOSZUOxNpWd5-SvnfJyr4l6sG5oVZvx3MxZ5Ow5_o" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument