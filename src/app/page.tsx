import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center">
      <span>Home Page</span>
      <span className="flex flex-row items-end space-x-4">
        <Link href={"/performance"}>Goto Perf Page! </Link>
        <Link href={"/reliability"}>Goto Rel Page! </Link>
        <Link href={"/scale"}>Goto Scale Page! </Link>
      </span>
    </div>
  );
}
