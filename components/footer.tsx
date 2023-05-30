
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className="fixed bottom-0 text-center p-4">
    © 2023 Grada 
    </div>
  );
}
