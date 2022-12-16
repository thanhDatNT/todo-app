import {ReactNode} from "react";
import Head from "next/head"
import styles from "./layout.module.css";
import {ConfigProvider} from "antd";
import {COLORS} from "../../constants/color";

interface ILayout {
    children: ReactNode,
    title: string
}

export default function Layout({children, title}: ILayout) {
    return <div className={styles.container}>
        <Head>
            <link rel="icon" href="/public/favicon.ico"/>
            <meta name="description" content="Make you day in a schedule"/>
            <title>{title}</title>
        </Head>
        <main className={styles.main}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: COLORS.PRIMARY,
                    },
                }}
            >
                {children}
            </ConfigProvider></main>
    </div>;
}