"use client";

import Image from "next/image";
import { redirect } from 'next/navigation'
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/docs/Machine_Learning_Proposal.pdf" locale={false}>Link to Proposal</Link>
    </main>
  );
}
