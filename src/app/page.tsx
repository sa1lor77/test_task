import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="">
        <ul className="flex items-center gap-10 ">
          <li>
            <h1 className="">Главная</h1>
          </li>
          <li>
            <Link href="./Calculator">Калькулятор</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
