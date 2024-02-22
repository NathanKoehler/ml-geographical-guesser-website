"use client";

import Image from "next/image";
import { redirect } from 'next/navigation'
import styles from "./page.module.css";

export default function Home() {
  redirect('/docs/Machine_Learning_Proposal.pdf');
  // return (
  //   <main className={styles.main}>
        
  //   </main>
  // );
}
