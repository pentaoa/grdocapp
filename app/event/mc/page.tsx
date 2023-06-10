import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Minecraft',
    description: '一起来玩吧！',
  };

export default async function McPage() {
    return (
        <div>
            <h1 >
                PtaWorld
            </h1>
            <div>
                如何加入？
            </div>
            <div>
                首先，
            </div>
        </div>
    )
}