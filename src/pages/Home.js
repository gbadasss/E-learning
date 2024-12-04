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
  grid_icon1,
  grid_icon2,
  grid_icon3,
  Ellipse_circle,
  teacherImg,
  rectangle_rectangle,
  rectangle_rectangle1,
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

      <p className="text-text_blue1 text-center text-2xl mt-16">
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
          Skilline is one powerful online software suite that combines all the{" "}
          <br />
          tools needed to run a succesful school or office
        </p>
      </div>

      <div className="xl:grid xl:grid-cols-3 items-center justify-center mt-[200px] px-[100px] gap-[50px]">
        <div className="relative boxSh w-[380px] h-[380px] rounded-xl">
          <div className="text-center ">
            <p className="text-3xl mt-20 text-text_blue leading-[45px]">
              Online Billing <br /> Invoice, & Contact
            </p>
            <p className="mt-8 text-xl text-text_blue1 leading-[40px]">
              Simple and secure control of your organization's financial and
              legal transactions, send customized <br /> invoices and contact
            </p>
          </div>
          <div className="absolute grid_top">
            <img
              src={grid_icon1}
              className=" h-[150px] w-[150px]"
              alt="loading"
            />
          </div>
        </div>

        <div className="relative boxSh w-[380px] h-[380px] rounded-xl">
          <div className="text-center ">
            <p className="text-3xl mt-20 text-text_blue leading-[45px]">
              Easy Scheduling & <br /> Attendance Tracking
            </p>
            <p className="mt-8 text-xl text-text_blue1 leading-[40px]">
              Simple and secure control of your organization's financial and
              legal transactions, send customized <br /> invoices and contact
            </p>
          </div>
          <div className="absolute grid_top">
            <img
              src={grid_icon2}
              className=" h-[150px] w-[150px]"
              alt="loading"
            />
          </div>
        </div>

        <div className="relative boxSh w-[380px] h-[380px] rounded-xl">
          <div className="text-center ">
            <p className="text-3xl mt-20 text-text_blue leading-[30px]">
              Customer Tracking
            </p>
            <p className="mt-10 text-xl text-text_blue1 leading-[40px]">
              Simple and secure control of your organization's financial and
              legal transactions, send customized <br /> invoices and contact
            </p>
          </div>
          <div className="absolute grid_top">
            <img
              src={grid_icon3}
              className=" h-[150px] w-[150px]"
              alt="loading"
            />
          </div>
        </div>
      </div>

      <div className="  text-center mt-32">
        <h1 className="text-text_blue font44 font-semibold">
          What is <span className="text-primary">Skilline</span>{" "}
        </h1>
        <p className="text-text_blue1 text-2xl mt-10 leading-[45px]">
          Skilline is a platform that allows educators to create online classes
          where they can <br /> store the course materials online;manage
          assignments, quizzes and exams; monitor <br /> due dates; grade
          results and provide students with feedback all in one place
        </p>
      </div>

      <div className="flex justify-center mt-20 items-center">
        <div className="xl:grid xl:grid-cols-2 items-center justify-center gap-10">
          <div className="w-[530px] h-[400px] instructor_img flex justify-center items-center">
            <div className="text-center">
              <p className="text-3xl text-white font-semibold">
                FOR INSTRUCTORS
              </p>
              <button className="w-[253px] h-[70px] border border-white rounded-full text-white mt-5 text-xl">
                Start a class today
              </button>
            </div>
          </div>

          <div className="w-[530px] h-[400px] student_img flex justify-center items-center">
            <div className="text-center">
              <p className="text-3xl text-white font-semibold">FOR STUDENT</p>
              <button className="w-[253px] h-[70px] border border-white rounded-full text-white mt-5 text-xl bg-text_skyblue">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-20 grid xl:grid-cols-2 items-center justify-center gap-16">
          <div className="relative w-[610px] h-[421.08px] flex justify-center items-center">
            <div className="w-[560px]">
              <p className="text-text_blue z-20 leading-[47px] text-3xl">
                Everything you can do in a physical classroom,{" "}
                <span className="text-primary">you an do with Skilline</span>{" "}
              </p>

              <p className="mt-10 text-text_blue1 leading-[35px]  text-xl">
                Skilline's school management software helps traditional and
                online schools manage scheduling, attendance payments and
                virtual classrooms all in one secure <br/> cloud-based system
              </p>
              <img
                src={Ellipse_circle}
                alt="loading"
                className="w-[73px] h-[73px] absolute top-[65px] -z-10 left-[0px]"
              />

              <img
                src={Ellipse_circle}
                alt="loading"
                className="w-[25px] h-[25px] absolute bottom-[125px] -z-10 right-0"
              />
            </div>
          </div>

          <div className="relative w-[610px] h-[421.08px] flex justify-center items-center">
            <img src={teacherImg} alt="loading" className="w-[560px] z-10" />

            <img
              src={rectangle_rectangle}
              alt="loading"
              className="w-[200px] h-[200px] absolute bottom-0 right-0"
            />
            <img
              src={rectangle_rectangle1}
              alt="loading"
              className="w-[150px] h-[150px] absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
