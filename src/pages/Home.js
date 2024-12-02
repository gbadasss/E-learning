import Navigation from "./../component/Navigation";
import {
  FaPlay,
  bannerImage,
  airnbLogo,
  amazonLogo,
  googleLogo,
  facebookLogo,
  grabLogo,
  netflixLogo,
} from "./../assets";

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />

      <div className="h-[700px] w-full bg-primary_2 xl:grid xl:grid-cols-2 items-center xl:px-[70px]">
        <div className="">
          <h1 className="xl:text-5xl xl:w-[600px] xl:leading-[60px] text-text_blue font-bold">
            {" "}
            <span className="text-primary ">Studying</span> Online is now much
            easier
          </h1>

          <p className="xl:w-[550px] text-text_light text-xl mt-10">
            Skilline is an interesting platform that will teach you in more an
            interactive way{" "}
          </p>

          <div className="flex items-center gap-8 mt-10">
            <button className="w-[150px] rounded-5xl h-[55px] bg-primary text-white border_r80">
              Join for free
            </button>

            <div className="bg-white h-[60px] w-[60px] rounded-full flex justify-center items-center">
              <FaPlay className="text-2xl text-icon_blue" />
            </div>
            <p className="text-text_light text-xl ">Watch how it works</p>
          </div>
        </div>

        <div>
          <img src={bannerImage} alt="loading" />
        </div>
      </div>

      <p className="text-text_light text-center text-2xl mt-16">
        Trusted by 5,000+ Companies WorldWide
      </p>

      <div className="flex items-center gap-[50px] justify-center mt-12">
        <img src={airnbLogo} className="companyLogo_s4" alt="loading" />
        <img src={netflixLogo} className="companyLogo_s3" alt="loading" />
        <img src={amazonLogo} className="companyLogo_s2" alt="loading" />
        <img src={googleLogo} className="companyLogo_s5" alt="loading" />
        <img src={facebookLogo} className="companyLogo_s1" alt="loading" />
        <img src={grabLogo} className="companyLogo_s" alt="loading" />
      </div>

      <div className="mt-[150px] text-center">
        <h1 className="text-4xl text-text_blue font-bold ">
          All-In-One <span className="text-primary">Cloud Software</span>{" "}
        </h1>
        <p className="text-center mt-[40px] text-2xl text-text_blue1">
          Skilline is one powerful online software suite that combines all the <br/>
          tools needed to run a succesful school or office
        </p>
      </div>
    </div>
  );
}
