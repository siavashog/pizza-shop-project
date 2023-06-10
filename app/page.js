'use client'

import Featured from "@/app/components/Featured";
import PizzaList from "@/app/components/PizzaList";
import styles from "@/app/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
      <Featured/>
      <PizzaList/>
    </div>
    </>
  )
}
