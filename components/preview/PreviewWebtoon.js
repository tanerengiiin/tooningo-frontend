import React from 'react'
import Image from 'next/image';

const PreviewWebtoon = () => {
    const dosyaAdlari = [];
    for (let i = 1; i <= 158; i++) {
        const dosyaAdi = i.toString().padStart(3, '0');
        dosyaAdlari.push(`/images/${dosyaAdi}.jpg`);
    }
    return (
        <div className='max-w-2xl mx-auto'>
            {dosyaAdlari.map((dosya, index) => (
                <Image src={dosya} alt={`Görsel ${index + 1}`} width={0} height={0} className='w-full h-auto' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            ))}
        </div>
    )
}

export default PreviewWebtoon