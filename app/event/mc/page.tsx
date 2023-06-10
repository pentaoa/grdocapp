import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Minecraft',
    description: '一起来玩吧！',
  };

export default async function McPage() {
    return (
        <section>
            <div>
                <h1 className="my-4 font-bold text-4xl">
                    PtaWorld
                </h1>
                
                <div className="font-semibold border-solid p-3 my-8 text-center border-2 border-indigo-600 rounded-lg">
                    grada.playmc.fun:25565
                </div>

                <div className="my-6">
                    
                </div>
            </div>
        </section>
    )
}