import { CirclePlay } from "lucide-react"
import React, { useState } from "react"
import { Props, Image } from "../types"

export const Main: React.FC = () => {
    const [images, setImages] = useState<Image[]>([
        {
            src: "/MadameWeb.png",
            title: "MADAME (2024)",
            description: "Cassandra Webb, uma paramédica em Manhattan, tem habilidades de clarividência.<br/> Forçada a confrontar revelações sobre seu passado,<br/> ela forja uma relação com três jovens destinadas a futuros poderosos.",
            backImg: "Madame-web-fundo.png",
            banner: "/madame-banner.png",
            isMain: false
        },
        {
            src: "/Oppenheimer.png",
            title: "OPPENHEIMER (2023)",
            description: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan,<br/>levando ao desenvolvimento da bomba atômica",
            backImg: "Oppenheimer-fundo.png",
            banner: "/oppenheimer-banner.png",
            isMain: true
        },
        {
            src: "/KungFuPanda4.png",
            title: "O PANDA DO KUNG FU 4 (2024)",
            description: "Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria.<br/> Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser<br/> encontrados nos lugares mais inesperados.",
            backImg: "Kung-Fu-fundo.png",
            banner: "/kung-fu-banner.png",
            isMain: false
        }
    ])
    const handleMainImg = (index: number) => {
        const updatedImages = [...images]
        const mainImage = updatedImages.find(image => image.isMain)!
        updatedImages[index].isMain = true
        mainImage.isMain = false
        setImages(updatedImages)
    }
    return (
        <div>
            <main className='flex justify-around mt-8'>
                <section className='flex flex-col justify-center gap-2'>
                    <img src={images.find(image => image.isMain)?.src} alt={images.find(image => image.isMain)?.title} className='max-w-2xl pb-16' />
                    <h1 className='text-3xl'>{images.find(image => image.isMain)?.title}</h1>
                    <h6 className='text-zinc-500 my-2'>IMDb Rating</h6>
                    <img src="/Rating.png" alt="rating" width={250} />
                    <ul className='flex gap-2 p-2'>
                        <Li>História</Li>
                        <Li>Drama</Li>
                        <Li>Biografia</Li>
                    </ul>
                    <p className='text-zinc-600 text-lg' dangerouslySetInnerHTML={{ __html: images.find(image => image.isMain)?.description }} />
                    <button className='flex w-44 h-12 items-center justify-center gap-2 bg-zinc-50 text-zinc-900 text-xl font-bold my-4 rounded-md shadow-md shadow-zinc-50/70'><CirclePlay /> VER TRAILER</button>
                </section>
                <section className='flex items-end justify-center'>
                    {images.map((image, index) => (
                        <img key={index} src={image.banner} className={`${image.isMain ? 'w-1/4 opacity-100' : 'w-1/5 opacity-60'}`} onClick={() => { handleMainImg(index) }} />

                    ))}
                </section>
                <section>
                    <img src={images.find(image => image.isMain)?.backImg} alt={images.find(image => image.isMain)?.title} className='opacity-80 z-0 absolute top-14 right-12' />
                </section>
            </main>
        </div>
    )
}
const Li: React.FC<Props> = ({ children }) => {
    return (
        <li className='border-2 rounded-3xl p-2'>{children}</li>
    )
}
