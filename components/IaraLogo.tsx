import Image from "next/image";

export function IaraLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/branding/iara-brand-v1-darkmode.svg"
      alt="IARA"
      width={140}
      height={40}
      className={className}
    />
  );
}

export function IaraIcon({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/FAVICON.svg"
      alt="IARA Icon"
      width={64}
      height={64}
      className={className}
    />
  );
}

export function IaraFullLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/branding/iara-brand-v1-darkmode.svg"
      alt="IARA"
      width={200}
      height={60}
      className={className}
    />
  );
}
