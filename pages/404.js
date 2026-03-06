import Error from '../public/png/404.png'
import Image from 'next/image'

const NotFound = () => {
    return (
        <>
            <div className='con_404'>
                <Image
                    src={Error}
                    alt='Page not found'
                    priority
                    fill
                    quality={75}
                    placeholder='blur'
                    className="img_404"
                />
            </div>
        </>
    )
}

export default NotFound
