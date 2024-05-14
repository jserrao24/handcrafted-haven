import Image from 'next/image';
import Link from 'next/link';
export default function HandcraftedHavenLogo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/hhHeader.png"
          alt="logo"
          className="h-32 flex-shrink-0 rounded-lg"
          width={550}
          height={55}
        />
      </Link>
    </div>
  );
}
