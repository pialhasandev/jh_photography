import Image from "next/image";
import Link from "next/link";

export default function FacebookPage({ src,href }) {
  return (
   <div className="">
    <Link
  href={href}
  target="_blank"
>
  <Image
    src={src}
    alt="Wedding Album"
    width={600}
    height={400}
    className="rounded-xl"
  />
</Link>
   </div>
  );
}