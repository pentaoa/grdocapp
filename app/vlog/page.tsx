import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Vlog',
    description: '观看视频',
  };

export default async function VlogPage() {
    return (
        <div className=" text-3xl ">
            你被骗了！(暂未更新)
        </div>
    )
}