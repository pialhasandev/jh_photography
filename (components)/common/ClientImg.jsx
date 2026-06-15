
import Container from './Container'
import Image from 'next/image'

const ClientImg = ({src,srcTwo}) => {
  return (
    <div>
        <Container>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
         
            <Image
              src={src}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl border-4 border-amber-700 hover:scale-105 duration-500 "
            />
          
          
            <Image
              src={srcTwo}
              alt="Wedding Album"
              width={600}
              height={400}
              className="rounded-xl  hover:scale-105 duration-500 border-amber-700 border-4"
            />
        </div>
        </Container>
    </div>
  )
}

export default ClientImg