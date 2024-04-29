export const AboutCardano: React.FC = () => {
  return (
    <section id="cardano" className="features py-36 mx-auto">
      <div className="container mx-auto pl-6 sm:pl-0 pr-6 sm:pr-0">
       
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
        

          <Card
            title="Cosmic Wardrobe:
            Coming Soon"
            image="/fingerprint.png"
            data-aos="fade-right"
            data-aos-delay={400}
          >
            
            The ultimate fun tool to dress your SpaceBud in style!
            <br />
            <br />
            <br />
            
            <button className="btn-2 w-50">
        SpaceLabz Generator
      </button>
          </Card>
        
        </div>
      </div>
    </section>
  )
}

// @ts-ignore
const Card = ({ image, title, children, ...rest }) => {
  return (
    <div
      className="bg-main text-white p-10 shadow-md rounded-md relative w-full lg:w-1/3"
      {...rest}
    >
      <img className="mb-4 " src={image} alt="icon" />

      <h3 className="text-3xl mb-4">{title}</h3>
      <p>{children}</p>
    </div>
  )
}
